"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import LocationImg from "../../../../assets/locationImg.svg";
import Dot from "../../../../assets/scoredot.svg";
import Circlescroll from "../scorecard-circle-scrollbar/Circlescroll";
import scoreCardLogo from "../../../../assets/ImpaktercorecardLogo.svg";
import environmentLogo from "../../../../assets/environmentLogo.svg";
import socialLogo from "../../../../assets/socialLogo.svg";
import governenceLogo from "../../../../assets/governenceLogo.svg";
import { ScoreBar } from "../../scorecard-scrollbar/Scrollbar";
import environmentFooter from "../../../../assets/environmentFooter.svg";
import sdgFoot from "../../../../assets/sdgFoot.svg";
import scanner from "../../../../assets/Scanner.svg";


const Maincard = () => {
  const [scorePercentage, setscorePercentage] = useState(46);
  const [environmentScorePercent, setenvironmentScorePercent] = useState(75);
  const [socialScorePercent, setsocialScorePercent] = useState(45);
  const [governanceScorePercent, setgovernanceScorePercent] = useState(55);
  const getbackgroundColor = (rating:any)=>{
    if(rating>80){
      return "#6F8C60";
    }
    else if(rating>70){
      return "#A6C496";
    }
    else if(rating>50){
      return "#F1D02C";
    } 
    else if(rating>30){
      return "#F18E2C";
    } 
    else{
      return "#F25555";
    }
    }
    const getText = (rating:any)=>{
      if(rating>80){
        return "A";
      }
      else if(rating>70){
        return "B";
      }
      else if(rating>50){
        return "C";
      } 
      else if(rating>30){
        return "D";
      } 
      else{
        return "F";
      }
      }
    const getColor = (rating:any)=>{
      if(rating==="A"){
        return "#6F8C60";
      }
      else if(rating==="B"){
        return "#A6C496";
      }
      else if(rating==="C"){
        return "#F1D02C";
      } 
      else if(rating==="D"){
        return "#F18E2C";
      } 
      else{
        return "#F25555";
      }
      }
  return (
    <div className={styles.maincard}>
      <div className={styles.section2} id="section1">
        <div className={styles.headerdata}>
          <div className={styles.headerleftcont}>
          <div className={styles.companyHeader}>
            <p>Apple</p>
            <Image src={Dot} width={6} height={6} alt="none" className={styles.dotIcon}/>
            <div className={styles.Location}>
            <Image src={LocationImg} width={16} height={16} alt="none"/>
            <p>GERMANY</p>
            </div>
          </div>
          <div className={styles.headerdesc}>Since 2010 Greenscape is one of Italy&apos;s leading property consultancy firms. Prelios specialises in property advice and  intermediation. It offers a complete range of services through teams organized by market segments and client types.</div>
          </div>
          <div className={styles.headerrightcont}>
            <div className={styles.headerrighttxt}>
            Your Score is
            </div>
            <div className={styles.ScoreText}>
              {scorePercentage>30 && <span style={{color:getColor("F")}} >F</span>}
              {scorePercentage<30 && <span style={{background:getColor("F")}} className={styles.backgroundcol}>F</span>}

              {(scorePercentage<=30 || scorePercentage>50) && <span style={{color:getColor("D")}} >D</span>}
              {scorePercentage>30 && scorePercentage<=50 && <span style={{background:getColor("D")}} className={styles.backgroundcol}>D</span>}


              {(scorePercentage<=50 || scorePercentage>70) && <span style={{color:getColor("C")}} >C</span>}
              {scorePercentage>50 && scorePercentage<=70 && <span style={{background:getColor("C")}} className={styles.backgroundcol}>C</span>}


              {(scorePercentage<=70 || scorePercentage>80) && <span style={{color:getColor("B")}} >B</span>}
              {scorePercentage>70 && scorePercentage<=80 && <span style={{background:getColor("B")}} className={styles.backgroundcol}>B</span>}


              {scorePercentage<=80 && <span style={{color:getColor("A")}} >A</span>}
              {scorePercentage>80 && <span style={{background:getColor("A")}} className={styles.backgroundcol}>A</span>}

            </div>
            <Circlescroll progress={scorePercentage} color={getbackgroundColor(scorePercentage)}/>
          </div>


        </div>

        <div className={styles.scorecardbodysection1}>
        <div className={styles.scorecardbodys1left}>
          <p>How&apos;s My Score?</p>
          <div className={styles.dates}>Your ESG scorecard is valid till: <span>01/09/2024</span></div>
          </div>
        <Image src={scoreCardLogo} height={38} width={125} alt="none"/>
        </div>
        <div className={styles.cardcont}>
          <div className={styles.cards}>
            <div className={styles.leftcardbox}>
              <Image src={environmentLogo} height={75} width={75} alt="none"/>
              <p>Environmental</p>
            </div>
            <p>{environmentScorePercent}%</p>
          </div>
          <div className={styles.cards}>
            <div className={styles.leftcardbox}>
              <Image src={socialLogo} height={75} width={75} alt="none"/>
              <p>Social</p>
            </div>
            <p>{socialScorePercent}%</p>
          </div>
          <div className={styles.cards}>
            <div className={styles.leftcardbox}>
              <Image src={environmentLogo} height={75} width={75} alt="none"/>
              <p>Governance</p>
            </div>
            <p>{governanceScorePercent}%</p>
          </div>
        </div>
        <ScoreBar label="E" percentage={environmentScorePercent} color="#56BD53"/>
          <ScoreBar label="S" percentage={socialScorePercent} color="#D2871F"/>
          <ScoreBar label="G" percentage={governanceScorePercent} color="#285CD5"/>
      </div>

      <div className={styles.section2} id="section2">
        <div className={styles.section2header}>
          <div className={styles.section2HeaderBox}>
            <p>Greenscape Estates</p>
            <Image src={scoreCardLogo} height={38} width={125} alt="none"/>
          </div>
          <p>Greenscape Estates achieved a <span>{getText(scorePercentage)}</span> rating on the Impakter Pro sustainability scale, showcasing their dedicated commitment to environmental, social, and governance standards/</p>
        </div>

        <p className={styles.sectiontext}>The data presented in the Greenscape Estates scorecard is based on the Impakter Pro methodology, which considers various factors, including the company&apos;s performance in achieving ESG clusters, the Materiality of sustainability efforts, Sustainability Management, Certifications, and Company Information.</p>
        <p className={styles.sectiontext}>The comprehensive sustainability analysis to identify gaps and provide express solutions aligned with EU regulations and market standards.</p>
        <p className={styles.sectiontext2}>Following are the Greenscape Estates&apos; <span>areas of progress:</span></p>
         
        <p className={styles.sectiontexthead}><span>Environmental</span></p>
        <p className={styles.sectiontext3}><span>Certificates Obtained:</span> [list of certificates obtained: only the 3rd party verified ones]</p>
        <p className={styles.sectiontext4}> With a score of [80% +] on certificates and standards obtained, [name of SME] is poised to achieve full transparency and compliance through third-party verified standards./</p>
        <p className={styles.sectiontext3}>With a score of [50 to 80%] on certificates and standards obtained, [name of SME] is on the verge of achieving full transparency and compliance through third-party verified standards but is engaged in taking more measures to demonstrate sustainability, including shedding certificates that are not third-party verified as this will save money./</p>
        <p className={styles.sectiontext3}>With a score of [below 50%] on certificates and standards obtained, [name of SME] is in the process of taking the necessary measures to improve transparency and compliance through third-party verified standards and shedding any other certificate in order to save money./</p>
        <div className={styles.environmentfoot}>
        <Image src={environmentFooter} height={55} width={245} alt="none" />
        </div>
        <p className={styles.sectiontexthead}><span>SDGs Achieved Targets</span></p>
        <p className={styles.sectiontext4}>The SDG clusters fulfilled above 60% by the company according to the Impakter methodology are: </p>
        <p className={styles.sectiontext4}>SDG 8: Promote sustained, inclusive economic growth, full and productive employment and decent work for all.</p>
        <p className={styles.sectiontext4}>SDG 11: Make cities and human settlements inclusive, safe, resilient and sustainable. </p>
        <p className={styles.sectiontext4}>SDG 13: Take urgent action to combat climate change and its impacts</p>
        <Image src={sdgFoot} height={60} width={180} alt="none" className={styles.sdgIcon}/>
        <Image src={scanner} height={111} width={121} alt="none" className={styles.scannerIcon}/>
      </div>

      <div className={styles.section2} id="section3">
      <div className={styles.section2header}>
          <div className={styles.section2HeaderBox}>
            <p>Social:</p>
            <Image src={scoreCardLogo} height={38} width={125} alt="none"/>
          </div>
          <p><span>Capital Dimension:</span> Greenscape Estates has demonstrated commitment in the social capital dimension with a score of [...%].</p>
        </div>
        <p className={styles.sectiontext5}><span>Human Capital Dimension:</span> Human capital encompasses all facets of a business that can impact workers and stakeholders at an operational level. Greenscape Estates has achieved a score of [...%]. Greenscape has taken steps and is proceeding in the right direction, especially concerning [add relevant response from questionnaire]</p>
        <p className={styles.sectiontext3}>Greenscape Estates shows a […%] rating in the business model and innovation dimension. This rating evaluates the company&apos;s ability to align products and services with stakeholder demands and sustainability requirements. , including product design, climate adaptation, and responsible material sourcing for real estate.</p>
        <p className={styles.sectiontext5}><span>Governance:</span> Greenscape Estates scores […%] in <span>leadership and governance,</span> which evaluates factors affecting long-term strategy and decision-making. A strong performance in this dimension indicates strong leadership and organizational structure vital for sustainable growth.
[if applicable depending on response in the questionnaire, add:] Greenscape Estates prioritizes transparency and integrity in its sector.</p>
<div className={styles.endmessagecont}>
      <div className={styles.section3HeaderBox}>
          <p>GREENESCAPE ESTATES POWERED BY IMPAKTER</p>
      </div>
     <p className={styles.greet}>THANK YOU FOR TRUSTING US AND JOINING THE CHANGE!</p>
     <div className={styles.section4HeaderBox}>Date of completion of Scorecard: <span>1/12/2024</span></div>
     <div className={styles.section5HeaderBox}>Contact Us</div>
  </div>  
      <div className={styles.footcont}><p>Copyright © 2023 Impakter l.t.d., 32 Lots Road, London, United Kingdom, SW10 0QF. All rights reserved. Any illegal reproduction or distribution of this content will result in immediate legal action.</p></div>    

      </div>

          </div>
  );
};

export default Maincard;
