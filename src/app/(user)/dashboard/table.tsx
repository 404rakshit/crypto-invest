import prisma from "@/util/prismaClient"

export async function InvestmentTable({ username }: { username: string }) {

    const data = await prisma.user.findUnique({
        where: {
            username
        }, select: {
            Portfolio: true
        }
    })

    return (
        <div className="flex gap-10 justify-center w-full p-4">
            <section className="flex flex-col">
                <span className="text-lg">Total Portfolio Value:</span>
                <span className="text-lg">Investment:</span>
                <span className="text-lg">Portfolio Change(24H):</span>
                <span className="text-lg">Portfolio Allocation:</span>
            </section>
            <section className="flex flex-col text-muted-foreground text-lg">
                <span>${data?.Portfolio?.total}</span>
                <span>${data?.Portfolio?.investment}</span>
                <span>{data?.Portfolio?.change}%</span>
                <span>{data?.Portfolio?.allocation}%</span>
            </section>

        </div>
    )
}
