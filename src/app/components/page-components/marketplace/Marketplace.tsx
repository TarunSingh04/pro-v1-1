"use client"
import React, { useState } from 'react';
import styles from "./style.module.scss";
import Image from 'next/image';
import sectionHeaderIcon from "../../assets/sectionNameIcon.svg";
import AIBtn from "../../assets/AiBtn.svg";
import DataIcon from "../../assets/calendarIcon.svg";
import AIDotIcon from "../../assets/AIBtndotIcon.svg";
import MarketplaceLogo from "../../assets/marketplacelogo.svg";
import SubscribedLogo from "../../assets/subscribed.svg";
import { MdClose } from 'react-icons/md';
import celebIcon from "../../assets/celebrateIcon.jpg";

const Marketplace = () => {
  const [subscribed, setsubscribed] = useState(false);
  const [subscribedPopUp, setsubscribedPopUp] = useState(false);
  const suscribe = ()=>{
    setsubscribed(true);
    setsubscribedPopUp(true);
  }

  const closeSuscribePopUp = ()=>{
    setsubscribedPopUp(false);
  }
  return (
    <div className={styles.Marketplace}>
      <div className={styles.sectionHeader}>
        <Image src={sectionHeaderIcon} width={18} height={18} alt='none'/>
        <p><span>/</span>Marketplace</p>
      </div>
      <div className={styles.sectionsubHeader}>
        <div className={styles.leftsubcont}>
          <div className={styles.leftsubbox}>
          <p>Howdy, <span>Priyansh</span> 👋 </p>
          <div className={styles.datecont}><div className={styles.dateIconcont}><Image src={DataIcon} width={18} height={18} alt='none' className={styles.dateIcon}/></div>31st August 2024</div>
          </div>
          <span>Your Gateway to Sustainable Innovation and Global Change !</span>
        </div>
        <button className={styles.AIDotIcon}>
        <Image src={AIDotIcon} width={16} height={16} alt='none' className={styles.AIdotIco}/>
          AI ASSISTANT
        </button>
      </div>
      <div className={styles.marketPlacecont}>
          <Image src={MarketplaceLogo} width={190} height={160} alt='none' className={styles.dateIcon}/>
          <p className={styles.Headline}>Marketplace Coming Soon!</p>
          <p className={styles.subHeadline}>Your Gateway to Sustainable Innovation and Global Change !</p>
          {!subscribed && <button className={styles.subscribebtn} onClick={()=>{suscribe()}}>Subscribe now</button>}
          { subscribed && <Image src={SubscribedLogo} width={220} height={60} alt='none' className={styles.dateIcon}/>}
      </div>
      {
        subscribedPopUp &&    <div className={styles.container}>
        <div className={styles.boxCont}>
          <div className={styles.subBox}>
            <div className={styles.closeheader}>
              <MdClose
                className={styles.closeIcon}
                onClick={closeSuscribePopUp}
              />
            </div>
            <Image src={celebIcon} width={30} height={30} alt='none' className={styles.dateIcon}/>
            <h2 className={styles.title}>Congratulations!</h2>
            <p className={styles.description}>
            You&apos;re subscribed to Marketplace!
            </p>
          </div>

          <div className={styles.buttoncontpopup}>
            <button className={styles.button1} onClick={closeSuscribePopUp}>
              GO BACK
            </button>
          </div>
        </div>
      </div>
      }
      
  </div>
  )
}

export default Marketplace