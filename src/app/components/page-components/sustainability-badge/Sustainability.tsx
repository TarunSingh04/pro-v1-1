import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Esgscore from "../dashboard/dashboardContent/esg-score/Esgscore";
import Sustainabilitydatatable from "./sustainability-datatable/Sustainabilitydatatable";
import sectionHeaderIcon from "../../assets/sectionNameIcon.svg";
import verifiedLogo from "../../assets/Verified.svg";
import pendingLogo from "../../assets/Pending.svg";
import scorearrow from "../../assets/ScoreArrow.svg"
import Dot from "../../assets/scoredot.svg";
import LocationImg from "../../assets/locationImg.svg";
import Download from "../../assets/downloadIcon.svg"; 
import DownloadWhite from "../../assets/DownloadWhite.svg";
import { GoDotFill } from "react-icons/go";
import Gauge from "../dashboard/dashboardContent/esg-score/score-gauge/ScoreGauge";

const Sustainability = () => {
  const [companyName, setcompanyName] = useState("Apple");
  const [companyLocation, setcompanyLocation] = useState("Germany");
  const [overallScore, setoverallScore] = useState(60);
  const [sustainabilitynavigate, setsustainabilitynavigate] = useState(1);

  const getColor = () => {
    if (overallScore >= 90) {
      return "#6F8C60";
    } else if (overallScore >= 75) {
      return "#A6C496";
    } else if (overallScore >= 55) {
      return "#F1D02C";
    } else if (overallScore >= 25) {
      return "#F18E2C";
    } else{
      return "#F25555";
    } 
  };

  const getRating = () => {
    if (overallScore >= 90) {
      return "a";
    } else if (overallScore >= 75) {
      return "b";
    } else if (overallScore >= 55) {
      return "c";
    } else if (overallScore >= 25) {
      return "d";
    } else{
      return "f";
    } 
  };

  const sustainabiltiyContentChange:any = (scoreNum: any) => {
    setsustainabilitynavigate(scoreNum);
  };

  return (
    <div className={styles.Sustainability}>
       <div className={styles.sectionHeader}>
        <Image src={sectionHeaderIcon} width={18} height={18} alt='none'/>
        <p><span>/</span>Sustainability Badge</p>
      </div>

      <div className={styles.mytasksubHeader}>
      <div className={styles.headerbox1}>
      <h2>Sustainability Badge</h2>
      <p>Your Roadmap to Sustainability</p>
      </div>

      <div className={styles.headerbox2}>
      <div className={styles.scordisplaycont}>
        <div className={styles.scoreoverall}>
          Overall Score
        </div>
        <div className={styles.scoreoverall}>
          <Image src={scorearrow} alt="none" width={18} height={18} className={styles.arrowIcon}/>
          <p><span>{overallScore}</span>/100</p>
        </div>
      </div>
         <Image src={overallScore>74 ? verifiedLogo: pendingLogo} width={120} height={120} alt='none'/>
      </div>
      
      </div>


      <div className={styles.scorecardBody}>
        <div className={styles.scorecardsubcontbar}>
          <p
            onClick={() => {
              sustainabiltiyContentChange(1);
            }}
            className={
              sustainabilitynavigate === 1
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            Sustainability
          </p>
          <p
            onClick={() => {
              sustainabiltiyContentChange(2);
            }}
            className={
              sustainabilitynavigate === 2
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            Archive
          </p>
        </div>
        <div className={styles.scorecardBodyContent}>
          {sustainabilitynavigate === 1 && (
            <div className={styles.BadgeBody}>
               <div className={styles.companyHeader}>
                <p>Apple</p>
                <Image src={Dot} width={6} height={6} alt="none" className={styles.dotIcon}/>
                <div className={styles.Location}>
                <Image src={LocationImg} width={16} height={16} alt="none"/>
                <p>GERMANY</p>
                </div>
              </div>
              <div className={styles.badgecontent}>
              <div className={styles.BadgeBodyInfo}>
              <div className={styles.upperpart}>
                <h2>Your Hard Work Has Paid Off!</h2>
                  <p>
                  The IMPAKTER PRO Verified Badge is a testament to your sustainability efforts. Showcase your achievement with pride!
                  </p>
                  <p>
                  Share your impact and let stakeholders know you`re leading the way in sustainability.
                  </p>
                  <p>
                  Maximize visibility by adding your badge to your website, products, events, webinar materials, and digital channels.
                  </p>
               </div>
               <div className={styles.lowerpart}>
                <p><GoDotFill className={styles.dotIcon}/><span>Download Badge here :</span></p>
                <div className={styles.lowerbtn}>
                  <button className={styles.downloadbtn1}>
                    <Image src={DownloadWhite} height={15} width={15} alt="none" className={styles.downloadIcon}/>
                    Download PDF
                  </button>
                  <button className={styles.downloadbtn2}>
                    <Image src={Download} height={15} width={15} alt="none" className={styles.downloadIcon}/>
                    download jpeg
                  </button>
                </div>
               </div>
              </div>
              <div className={styles.BadgeBodyInfo2}>
              <div className={styles.upperpart}>
                <h2>Overall Sustainability Score</h2>
                <p>Great Progress! You&apos;ve established a strong foundation in sustainability practices and have been awarded the Sustainability Badge! Let&apos;s help you advance further and achieve sustainability leadership.</p>
                <Gauge value={overallScore} color={getColor()} label={getRating()} size={160} fontsz={85}/>
              </div>
               <div className={styles.lowerpart2}>
               <div className={styles.scordisplaycont2}>
                   <div className={styles.scoreoverall}>
                  <Image src={scorearrow} alt="none" width={18} height={18} className={styles.arrowIcon}/>
                  <p><span>{overallScore}</span>/100</p>
                </div>
              </div>
               </div>
              </div>
              </div>
            </div>
          )}
          {sustainabilitynavigate === 2 && <Sustainabilitydatatable />}
        </div>
      </div>
    </div>
  );
};

export default Sustainability;
