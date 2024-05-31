import * as React from "react";
import Image from "next/image";
import Link from "next/link";

import { Header, Sidebar } from "./header"
import { getSession } from "@/util/useSession";
import { redirect } from "next/navigation";

export default async function Dashboard({ children }: { children: React.ReactNode }) {

  const session = await getSession()

  if (!session.isLoggedin) redirect("/login")

  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <aside className="fixed sm:inset-y-0 bottom-0 sm:left-0 z-50 sm:w-14 w-full sm:flex-col border-r max-sm:h-fit border-violate bg-violate flex">
        <nav className="flex sm:flex-col max-sm:justify-between items-center gap-4 px-2 py-2 sm:py-4 w-full">
          <Link className="hidden sm:block" href={"/"}>
            <Image src={"/oldlogo.png"} alt="" width={30} height={30} />
          </Link>
          <Sidebar />
        </nav>
      </aside>
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <Header />
        {children}
      </div>
    </div>
  );
}
