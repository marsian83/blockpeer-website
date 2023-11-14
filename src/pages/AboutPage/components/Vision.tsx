import { useEffect, useRef, useState } from "react";
import useCoords from "../../../hooks/useCoords";
import { linearMap } from "../../../utils";
import { twMerge } from "tailwind-merge";

const items = [
  {
    title: "A Company with Integrity",
    content:
      "BlockPeer operates as a private company with a public vision. By steering clear of investor funding, we've maintained the freedom to prioritize customer welfare over short-term profits. This independence fuels our unconventional problem-solving approach, empowering us to think differently. With over 15,000 employees and 100 million users worldwide, our commitment to this vision has yielded extraordinary results. Our dedication to integrity extends beyond business; it's a commitment to ethical practices, transparency, and building a lasting positive impact on the crypto and financial landscape.",
  },
  {
    title: "Your Trusted Partner",
    content:
      "At BlockPeer, we believe that software should be a solution, not a problem. We refuse to lock you into multi-year contracts or employ pushy sales tactics. Our products are available à la carte or as suites, offering flexible payment options to suit every budget. Our commitment to transparency goes beyond just pricing; it's ingrained in our culture and reflected in our privacy policy. We understand the value of trust in a partnership, and that's why we aim to be your trusted partner in navigating the dynamic world of crypto accounting and finance.",
  },
  {
    title: "Privacy, the Cornerstone",
    content:
      "Privacy is the cornerstone of our philosophy at BlockPeer. We firmly believe in a common-sense approach to protecting user data. Placing our users before profits is not just a statement; it's our guiding principle. We've made a pledge to never display ads within our platform, not even in the free editions. Selling user information to third parties is strictly off-limits. By enforcing a ban on third-party trackers across our websites, we ensure that your business data remains exclusively yours. Our commitment to privacy is not just a feature; it's a fundamental aspect of our identity.",
  },
  {
    title: "Respecting Your Data Rights",
    content:
      "At BlockPeer, we have no interest in compromising your privacy for quick gains. Every individual, regardless of their location, deserves control over their data. We don't need laws and regulations to tell us that; it's an inherent commitment to doing what's right. Respecting your data rights is not just a policy for us; it's a fundamental value that guides every decision we make. We believe that users should have complete control and ownership of their data, and we strive to uphold this principle in every aspect of our platform.",
  },
  {
    title: "A Holistic Business Solution",
    content:
      "Choosing BlockPeer means more than adopting a product; it's embracing the operating system for business. Developed over a decade of engineering and design effort, BlockPeer offers over 55 deeply integrated apps for web and mobile. Whether you need a singular solution or a comprehensive platform, we've got you covered. Our commitment to providing a holistic business solution goes beyond just features. It's about empowering businesses with the tools they need to thrive in the ever-evolving landscape of crypto accounting and finance. And if we haven't built it yet, rest assured, it's on our roadmap, as we constantly strive to innovate and enhance our offerings.",
  },
  {
    title: "Community-Centric Values",
    content:
      "As a global company, we understand the importance of good citizenship. Giving back is ingrained in our culture. From providing subscription relief to businesses affected by natural disasters to constructing solar farms that offset our carbon footprint, we actively seek ways to uplift the communities we operate in. Our community-centric values are not just a reflection of corporate social responsibility; they are a testament to our commitment to making a positive impact on the world. We believe that businesses have a responsibility to contribute to the well-being of the communities they serve, and we take pride in actively pursuing initiatives that bring about positive change.",
  },
];

export default function Vision() {
  const [legendTop, setLegendTop] = useState(0);
  const [index, setIndex] = useState(0);

  const sectRef = useRef() as React.MutableRefObject<HTMLElement>;
  const legendRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const initialPos = useCoords(sectRef);

  function scrollHandler() {
    setLegendTop(
      linearMap(
        window.scrollY,
        {
          from: initialPos.top,
          to: initialPos.top + (items.length - 1) * window.innerHeight,
        },
        { from: -10, to: legendRef.current.offsetHeight - 28 }
      )
    );
    setIndex(
      Math.round(
        linearMap(
          window.scrollY,
          {
            from: initialPos.top,
            to: initialPos.top + (items.length - 1) * window.innerHeight,
          },
          { from: -0.4, to: items.length - 1.1 }
        )
      )
    );
  }

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);

    return () => window.removeEventListener("scroll", scrollHandler);
  });

  return (
    <section ref={sectRef} className="py-20 p-page">
      <h1 className="text-3xl font-semibold text-center mb-10">Our Vision</h1>

      <div className="flex">
        <div className="sticky top-0 h-screen w-1/3 flex flex-col justify-center items-center">
          <div className="relative flex flex-col gap-y-8" ref={legendRef}>
            <figure
              className="absolute right-[110%] h-[2em] w-1 bg-primary"
              style={{ top: legendTop }}
            />
            {items.map((item, key) => (
              <button
                key={key}
                className={twMerge(
                  "duration-150 w-full text-start",
                  index === key
                    ? "text-primary scale-105 translate-x-2 drop-shadow-md"
                    : "hover:text-secondary"
                )}
                onClick={() =>
                  window.scrollTo({
                    top: initialPos.top + key * window.innerHeight,
                  })
                }
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1">
          {items.map((item, key) => (
            <div
              key={key}
              className="h-screen flex flex-col justify-center gap-y-20"
            >
              <p>{item.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
