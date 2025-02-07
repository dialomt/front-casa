import React from "react";
import CardNumberTitle from "../../title/CardNumberTitle";
import ClipboardButton from "../../buttons/ClipboardButton";
import yellowCircle from "../../../assets/images/yellowcircle.png";
import cubicImage from "../../../assets/images/cubic.png";

const DonationCard = () => {
  return (
    <div className=" flex items-center justify-center pt-7 pb-7 ">
       <img
      className="absolute left-0 top-150 z-100"
      src={yellowCircle}
      alt="yellow circles"
      />
        
      <img
        className="absolute right-0 top-150 z-100"
      img src={cubicImage} alt="cubic imgage"
      />
     
   
     <div className="relative h-1/2 mt-2 mb-1 bg-bgColorForm rounded-3xl inline-block p-6" >   
        <CardNumberTitle
          wordBlue={"ENTIDAD BANCARIA:"}
          wordWhite={" CAIXA"}
        />
        <CardNumberTitle
          wordBlue={"NÚMERO DE CUENTA:"}
          wordWhite={"ES65 2100 2181 68 0200229273"}
        ></CardNumberTitle>
         <span className="flex justify-end">
          <ClipboardButton  textToCopy="ES65 2100 2181 68 0200229273" />
        </span>
        
      </div>
     
    </div>
  );
};

export default DonationCard;

