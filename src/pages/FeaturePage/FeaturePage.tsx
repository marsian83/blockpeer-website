import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import features from "../../assets/data/features";
import { twMerge } from "tailwind-merge";
import Icon from "../../common/Icon";
import Demo from "../../common/Demo";

export default function FeaturePage() {
  const navigate = useNavigate();

  const { key } = useParams();

  const feature = features.filter((f) => f.key === key)[0];
  if (!feature) navigate("/feature/not-found");

  return (
    <>
      <section className="p-page h-[90vh] flex items-center bg-primary bg-opacity-5">
        <div className="basis-1/2 pt-14">
          <h1 className="font-lato font-black tracking-tight text-5xl leading-tight">
            {feature.title}
          </h1>

          <h3 className="mt-12 text-xl font-medium text-front text-opacity-60">
            {feature.description}
          </h3>

          <div className="mt-14">
            <Link to="/demo" className="btn-1">
              Get a live Demo
            </Link>
          </div>
        </div>

        <div className="flex-1 pl-10 pt-10">
          <img src={feature.image} alt={feature.title} />
        </div>
      </section>

      {feature.sections.map((section, key) => (
        <section
          key={key}
          className={twMerge(
            "p-page py-[15vh] relative",
            key == feature.sections.length - 1 && "pb-0"
          )}
        >
          <div
            className={twMerge(
              "relative flex",
              key % 2 !== 0 && "flex-row-reverse"
            )}
          >
            <div
              className={twMerge(
                "basis-1/2",
                key % 2 !== 0 ? "pl-[20%]" : "pr-[20%]"
              )}
            >
              <div className="bg-secondary p-8 bg-opacity-20 rounded-lg">
                <img
                  src={section.image}
                  alt={section.title}
                  className="rounded-lg"
                />
              </div>
              <p className="text-center translate-y-4 text-sm text-secondary font-medium tracking-wide">
                {section.caption}
              </p>
            </div>
            <div className="flex-1 flex flex-col gap-y-6 pr-16">
              <h1 className="font-lato font-black text-4xl tracking-tight">
                {section.title}
              </h1>

              <h3 className="text-lg">{section.description}</h3>

              <ul className="flex flex-col gap-y-3">
                {section.items.map((item, key) => (
                  <li
                    key={key}
                    className="flex items-center gap-x-2 text-front text-opacity-60"
                  >
                    <Icon
                      icon="check"
                      className="bg-green-500 p-1 rounded-full text-xl text-white"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {key != feature.sections.length - 1 && (
              <figure className="border border-front border-opacity-[8%] absolute -bottom-[45%] w-full" />
            )}
          </div>
        </section>
      ))}

      <Demo />
    </>
  );
}
