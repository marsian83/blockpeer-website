import PricingCard from "./components/PricingCard";

const plans = [
  {
    title: "Starter",
    description: "Best option for personal use & for your next project.",
    price: 29,
    features: [
      "Individual configuration",
      "No setup or hidden fees",
      "Team size: 1 developer",
      "Premium support: 6 months",
      "Free updates: 6 months",
    ],
    buttonText: "Contact Sales",
  },
  {
    title: "Company",
    description: "Relevant for multiple users, extended & premium support.",
    price: 99,
    features: [
      "Individual configuration",
      "No setup or hidden fees",
      "Team size: 10 developers",
      "Premium support: 24 months",
      "Free updates: 24 months",
    ],
    buttonText: "Contact Sales",
    popular: true,
  },
  {
    title: "Enterprise",
    description:
      "Best for large-scale uses and extended redistribution rights.",
    price: 499,
    features: [
      "Individual configuration",
      "No setup or hidden fees",
      "Team size: 100+ developers",
      "Premium support: 36 months",
      "Free updates: 36 months",
    ],
    buttonText: "Contact Sales",
  },
];

export default function PricingPage() {
  return (
    <div className="p-page pt-24 bg-opacity-[15%]">
      <div className="flex flex-col gap-y-3 items-center">
        <h1 className="text-primary font-medium text-lg">Pricing</h1>

        <div className="flex flex-col text-center gap-y-2 font-light text-xl text-front text-opacity-60">
          <p className="pb-8">
            Designed for business teams like yours <br />
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
      </div>

      <div className="pt-8 pb-12 flex justify-between">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}
