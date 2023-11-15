import useQueryParams from "../../../hooks/useQueryParams";

export default function Hero() {
  const query = useQueryParams();

  return (
    <section className="p-page pt-32">
      <div className="flex justify-center">
        <div className="relative">
          <h1 className="heading text-center">Schedule a live demo call</h1>
          <div className="absolute bottom-full -right-4 aspect-square h-2 bg-green-500 rounded-full /animate-pulse" />
          <div className="absolute bottom-full -right-4 aspect-square h-2 bg-green-500 rounded-full animate-[demo-live-icon_2500ms_infinite]" />
          <p className="absolute text-xs right-0 -bottom-4 opacity-60">
            {query.get("email")}
          </p>
        </div>
      </div>
      <div className="relative my-10">
        <iframe
          className="aspect-video w-full"
          src="https://cal.com/blockpeer/30min?date=2023-11-15&month=2023-11"
        />

        <div className="bg-background absolute z-10 top-0 left-0 w-full h-[4vw]" />
        {/* <div className="bg-background absolute z-10 bottom-0 left-0 w-full h-[10vw]" /> */}
      </div>
    </section>
  );
}
