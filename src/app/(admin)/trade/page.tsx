import FundsTable from "./funds-table";

export default function FundAccount() {
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-muted/40 min-h-screen">
            <div className="flex flex-col gap-3 items-start justify-center py-10 px-5 max-w-7xl mx-auto w-full max-lg:min-h-screen">
                <h1 className="text-3xl font-bold">Trade History</h1>
                <FundsTable />
            </div>
        </main>
    );
}
