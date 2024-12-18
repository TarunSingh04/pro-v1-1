"use client";

import React, { useState } from "react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import styles from "./styles.module.scss";
import EsgScorecard from "./esg-score-card/EsgScoreCard";
import Esgnews from "./esg-news/Esgnews";
import Taskmanger from "./task-manager/Taskmanger";
import Finance from "./finance/Finance";
import Esgscore from "./esg-score/Esgscore";
import Questionaire from "./questionaire/Questionaire";
import Certificate from "./certificate/Certificate";
import Ultilitysupplier from "./utilities-supplier/Ultilitysupplier";
import Marketplace from "./marketplace/Marketplace";
import AIassistant from "./ai-assistant/AIassistant";
import dashboardStatusStore from "../../../store/dashboarsStatusStore";
import Image from "next/image";
import sectionHeaderIcon from "../../../assets/sectionNameIcon.svg";
import AIBtn from "../../../assets/AiBtn.svg";
import DataIcon from "../../../assets/calendarIcon.svg";
import AIDotIcon from "../../../assets/AIBtndotIcon.svg";
import FreePack from "./free-pack/FreePack";
import ScoreAssest from "./score-assests/ScoreAssest";


const DashboardContent = () => {
  const [dashboardNavigateNum, setDashboardNavigateNum] = useState(1);

  // Access Zustand state and action separately
  const dashboardStatus = dashboardStatusStore(
    (state) => state.dashboardStatus
  );
  const setDashboardStatus = dashboardStatusStore(
    (state) => state.setDashboardStatus
  );

  const dashboardContentChange = (scoreNum: any) => {
    setDashboardNavigateNum(scoreNum);
  };

  const getStatusColor = (status: any) => {
    if (status === "Free" || status === "Basic") {
      return "#E8B500";
    } else {
      return "#1492EF";
    }
  };
  const getBackgroundStatusColor = (status: any) => {
    if (status === "Free" || status === "Basic") {
      return "#FFFAE5";
    } else {
      return "#EBF2FF";
    }
  };

  return (
    <div className={styles.dashboardContent}>
      <div className={styles.sectionHeader}>
        <Image src={sectionHeaderIcon} width={18} height={18} alt="none" />
        <p>
          <span>/</span>Dashboard
        </p>
      </div>
      <div
        className={
          dashboardStatus === "Free"
            ? styles.sectionsubHeader
            : styles.sectionsubHeader2
        }
      >
        <div className={styles.leftsubcont}>
          <div className={styles.leftsubbox}>
            <p>
              Welcome, <span>Priyansh</span> 👋{" "}
            </p>
            <div className={styles.datecont}>
              <div className={styles.dateIconcont}>
                <Image
                  src={DataIcon}
                  width={18}
                  height={18}
                  alt="none"
                  className={styles.dateIcon}
                />
              </div>
              31st August 2024
            </div>
            <div
              className={styles.dashboardStatus}
              style={{
                color: getStatusColor("Free"),
                background: getBackgroundStatusColor("Free"),
              }}
            >
              {dashboardStatus} Account
            </div>
          </div>
          <span>
            AI powered ESG software, that saves the hundreds of Euros in CSRD
            reporting.
          </span>
        </div>
      </div>
      {dashboardStatus === "Free" && (
        <div className={styles.FreeCont}>
          <FreePack />
        </div>
      )}
      {dashboardStatus !== "Free" && (
        <div className={styles.scorecardBody}>
          <div className={styles.scorecardsubcontbar}>
            <p
              onClick={() => dashboardContentChange(1)}
              className={
                dashboardNavigateNum === 1
                  ? styles.boldScoreSection
                  : styles.normalScoreSection
              }
            >
              overview
            </p>
            <p
              onClick={() => dashboardContentChange(2)}
              className={
                dashboardNavigateNum === 2
                  ? styles.boldScoreSection
                  : styles.normalScoreSection
              }
            >
              Actions
            </p>
            <p
              onClick={() => dashboardContentChange(3)}
              className={
                dashboardNavigateNum === 3
                  ? styles.boldScoreSection
                  : styles.normalScoreSection
              }
            >
              Marketplace
            </p>
          </div>
          <div className={styles.scorecardBodyContent}>
            {dashboardNavigateNum === 1 && (
              <div className={styles.DashboardBoxcont}>
                <div className={styles.DashboardBox1}>
                  <Esgscore percentage={60} />
                  <Questionaire />
                </div>
                <div className={styles.DashboardBox1}>
                  <EsgScorecard />
                  <ScoreAssest />
                </div>
                {dashboardStatus === "Standard" && (
                  <div className={styles.DashboardBox1}>
                    <Esgnews />
                  </div>
                )}
              </div>
            )}
            {dashboardNavigateNum === 2 && (
              <div className={styles.DashboardBoxcont}>
                <div className={styles.DashboardBox2}>
                  <Taskmanger />
                  <Certificate />
                </div>
                <div className={styles.DashboardBox2}>
                  <Finance />
                  <Ultilitysupplier />
                </div>
              </div>
            )}
            {dashboardNavigateNum === 3 && <Marketplace />}
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardContent;
