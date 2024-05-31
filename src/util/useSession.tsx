'use server'
import { getIronSession } from "iron-session";
import { SessionData, defaultSession, sessionOption } from "@/lib/sessions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { User } from "@prisma/client";
import { UploadFileResult } from "uploadthing/types";
import prisma from "./prismaClient";
import { deleteFiles } from "./utfiles";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOption);

  if (!session.isLoggedin) {
    session.isLoggedin = defaultSession.isLoggedin
  }

  return session
};

export const login = async (data: User) => {
  const session = await getSession()

  session.userId = data.id
  session.username = data.username
  session.email = data.email
  session.name = `${data.fname} ${data.lname}`
  session.isLoggedin = true

  await session.save()
  redirect("/verify")

};

export const logout = async () => {
  const session = await getSession()

  session.destroy()
  redirect("/login")
};

export const changeUploads = async (state: boolean, data?: UploadFileResult[], docs?: string) => {
  const session = await getSession()

  if (state) {
    if (!data) return
    await prisma.user.update({
      where: {
        username: session.username
      },
      data: {
        docType: docs,
        front: data[0].data?.key,
        back: data[1].data?.key
      }
    })

    session.fileUploaded = true

  } else {
    await prisma.user.update({
      where: {
        username: session.username,
      },
      data: {
        docType: null,
        front: null,
        back: null
      }
    })
    session.fileUploaded = false

  }

  await session.save()
}