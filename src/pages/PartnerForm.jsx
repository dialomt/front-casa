import React, { useRef } from 'react';
import SendMail from '../services/SendMail';
import BankBlue from "../components/form/BankBlue";
import FormBlue from "../components/form/formBlue";
import MoneySelect from "../components/form/MoneySelect"
import Periodicity from "../components/form/Periodicity";
import TitleAllForm from "../components/form/TitleAllForm";
import DonationOption from "../components/form/DonationOption";
import SendButtonForm from "../components/form/SendButtonForm";
import Legislation from "../components/form/Legislation"
import Tax from "../components/form/Tax";

function PartnerForm() {
  const refForm = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
   const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID_PARTNER; 
   const formData = new FormData(refForm.current);     
          try {
            const result = await SendMail(templateID, formData);
            console.log(result);
            alert("Mensaje enviado con éxito, en breve recibirá una confirmación. Gracias")
          } catch (error) {
            console.error(error);
            alert("Error en el envio de mensaje. Intentelo mas tarde. Gracias")
          }
  };

        return (
          <div className="w-[80%] mx-auto">
            <form ref={refForm} onSubmit={handleSubmit}>
              <section className="md:h-screen">
                <TitleAllForm />
                <FormBlue />
                <MoneySelect />
                <Periodicity />
                <BankBlue />
                <DonationOption />
                <SendButtonForm />
              </section>
            </form>
            <div style={{ height: '100vh' }} />
            <Tax/>
            <Legislation/>
          </div>
        );
      }

export default PartnerForm;

