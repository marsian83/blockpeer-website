export default function PoweredBy() {
  return (
    <section className="p-page py-[10vh] bg-secondary bg-opacity-[7.3%] flex flex-col items-center">
      <h1 className="font-lato text-4xl font-black tracking-tight mb-14 text-center">
        Enhance your organization's Accounting <br />
        an automated gearwork
      </h1>

      <div className="flex justify-between">
        <PartnerCard title="Payday Management" image="/images/mockshots/1.jpg">
          <p className="text-sm">
            Create an employee & give a Soul Bound Token (SBT) as your employee
            ID card with a click of a button! Make bulk payroll payments by
            selecting the employees with a click of a button.
          </p>
        </PartnerCard>

        <PartnerCard
          title="Crypto Invoicing System"
          image="/images/mockshots/2.jpg"
        >
          <p>
            Tableland is an open source, permissionless cloud database. Crypto
            invoice data from Blockpeer are encrypted & stored in Tableland
            making it a fully decentralized crypto invoicing solution.
          </p>
        </PartnerCard>

        <PartnerCard
          title="Safe & Secure Multisig"
          image="/images/mockshots/3.jpg"
        >
          <p>
            Create a safe multisig within BlockPeer with your employees as
            signers Create a safe multisig within BlockPeer with your employees
            as signers Manage multisig transaction flow (initiate & approve
            pending transactions) from within BlockPeer
          </p>
        </PartnerCard>

        <PartnerCard
          title="Social Login Crypto Wallets"
          image="/images/mockshots/4.jpg"
        >
          <p>
            Employees access the blockchain securely via passwordless Email-Only
            Accounts (EOA) tied to their company email IDs. These EOAs,
            including those for executives and finance, serve as signers in Safe
            Multisig, eliminating the need for external wallets like MetaMask.
          </p>
        </PartnerCard>
      </div>
    </section>
  );
}

interface PartnerCardProps {
  title: string;
  image: string;
  children?: React.ReactNode;
}

function PartnerCard(props: PartnerCardProps) {
  return (
    <div
      className="w-[calc(25%_-_12px)] bg-background flex flex-col items-center text-center rounded-2xl border border-front border-opacity-[13%] duration-300 
    hover:scale-[101%] hover:shadow-2xl relative cursor-default overflow-hidden"
    >
      <img src={props.image} alt={props.title} className="mb-8 relative z-10" />

      <h1 className="text-2xl font-bold tracking-tight mb-4 relative z-10 px-8">
        {props.title}
      </h1>
      <div className="leading-tight relative z-10 text-sm px-8 pb-8 font-light">
        {props.children}
      </div>
    </div>
  );
}
