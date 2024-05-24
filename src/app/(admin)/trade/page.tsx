import FundsTable from "./funds-table";

export default function FundAccount() {
    return (
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-muted/40 min-h-screen">
            <div className="flex items-start lg:items-center justify-center py-10 px-5 max-w-7xl mx-auto w-full max-lg:min-h-screen">
                <div className="grid gap-6 w-full">
                    <div className="grid gap-2">
                        <h1 className="text-3xl font-bold">Trade History</h1>
                        {/* <Alert>
                            <CircleAlert className="h-4 w-4" />
                            <AlertTitle>Notice</AlertTitle>
                            <AlertDescription>
                                Please Note that Minimum Fund Amount is $500. Contact <span className="font-bold">contact@cryptoinvestusa.com</span> for more details. Ensure to provide your Funding Code when contacting support. If you encounter any issue while funding your account, please contact <span className="font-bold">contact@cryptoinvestusa.com</span> for assistance. Your account once your payment is confirmed.
                            </AlertDescription>
                        </Alert> */}
                    </div>
                    <FundsTable />
                </div>
            </div>
        </main>
    );
}
