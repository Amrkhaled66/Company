import Card from "./Card";

const Cards = [
  {
    title: "Business",
    subTitle:
      "Best for Startup business owners who needs website for business.",
    price: "$299.00",
    pros: [
      "10 GB disk space availability",
      "50 GB NVMe SSD for use",
      "Free platform access for all",
      "Free lifetime updates facility",
      "Free one year support",
      "24/7 Support",
    ],
  },
  {
    title: "Business",
    subTitle:
      "Best for Startup business owners who needs website for business.",
    price: "$299.00",
    pros: [
      "10 GB disk space availability",
      "50 GB NVMe SSD for use",
      "Free platform access for all",
      "Free lifetime updates facility",
      "Free one year support",
      "24/7 Support",
    ],
    isPrimary: true,
  },
  {
    title: "Business",
    subTitle:
      "Best for Startup business owners who needs website for business.",
    price: "$299.00",
    pros: [
      "10 GB disk space availability",
      "50 GB NVMe SSD for use",
      "Free platform access for all",
      "Free lifetime updates facility",
      "Free one year support",
      "24/7 Support",
    ],
  },
];

export default function PricingCards() {
  return (
    <div className="flex flex-col gap-x-6 gap-y-5 lg:flex-row">
      {Cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
