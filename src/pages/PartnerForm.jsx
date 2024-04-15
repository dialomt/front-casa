import BankBlue from "../components/form/BankBlue";
import FormBlue from "../components/form/FormBlue";
import MoneySelect from "../components/form/MoneySelect"
import Periodicity from "../components/form/Periodicity";
import TitleAllForm from "../components/form/TitleAllForm";
import DonationOption from "../components/form/DonationOption";
import SendButtonForm from "../components/form/SendButtonForm";

function PartnerForm() {
  return (
    <div>
      
      <section>
        <TitleAllForm />
        <FormBlue />
      </section>
      <section>
        
        <MoneySelect />
        <Periodicity />
        <BankBlue />
        <DonationOption />
      </section>
      <SendButtonForm />
    </div>
  );
}

export default PartnerForm;
