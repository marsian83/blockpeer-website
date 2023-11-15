const items = [
  {
    icon: "",
    title:
      "Already sent money by mistake because your copy/paste was incorrect?",
  },
] as const;

export default function Problems() {
  return (
    <section className="p-page py-32">
      <div className="flex flex-col items-center px-[20vw]">
        <h1 className="font-lato text-4xl font-black tracking-tight">
          Having problems managing accounting and expenses of your crypto/fiat
          business?
        </h1>
        <div className="flex flex-col gap-y-5 mt-5">
          {items.map((item, key) => (
            <h5>{item.title}</h5>
          ))}
        </div>
      </div>
    </section>
  );
}
