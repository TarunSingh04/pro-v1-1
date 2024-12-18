"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import Dot from "../../../../assets/scoredot.svg";
import LocationImg from "../../../../assets/locationImg.svg";
import scoreCardLogo from "../../../../assets/ImpaktercorecardLogo.svg";
import environmentLogo from "../../../../assets/environmentLogo.svg";
import Circlescroll from "../../../scorecard/scorecard-main/scorecard-circle-scrollbar/Circlescroll";
import { ScoreBar } from "../../../scorecard/scorecard-scrollbar/Scrollbar";
import socialLogo from "../../../../assets/socialLogo.svg";
import { BsPlus, BsDash } from "react-icons/bs";
import sdgIcon from "../../../../assets/sdgIcon.svg";

interface CollapseContainerItem {
  measurementName: string;
  collapseData1: JSX.Element;
  collapseData2: JSX.Element;
}

const Measurement: React.FC = () => {
  const [scorePercentage, setscorePercentage] = useState<number>(46);
  const [environmentScorePercent, setenvironmentScorePercent] =
    useState<number>(75);
  const [socialScorePercent, setsocialScorePercent] = useState<number>(45);
  const [governanceScorePercent, setgovernanceScorePercent] =
    useState<number>(55);
  const [scorenavigateNumber, setscorenavigateNumber] = useState<number>(1);
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleSection = (
    index: number,
    section: "AorB" | "CorD"
  ) => {
    setOpenSections((prev) => ({
      ...Object.keys(prev).reduce((acc:any, key) => {
        // Close all sections except the one being toggled
        if (key.startsWith(`${index}-`)) {
          acc[key] = prev[key];
        }
        return acc;
      }, {}),
      [`${index}-${section}`]: !prev[`${index}-${section}`],
    }));
  };

  const collapseContainer: CollapseContainerItem[] = [
    {
      measurementName: "Environment",
      collapseData1: (
        <div className={styles.collapsecont}>
          <p>Environment details for companies rated A or B...</p>
        </div>
      ),
      collapseData2: ( 
        <div className={styles.collapsecont}>
          <p>Environment details for companies rated C, D, or F...</p>
        </div>
      ), 
    },
    {
      measurementName: "Social",
      collapseData1: (
        <div className={styles.collapsecont}>Social A and B...</div>
      ),
      collapseData2: (
        <div className={styles.collapsecont}>Social C, D, and F...</div>
      ),
    },
    {
      measurementName: "Governance",
      collapseData1: (
        <div className={styles.collapsecont}>Governance A and B...</div>
      ),
      collapseData2: (
        <div className={styles.collapsecont}>Governance C, D, and F...</div>
      ),
    },
  ];

  const scoreContentChange = (scoreNum: number) => {
    setscorenavigateNumber(scoreNum);
  };

  const getbackgroundColor = (rating: number): string => {
    if (rating > 80) {
      return "#6F8C60";
    } else if (rating > 70) {
      return "#A6C496";
    } else if (rating > 50) {
      return "#F1D02C";
    } else if (rating > 30) {
      return "#F18E2C";
    } else {
      return "#F25555";
    }
  };

  const getColor = (rating: string): string => {
    if (rating === "A") {
      return "#6F8C60";
    } else if (rating === "B") {
      return "#A6C496";
    } else if (rating === "C") {
      return "#F1D02C";
    } else if (rating === "D") {
      return "#F18E2C";
    } else {
      return "#F25555";
    }
  };

  return (
    <div className={styles.Measurement}>
      <div className={styles.section2} id="section1">
        <div className={styles.headerdata}>
          <div className={styles.headerleftcont}>
            <div className={styles.companyHeader}>
              <p>Apple</p>
              <Image
                src={Dot}
                width={6}
                height={6}
                alt="none"
                className={styles.dotIcon}
              />
              <div className={styles.Location}>
                <Image src={LocationImg} width={16} height={16} alt="none" />
                <p>GERMANY</p>
              </div>
            </div>
            <div className={styles.headerdesc}>
              Since 2010 Greenscape is one of Italy&apos;s leading property
              consultancy firms. Prelios specialises in property advice and
              intermediation. It offers a complete range of services through
              teams organized by market segments and client types.
            </div>
          </div>
          <div className={styles.headerrightcont}>
            <div className={styles.headerrighttxt}>Your Score is</div>
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
            <Circlescroll
              progress={scorePercentage}
              color={getbackgroundColor(scorePercentage)}
            />
          </div>
        </div>

        <div className={styles.scorecardbodysection1}>
          <div className={styles.scorecardbodys1left}>
            <p>How&apos;s My Score?</p>
            <div className={styles.dates}>
              Your ESG scorecard is valid till: <span>01/09/2024</span>
            </div>
          </div>
          <Image src={scoreCardLogo} height={38} width={125} alt="none" />
        </div>
        <div className={styles.cardcont}>
          <div className={styles.cards}>
            <div className={styles.leftcardbox}>
              <Image src={environmentLogo} height={75} width={75} alt="none" />
              <p>Environmental</p>
            </div>
            <p>{environmentScorePercent}%</p>
          </div>
          <div className={styles.cards}>
            <div className={styles.leftcardbox}>
              <Image src={socialLogo} height={75} width={75} alt="none" />
              <p>Social</p>
            </div>
            <p>{socialScorePercent}%</p>
          </div>
          <div className={styles.cards}>
            <div className={styles.leftcardbox}>
              <Image src={environmentLogo} height={75} width={75} alt="none" />
              <p>Governance</p>
            </div>
            <p>{governanceScorePercent}%</p>
          </div>
        </div>
        <ScoreBar
          label="E"
          percentage={environmentScorePercent}
          color="#56BD53"
        />
        <ScoreBar label="S" percentage={socialScorePercent} color="#D2871F" />
        <ScoreBar
          label="G"
          percentage={governanceScorePercent}
          color="#285CD5"
        />
      </div>
      <div className={styles.taskcont}>
        <div className={styles.scorecardBody}>
          <div className={styles.scorecardsubcontbar}>
            <p
              onClick={() => {
                scoreContentChange(1);
              }}
              className={
                scorenavigateNumber === 1
                  ? styles.boldScoreSection
                  : styles.normalScoreSection
              }
            >
              Environment
            </p>
            <p
              onClick={() => {
                scoreContentChange(2);
              }}
              className={
                scorenavigateNumber === 2
                  ? styles.boldScoreSection
                  : styles.normalScoreSection
              }
            >
              Social
            </p>
            <p
              onClick={() => {
                scoreContentChange(3);
              }}
              className={
                scorenavigateNumber === 3
                  ? styles.boldScoreSection
                  : styles.normalScoreSection
              }
            >
              Governance
            </p>
          </div>
          {collapseContainer.map((items,index)=>{
            return(
              scorenavigateNumber === index+1 && <p className={styles.sectionHeader} key={index}>{items.measurementName}</p>
            )
          })}
          <div className={styles.scorecardBodyContent}>
            {collapseContainer.map((item, index) => (
              scorenavigateNumber === index+1 && <div key={index} className={styles.dataContent}>
                <div className={styles.measureBoxHeader}>
                  <div
                    className={styles.companyHeader}
                  >
                    <p className={styles.companyContentHeader}>
                      Companies rated A or B:
                    </p>
                    {openSections[`${index}-AorB`] ? (
                      <BsDash className={styles.measuresIcon} onClick={() => toggleSection(index, "AorB")}/>
                    ) : (
                      <BsPlus className={styles.measuresIcon} onClick={() => toggleSection(index, "AorB")}/>
                    )}
                  </div>
                  {openSections[`${index}-AorB`] && (
                    <>
                      <div className={styles.dividerline}></div>
                      <div className={styles.measuredescription}>
                        {item.collapseData1}
                      </div>
                    </>
                  )}
                </div>
                <div className={styles.measureBoxHeader}>
                  <div
                    className={styles.companyHeader}
                  >
                    <p className={styles.companyContentHeader}>
                      Companies rated C, D, or F:
                    </p>
                    {openSections[`${index}-CorD`] ? (
                      <BsDash className={styles.measuresIcon} onClick={() => toggleSection(index, "CorD")}/>
                    ) : (
                      <BsPlus className={styles.measuresIcon} onClick={() => toggleSection(index, "CorD")}/>
                    )}
                  </div>
                  {openSections[`${index}-CorD`] && (
                    <>
                      <div className={styles.dividerline}></div>
                      <div className={styles.measuredescription}>
                        {item.collapseData2}
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.scorecardBodyContentTitle}>SDGs</div>
          <div className={styles.sdgBox}>
            <div className={styles.sdgcont}>
              <Image src={sdgIcon} width={48} height={48} alt="none" />
              <div className={styles.sdgtextInfo}>
                <p className={styles.sdgtitle}>SDG</p>
                <p className={styles.sdgdesc}>
                  Sustainable development goals
                </p>
              </div>
            </div>
            <div className={styles.sdgcont}>
              <Image src={sdgIcon} width={48} height={48} alt="none" />
              <div className={styles.sdgtextInfo}>
                <p className={styles.sdgtitle}>SDG</p>
                <p className={styles.sdgdesc}>
                  Sustainable development goals
                </p>
              </div>
            </div>
            <div className={styles.sdgcont}>
              <Image src={sdgIcon} width={48} height={48} alt="none" />
              <div className={styles.sdgtextInfo}>
                <p className={styles.sdgtitle}>SDG</p>
                <p className={styles.sdgdesc}>
                  Sustainable development goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Measurement;
