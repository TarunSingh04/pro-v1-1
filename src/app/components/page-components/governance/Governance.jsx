"use client";

import React, { useState } from "react";
import Lot1 from "./Lot1";
import Lot2 from "./Lot2";
import Lot3 from "./Lot3";
import Lot4 from "./Lot4";
import Lot5 from "./Lot5";
import Lot6 from "./Lot6";
import Lot7 from "./Lot7";
import { useRouter } from 'next/navigation';


const Governance = () => {
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
      <Lot1 onSubmit={onSubmit} goBack={(index)=>{
        router.push('/pages/social');
      }}/>
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
  else if (lot_index === 4) {
    return <>
         <Lot5 onSubmit={onSubmit} goBack={goBack}/>
    </>
  }
  else if (lot_index === 5) {
    return <>
         <Lot6 onSubmit={onSubmit} goBack={goBack}/>
    </>
  }
  else {
    return <>
      <Lot7 onSubmit={(index)=>{
        router.push('/pages/sdg');
      }} goBack={goBack}/>
    </>
  }
  
};

export default Governance;
