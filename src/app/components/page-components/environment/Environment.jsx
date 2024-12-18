"use client";

import React, { useState } from "react";
import { QUESTION_SET_1, STEPS } from "./constants/constants";
import Lot1 from "./Lot1";
import Lot2 from "./Lot2";
import Lot3 from "./Lot3";
import Lot4 from "./Lot4";
import Lot5 from "./Lot5";
import { useRouter } from 'next/navigation';


const Environment = () => {
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
      <Lot1 onSubmit={onSubmit} goBack={goBack}/>
    </>
  }

  else if (lot_index === 1) {
    return <>
      <Lot2 onSubmit={onSubmit} goBack={goBack}/>
    </>
  }

  else if (lot_index === 2) {
    return <>
      <Lot3 onSubmit={onSubmit} goBack={goBack}/>
    </>
  }
  else if (lot_index === 3) {
    return <>
      <Lot4 onSubmit={onSubmit} goBack={goBack}/>
    </>
  }
  else {
    return <>
      <Lot5 onSubmit={(index)=>{
        
        router.push('/pages/social');
      }} goBack={goBack}/>
    </>
  }
  
};

export default Environment;
