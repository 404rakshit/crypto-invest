
export function InvestmentTable() {
    return (
        <div className="flex gap-10 justify-center w-full p-4">
            <section className="flex flex-col">
                <span className="text-lg">Total Portfolio Value:</span>
                <span className="text-lg">Investment:</span>
                <span className="text-lg">Portfolio Change(24H):</span>
                <span className="text-lg">Portfolio Allocation:</span>
            </section>
            <section className="flex flex-col text-muted-foreground text-lg">
                <span>$20,000</span>
                <span>$1,000</span>
                <span>+13%</span>
                <span>90%</span>
            </section>

        </div>
    )
}
