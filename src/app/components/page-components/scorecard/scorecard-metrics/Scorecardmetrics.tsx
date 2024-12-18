import React from "react";
import styles from "./styles.module.scss";
import Barmetrics from "./bar-metrics/Barmetrics";
import Linemetrics from "./line-metrics/Linemetrics";
import Metricsdatatable from "./metrics-datatable/Metricsdatatable";
import LocationImg from "../../../assets/locationImg.svg";
import Dot from "../../../assets/scoredot.svg";
import Image from "next/image";

const Scorecardmetrics = () => {
  return (
    <div className={styles.Metrics}>
      <div className={styles.companyHeader}>
        <p>Apple</p>
        <Image src={Dot} width={6} height={6} alt="none" className={styles.dotIcon}/>
        <div className={styles.Location}>
         <Image src={LocationImg} width={16} height={16} alt="none"/>
         <p>GERMANY</p>
        </div>
      </div>
      <div className={styles.graphcont}>
        
        <div className={styles.graph}>
          <div className={styles.scorecardLabelcont}>
            <h2>Scorecard Comparison</h2>
            <div className={styles.subheader}>Overall Score</div>
            <div className={styles.scoregraph}>
               <div className={styles.submaingraph}>
               <Barmetrics/>
               </div>
            </div>
          </div>
        </div>

        <div className={styles.graph}>
        <div className={styles.scorecardLabelcont}>
            <h2>Scorecard Analytics</h2>
            <div className={styles.subheader}>Overall Score</div>
            <div className={styles.scoregraph}>
               <div className={styles.submaingraph}>
               <Linemetrics/>
               </div>
            </div>
          </div>
        </div>
      </div>
        <div className={styles.DataCont}>
            <h2>Metric Cumulative Comparison</h2>
            <p className={styles.subtitle}>Metric Cumulative Comparison</p>
            <div className={styles.dataTablecont}>
               <Metricsdatatable/>
            </div>
          </div>
    </div>
  );
};

export default Scorecardmetrics;
