import Hero from "./components/Hero";

export default function DemoPage() {
  return (
    <>
      <Hero />

      <div className="relative my-10">
        <iframe
          className="aspect-video w-full"
          src="https://cal.com/blockpeer/30min?date=2023-11-15&month=2023-11"
        />

        <div className="absolute-cover flex justify-center items-center -z-1">
          <div className="flex flex-col items-center gap-y-8">
            <div className="animate-spin border-[5px] border-dashed border-primary aspect-square w-[20vw] rounded-full" />
            <p className="text-primary">Loading ...</p>
          </div>
        </div>

        <div className="bg-background absolute z-10 top-0 left-0 w-full h-[4vw]" />
      </div>
    </>
  );
}
