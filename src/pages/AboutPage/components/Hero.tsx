export default function Hero() {
  return (
    <section className="h-[90vh] pt-32 p-page flex flex-col justify-between items-center relative">
      <img
        className="absolute bottom-0 right-0 -z-10 w-[50vw] h-[80vh]"
        src="/images/about-bg.png"
      />

      <div className="text-center text-5xl font-black leading-normal tracking-tight font-lato text-transparent bg-gradient-to-br bg-clip-text from-primary to-secondary">
        <h1>For Accounting professionals</h1>
        <h1>Made by Accounting professionals!</h1>
      </div>

      <div className="flex justify-center gap-x-40 pb-[5%] px-10">
        <div className="flex flex-col gap-y-4">
          <h5 className="text-xl font-semibold">Introduction</h5>
          <p className="text-sm">
            BlockPeer is a crypto wallet-embedded accounting platform. Safe
            multisig and account abstraction wallets are natively integrated
            with the accounting platform. No more manual API integration. Just
            sign-up, start creating wallets, and pay for your suppliers in the
            crypto of your choice, raise crypto invoices, and make crypto
            payroll right from the BlockPeer crypto accounting. Automatic
            accounting entries, no dual work of making crypto payments in
            separate platforms & book-keeping in another platform.
          </p>
        </div>
        <div className="flex flex-col gap-y-4 text-white">
          <h5 className="text-xl font-semibold">New approach!</h5>
          <p className="text-sm">
            BlockPeer is not a typical crypto accounting software; BlockPeer's
            primary objective is to enable peer-to-peer or borrower-to-lender
            direct connection directly from BlockPeer. Institutions can access
            borrowing & provide lending through decentralized alternative
            finance protocols. Features like Post-dated crypto payment
            commitments & payday loans enable institutions to access liquidity
            in blockchain-based alternative finance marketplace.
          </p>
        </div>
      </div>
    </section>
  );
}
