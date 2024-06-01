import Link from "next/link";
import DocForm from "./documentForm";
import Chart from "./pie-chart";
import { InvestmentTable } from "./table";
import { Assets } from "./assets";

export default function Dashboard() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-muted/40 min-h-screen">
      <div className="flex flex-col gap-8 items-start lg:items-center py-10 px-5 max-w-7xl mx-auto w-full max-lg:min-h-screen">
        <div className="flex max-lg:flex-col items-center justify-between gap-6 w-full">
          <div className="flex flex-1 flex-col items-center gap-2">
            <h1 className="text-3xl font-bold">Portfolio Overview</h1>
            <Chart />
          </div>
          <div className="flex flex-1 w-full flex-col items-center gap-2">
            <h2 className="text-3xl font-bold">💰Overall Investment</h2>
            <InvestmentTable />
          </div>
        </div>

        <div className="flex flex-col w-full max-w-6xl">
          <Assets />
        </div>
      </div>
    </main>
  );
}
