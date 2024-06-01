'use client'

import { PieChart } from '@mui/x-charts/PieChart';

export default function Chart() {
    return (
        <PieChart
            series={[
                {
                    data: [
                        { id: 0, value: 10, label: 'Bitcoin BTC' },
                        { id: 1, value: 15, label: 'Ethereum ETH' },
                        { id: 2, value: 20, label: 'Ripple XRP' },
                        { id: 3, value: 30, label: 'Litecoin LTC' },
                        { id: 4, value: 24, label: 'Other Altcoins' },
                    ],
                },
            ]}
            width={450}
            height={200}
        />
    )
}


