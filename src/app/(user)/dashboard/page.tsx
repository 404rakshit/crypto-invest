import Chart from "./pie-chart";
import { InvestmentTable } from "./table";
import { Assets } from "./assets";
import { getSession } from "@/util/useSession";
import { redirect } from "next/navigation";
import { admin } from "@/lib/jotai";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import prisma from "@/util/prismaClient";

export default async function Dashboard() {

  const session = await getSession()
  if (session.email == admin) redirect("/admin")
  if (!session.isLoggedin) redirect("/login")
  if (!session.verified) redirect("/verify")

  const data = await prisma.portfolio.findUnique({
    where: {
      username: session.username
    }, select: {
      protables: true
    }
  })

  return (
    <main className="flex flex-col items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-muted/40 min-h-screen">
      <div className="flex flex-col gap-8 items-start lg:items-center p-5 px-5 max-w-7xl mx-auto w-full">
        <div className="flex max-lg:flex-col items-center justify-between gap-6 w-full">
          <div className="flex flex-1 flex-col items-center gap-2">
            <h1 className="text-3xl font-bold">Portfolio Overview</h1>
            <div className="-translate-x-8">
              <Chart data={data!} />
            </div>
          </div>
          <div className="flex flex-1 w-full flex-col items-center gap-2">
            <h2 className="text-3xl font-bold">💰Overall Investment</h2>
            <Suspense fallback={<DummyInvestmentTable />}>
              <InvestmentTable username={session.username!} />
            </Suspense>
          </div>
        </div>

        <div className="flex flex-col w-full max-w-6xl">
          <Assets data={data!} />
        </div>
      </div>
    </main>
  );
}

function DummyInvestmentTable() {
  return (
    <div className="flex gap-10 justify-center w-full p-4">
      <section className="flex flex-col">
        <span className="text-lg">Total Portfolio Value:</span>
        <span className="text-lg">Investment:</span>
        <span className="text-lg">Portfolio Change(24H):</span>
        <span className="text-lg">Portfolio Allocation:</span>
      </section>
      <section className="flex flex-col text-muted-foreground text-lg gap-2">
        <Skeleton className="h-5 w-10" />
        <Skeleton className="h-5 w-10" />
        <Skeleton className="h-5 w-10" />
        <Skeleton className="h-5 w-10" />
      </section>

    </div>
  )
}