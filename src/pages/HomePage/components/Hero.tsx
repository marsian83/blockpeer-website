import { useNavigate } from "react-router-dom";
import DataForm from "../../../common/DataForm";

const chains = [
  "https://cryptologos.cc/logos/polygon-matic-logo.png",
  "https://cryptologos.cc/logos/near-protocol-near-logo.png",
  "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  "https://cryptologos.cc/logos/monero-xmr-logo.png",
  "https://media.istockphoto.com/id/1437289526/vector/bitcoin-icon-outlined-in-orange.jpg?s=612x612&w=0&k=20&c=LcUzABZ7_fBycsyrFztU20JzP-Tjezrs8N_Y0X8mbHI=",
  "https://cryptologos.cc/logos/stellar-xlm-logo.png",
  "https://cryptologos.cc/logos/litecoin-ltc-logo.png",
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="bg-primary bg-opacity-5 h-[88vh] flex flex-col justify-center p-page">
      <div className="flex flex-1">
        <div className="basis-1/2 flex flex-col justify-center items-center gap-y-8">
          <h1 className="text-5xl font-black font-lato text-black tracking-tight leading-normal">
            Crypto Payments & Crypto/Fiat Accounting For Businesses
          </h1>
          <p className="text-lg font-medium text-front text-opacity-60">
            Crypto wallet integrated into accounting platform. All in one
            platform for Crypto Payments & Crypto/Fiat Accounting
          </p>

          <DataForm.Container
            className="flex gap-x-4 self-start w-full"
            onSubmit={(data) => {
              navigate(`/demo?email=${data.email}`);
            }}
          >
            <DataForm.Input
              name="email"
              type="email"
              className="bg-foreground bg-opacity-[8%] rounded-md text-lg px-2 py-1 placeholder:text-front placeholder:text-opacity-70 w-1/2"
              placeholder="Enter your email"
            />
            <DataForm.Input type="submit" className="btn-1" value="Book Demo" />
          </DataForm.Container>
        </div>

        <div className="basis-1/2 flex justify-center items-center">
          <img
            src="/images/dapp_showcase.png"
            alt="informational"
            className="pl-[8%] pt-[10%]"
          />
        </div>
      </div>

      <div className="flex flex-col py-5 items-center gap-y-2">
        <h3 className="text-lg font-medium tracking-tight text-front text-opacity-80">
          Available on most popular chains
        </h3>
        <div className="flex gap-x-6">
          {chains.map((chain, key) => (
            <div className="rounded-full bg-background shadow p-2">
              <img className="h-10 aspect-square" src={chain} key={key} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
