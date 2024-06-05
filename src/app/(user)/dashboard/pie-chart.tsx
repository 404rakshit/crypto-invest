'use client'

import { PieChart } from '@mui/x-charts/PieChart';
import { Portfolio } from '@prisma/client';

export default function Chart({ data }: { data: Pick<Portfolio, "protables"> }) {

    const tableData: any[] = JSON.parse(data?.protables || "[]")

    return (
        <PieChart
            series={[
                {
                    data: tableData.map(({ crypto, allocation }, i) => ({
                        id: i,
                        label: crypto,
                        value: allocation
                    }))
                    // [
                    //     { id: 0, value: 10, label: 'Bitcoin BTC' },
                    //     { id: 1, value: 15, label: 'Ethereum ETH' },
                    //     { id: 2, value: 20, label: 'Ripple XRP' },
                    //     { id: 3, value: 30, label: 'Litecoin LTC' },
                    //     { id: 4, value: 24, label: 'Other Altcoins' },
                    // ],
                },
            ]}
            width={380}
            height={170}
        />
    )
}


