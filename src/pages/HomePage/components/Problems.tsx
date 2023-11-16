import Icon, { IconType } from "../../../common/Icon";

const items: { icon: IconType; title: string }[] = [
  {
    icon: "passKey",
    title: "Lorem ipsum dolor wrong mistake for that popcorn/yum was wrong?",
  },
  {
    icon: "analytics",
    title: "Lorem wrong mistake for that popcorn/yum was wrong?",
  },
  {
    icon: "arrow_forward",
    title: "Lorem wrong mistake for that was wrong?",
  },
  {
    icon: "description",
    title: "Lorem wrong mistake for that yummier popcorn/yum was wrong?",
  },
];

export default function Problems() {
  return (
    <section className="p-page py-28 text-center">
      <div className="flex flex-col items-center px-[18vw]">
        <h1 className="font-lato text-4xl font-black tracking-tight">
          Having problems managing accounting and expenses of your crypto/fiat
          business?
        </h1>
        <div className="flex flex-col gap-y-6 mt-14">
          {items.map((item, key) => (
            <h5 key={key} className="flex items-center gap-x-4">
              <Icon
                className="text-4xl"
                stroke={`theme("colors.front")`}
                icon={item.icon}
              />
              <span className="opacity-70 font-light text-lg">
                {item.title}
              </span>
            </h5>
          ))}
        </div>
        <p className="mt-14 font-lato font-medium">
          BlockPeer introduces a one size fits all solution to all these
          problems
        </p>
      </div>
    </section>
  );
}
