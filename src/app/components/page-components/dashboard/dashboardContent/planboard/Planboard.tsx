import React from 'react'
import styles from "./styles.module.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

interface PlanboardProps {
  openSubscription: () => void; // Define the function prop type here
}

const Planboard: React.FC<PlanboardProps> = ({ openSubscription }) => {
  return (
    <div className={styles.planboard}>
        <div>
        <p className={styles.planheader}>Off to a great start!</p>
        <p className={styles.plandescription}>Your initial score is based on the information you provided during onboarding. For a more accurate evaluation, complete our ESG questionnaire to gain access to :</p>
        <ul className={styles.listelements}>
            <li>CSRD-Compliant Scorecard</li>
            <li>ESG Progress Report & Action Plan</li>
            <li>Sustainability Badge</li>
        </ul>
        </div>

        <div className={styles.lowercont}>
           <button onClick={openSubscription}>choose your plan <MdKeyboardArrowRight className={styles.rightArrowIcon}/></button>
        </div>
    </div>
  )
}

export default Planboard