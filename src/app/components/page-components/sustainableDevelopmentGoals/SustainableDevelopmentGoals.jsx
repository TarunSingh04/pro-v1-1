"use client";

import React, { useState } from "react";
import Lot1 from "./Lot1";
import Lot2 from "./Lot2";

import { useRouter } from 'next/navigation';


const SustainableDevelopmentGoals = () => {
  const router = useRouter();
  const [lot_index , setLotIndex] = useState(0);

  const onSubmit = (index) => {
    // Scroll to top
    window.scrollTo(0, 0);

    setLotIndex(index);
  }

  const goBack = (index) => {
    setLotIndex(index);
  }
  
  if (lot_index === 0) {
    return <>
      <Lot1 onSubmit={onSubmit} goBack={
        (index)=>{
          router.push('/pages/governance');
        }
      }/>
    </>
  }

  else {
    return <>
      <Lot2 onSubmit={onSubmit} goBack={goBack}/>
    </>
  }
};

export default SustainableDevelopmentGoals;
