import { useState } from "react";
import { splitArrayThirds } from "../../../utils";
import { twMerge } from "tailwind-merge";

export default function Testimonials() {
  const arrsMax = splitArrayThirds(testimonials);
  arrsMax.reverse();

  const arrsMin = arrsMax.map((arr) => arr.slice(0, 3));

  const [expanded, setExpanded] = useState(false);

  return (
    <section className="p-page relative">
      <h1 className="font-lato text-4xl font-black tracking-tight mb-14 text-center mt-20">
        Hear what accounting proffesionals <br />
        are saying about our platform
      </h1>

      <div className="relative">
        <div className="flex relative justify-between mb-8">
          {(expanded ? arrsMax : arrsMin).map((col, key) => (
            <Column key={key} data={col} />
          ))}
        </div>

        {!expanded && (
          <div className="absolute z-10 h-[33%] bg-gradient-to-b from-transparent to-background w-full -bottom-2" />
        )}

        <button
          className={twMerge(
            "absolute z-10 -bottom-5 btn-1",
            expanded ? "sticky bottom-0 w-full" : "left-1/2 -translate-x-1/2"
          )}
          onClick={() => setExpanded((p) => !p)}
        >
          {expanded ? "Show Less" : "Show more"}
        </button>
      </div>
    </section>
  );
}

interface ColumnProps {
  data: typeof testimonials;
}

function Column(props: ColumnProps) {
  return (
    <div className="flex flex-col w-[calc(33%_-_12px)] gap-y-[24px]">
      {props.data.map((item, key) => (
        <div
          key={key}
          className="flex rounded-xl border border-front border-opacity-20 shadow p-4"
        >
          <div className="basis-[12%]">
            <img
              src={item.image}
              alt={item.name}
              className="w-full aspect-square object-cover rounded-full"
            />
          </div>

          <div className="flex-1 pl-4">
            <h1 className="font-semibold text-lg">{item.name}</h1>
            <p className="pt-4 text-sm font-light text-front text-opacity-90">
              "{item.review}"
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

const testimonials = [
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8",
    name: "Mark Thompson",
    review:
      "BlockPeer has revolutionized the way we handle accounting and crypto transactions. The seamless integration of safe multisig wallets and the crypto accounting platform has simplified our financial operations.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8",
    name: "Emily Rodriguez",
    review:
      "I appreciate BlockPeer's commitment to privacy. The decentralized crypto invoicing solution ensures that our financial data remains secure, and the automatic accounting entries save us valuable time.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8",
    name: "Alex Turner",
    review:
      "BlockPeer's crypto payroll and payday financing features have been a game-changer for our remote employees. It's empowering to provide blockchain-based financing with just a click, making payroll management efficient.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8",
    name: "Sophia Chang",
    review:
      "As a CFO, having an EOA powered by an MPC wallet for secure transactions is invaluable. BlockPeer's social login wallets and email login based on web3auth add an extra layer of convenience to our financial processes.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8",
    name: "William Garcia",
    review:
      "BlockPeer's commitment to transparency is evident in both its pricing and privacy policy. No hidden fees, no pushy sales tactics. It's refreshing to work with a company that prioritizes the customer's needs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8",
    name: "Eva Martinez",
    review:
      "Choosing BlockPeer means adopting a holistic business solution. The full-fledged accounting module built on Odoo ERP caters to both fiat and crypto accounting, providing a comprehensive platform for our diverse needs.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8",
    name: "Nathan Brooks",
    review:
      "BlockPeer's commitment to community-centric values sets them apart. The initiatives, such as providing subscription relief during natural disasters and contributing to sustainable practices, showcase their dedication to social responsibility.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8",
    name: "Amanda Foster",
    review:
      "I've been using BlockPeer for supplier payments, and the spot crypto payment and post-dated crypto payment features are fantastic. It's a testament to BlockPeer's innovative approach to blockchain-based credit purchases.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8",
    name: "Michael Collins",
    review:
      "BlockPeer's unconventional problem-solving approach and independence from investor funding have resulted in an operating system for business that truly stands out. It's more than a product; it's a long-term solution.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Linda Walker",
    review:
      "The commitment to good citizenship is evident in BlockPeer's efforts to give back to communities. From subscription relief to building solar farms, they actively contribute to making a positive impact on the world.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Chris Evans",
    review:
      "BlockPeer's user-centric approach to privacy is commendable. They've gone the extra mile by prohibiting third-party trackers, ensuring that our business data remains ours alone. It's the right thing to do, and it sets them apart.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Samantha Reed",
    review:
      "BlockPeer has been a reliable partner for our business. The flexibility in payment options, transparent pricing, and the array of integrated apps make it a go-to solution for businesses of all sizes.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Daniel Murphy",
    review:
      "The safe multisig and account abstraction wallets within BlockPeer provide an added layer of security for our transactions. Managing multisig transaction flow has never been more straightforward.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Olivia Turner",
    review:
      "BlockPeer's crypto invoicing solution stands out for its decentralization. The encryption of crypto invoice data in Tableland ensures that our financial information remains fully decentralized and secure.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Victor Wang",
    review:
      "Kudos to BlockPeer for the innovative crypto payroll and payday financing features. It's empowering our employees and streamlining the process of blockchain-based financing for our organization.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Isabella Carter",
    review:
      "The commitment to long-term thinking and freedom from investor funding is evident in BlockPeer's approach. It reflects in the quality of their products and the trust they've built with over 100 million users globally.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Robert Bennett",
    review:
      "BlockPeer's unconventional hiring and building approach has resulted in a diverse and talented team of over 15,000 employees. It speaks volumes about their commitment to thinking differently and fostering innovation.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Catherine White",
    review:
      "BlockPeer's spot crypto payment for supplier bills is a game-changer. The ability to pay directly from the Safe Multisig wallet and automate accounting entries adds efficiency to our financial processes.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Derek Harris",
    review:
      "BlockPeer's social login wallets with email login based on web3auth make accessing the power of blockchain seamless. It's a user-friendly feature that enhances the security of our financial transactions.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Sophie Robinson",
    review:
      "BlockPeer's commitment to giving more than they get is evident in their community initiatives. Whether it's providing relief during natural disasters or contributing to carbon offset projects, they actively make a positive impact.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Ryan Miller",
    review:
      "BlockPeer's focus on good citizenship is admirable. The initiatives to support communities and offset their carbon footprint showcase a commitment to making a meaningful difference beyond the business realm.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw4NjYyMzA3MXx8ZW58MHx8fHx8g",
    name: "Emma Turner",
    review:
      "BlockPeer's dedication to privacy and user control over data sets them apart. It's reassuring to work with a company that prioritizes what's right, independent of laws and regulations, ensuring the security of our data.",
  },
];
