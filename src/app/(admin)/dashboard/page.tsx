import Link from "next/link";
import DocForm from "./documentForm";

export default function Dashboard() {
  return (
    <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 bg-muted/40 min-h-screen">
      <div className="flex items-start lg:items-center justify-center py-10 px-5 max-w-3xl mx-auto w-full max-lg:min-h-screen">
        <div className="grid gap-6">
          <div className="grid gap-2">
            <h1 className="text-3xl font-bold">Upload Document</h1>
            <p className="text-muted-foreground">
              (Driving License or Government ID card) Uploading your ID helps as
              ensure the safety and security of your funds
            </p>
          </div>
          <DocForm />
        </div>
      </div>
    </main>
  );
}
