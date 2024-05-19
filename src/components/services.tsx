import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Services() {
  const cards = [
    {
      title: "Crypto Investment Advise",
      description:
        "At Crypto Invest USA, we understand the allure and potential of the dynamic world of cryptocurrency. With our expert insights and comprehensive resources, we're here to empower you to make informed decisions and navigate the ever-evolving landscape of digital assets.",
      image: "/consultant.png",
    },
    {
      title: "Crypto Investments",
      description:
        "Join the millions of investors worldwide who are harnessing the power of cryptocurrency to build wealth and secure their financial futures. Whether you're looking to diversify your portfolio, hedge against inflation, or capitalize on emerging trends, Crypto Invest USA is here to help you achieve your investment goals",
      image: "/investment.png",
    },
    {
      title: "Crypto Asset Management",
      description:
        "Let Crypto Invest USA be your trusted partner in crypto asset management. Whether you're looking to build a diversified crypto portfolio, optimize your existing holdings, or explore new investment opportunities, we're here to help you navigate the exciting world of digital assets with confidence.",
      image: "/wealth.png",
    },
  ];

  return (
    <div className="p-4 md:p-10">
      <div className="mx-auto grid w-full max-w-6xl gap-10">
        <div className="grid gap-2 mx-auto text-center max-w-lg">
          <h2 className="text-4xl max-sm:text-3xl font-semibold">
            Services We Provide
          </h2>
          <p className="text-sm text-muted-foreground">
            We build effective strategies to help you reach customers and
            prospects across the entire web.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {cards.map(({ title, description, image }, i) => (
              <Card key={i} className="shadow-md">
                <CardHeader className="gap-2 text-center items-center">
                  <div className="p-2 bg-gradient-to-tr from-primary to-orange-500 backdrop-blur-sm rounded-full">
                    <div className="p-0.5 w-fit rounded-full bg-muted flex-1">
                      <Image
                        src={image}
                        alt={title}
                        width={50}
                        height={50}
                        className="w-10 h-10"
                      />
                    </div>
                  </div>
                  <CardTitle>{title}</CardTitle>
                  <CardDescription className="text-center">
                    {description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
