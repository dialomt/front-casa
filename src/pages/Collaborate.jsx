import React, { useRef } from 'react';
import SendMail from '../services/SendMail';
import TitleCard from "../components/cards/ColaborateCard/TitleCard";
import DonationCard from "../components/cards/ColaborateCard/DonationCard";
import RegularText30 from "../components/texts/RegularText30";
import Title from "../components/title/Title";
import TitleAboutUs from "../components/title/TitleAboutUs";
import ColaboraRegularText from "../components/colaboration/ColaboraRegularText";
import SendButtonForm from "../components/form/SendButtonForm";
import Legislation from "../components/form/Legislation"
import Tax from "../components/form/Tax";
import TaxForm from '../components/form/TaxForm';
import SimpleAlert from '../components/alerts/SimpleAlert';





function Collaborate() {

  const refForm = useRef();
  const handleSubmit = async (event) => {
    event.preventDefault();
   const templateID = import.meta.env.VITE_REACT_APP_TEMPLATE_ID_TAXES; 
          try {
            const result = await SendMail(templateID, refForm.current);
            SimpleAlert ({ icon: 'error', text: "Su petición ha sido enviada con éxito. Revise su email." });
          } catch (error) {
            SimpleAlert ({ icon: 'error', text: 'Ha ocurrido un error en el envío de sus datos. Por favor inténtelo más tarde o póngase en contacto con casadeacogidaguia@hotmail.es.' });
          }
  };

  return (
    <div className="w-[80%] mx-auto">
    
      <Title wordBlue={"Hazte socio y"} wordPink={"dona"}></Title>
      <RegularText30
        text={
          "Puedes hacer el donativo que estimes oportuno, mediante ingreso o transferencia en la cuenta corriente de la Casa de Acogida"
        }
      ></RegularText30>
      <TitleCard>
        {" "}
        <TitleAboutUs firstword={"Hola"} secondword={"Mundo"}></TitleAboutUs>
      </TitleCard>
      <DonationCard></DonationCard>
      <TitleCard></TitleCard>
      <div className=" flex justify-center items-center">
        <div className="flex flex-col justify-center">
          <ColaboraRegularText
            wordone={"Contribuye de forma periódica con una aportación. "}
          />
          <ColaboraRegularText
            wordone={"Envíanos datos"}
            wordtwo={"usando este formulario. "}
          />
        </div>
      </div>
      <div className="w-[80%] mx-auto">
        <form ref={refForm} onSubmit={handleSubmit}>
        <TaxForm></TaxForm>
        <SendButtonForm />
        </form>
      </div>

      <div className="flex justify-around" style={{ height: "60px" }}>
        <img src="src/assets/images/Corazon.png" alt="Corazon" />
        <img src="src/assets/images/octagono.png" alt="octagono" />
      </div>
      <TitleCard></TitleCard>
      <Tax/>
      <Legislation></Legislation>
     
    </div>
  );
}

export default Collaborate;
