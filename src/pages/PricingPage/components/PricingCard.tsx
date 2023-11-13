import { twMerge } from "tailwind-merge";
import Icon from "../../../common/Icon";

interface PricingCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  buttonText: string;
  popular?: boolean;
}

export default function PricingCard(props: PricingCardProps) {
  return (
    <div
      className={twMerge(
        "w-[30%] flex flex-col p-8 gap-y-5 justify-between rounded-xl shadow",
        props.popular
          ? "bg-primary text-back scale-105 -translate-y-2"
          : "bg-secondary bg-opacity-10 border border-primary border-opacity-20"
      )}
    >
      <div className="flex flex-col gap-y-5">
        <div className="flex w-full justify-between">
          <h1 className="font-semibold text-2xl">{props.title}</h1>
          {props.popular && (
            <div className="bg-background py-[2px] self-center shadow-xl px-5 rounded-full text-primary">
              Popular
            </div>
          )}
        </div>

        <p className="text-sm opacity-70">{props.description}</p>

        <div className="flex gap-x-2 items-baseline">
          <h2 className="text-4xl font-bold">${props.price}</h2>{" "}
          <p className="text-sm">/month</p>
        </div>

        <div className="mt-4 flex flex-col gap-y-3">
          {props.features.map((feature, key) => (
            <span key={key} className="flex gap-x-2 items-center">
              <Icon
                icon="done"
                className="bg-yellow-500 rounded-full p-1 text-xl text-black"
              />
              <span className="text-sm">{feature}</span>
            </span>
          ))}
        </div>
      </div>

      <button className="text-center bg-background w-full py-2 text-primary border border-primary border-opacity-70 rounded-lg mt-16 duration-500 hover:bg-yellow-500">
        {props.buttonText}
      </button>
    </div>
  );
}
