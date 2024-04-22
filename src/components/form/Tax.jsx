import React from 'react';
import TaxText from '../texts/TaxText';
import TitleCard from '../cards/ColaborateCard/TitleCard';
import TitleForm from './TitleForm';


const Tax = () => {
  return (
    <div>
        <TitleForm wordBlue="¿Cuánto quieres" wordPink="aportar?" textAlign="center" />
        <TaxText/>
    </div>
  )
}

export default Tax