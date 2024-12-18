"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Questionaire from "./questionaire-content/Questionaire";
import SidenavQuestionaire from "./questionaire-sidebar/SidenavQuestionaire";
import Image from "next/image";
import dashboardLogo from "../assets/dash_demo.png";
import SidebarOnboard from "../../utilities/components/sidebar-onboarding/SidebarOnboard";
import LanguageSelector from "../../utilities/components/language-selector/LanguageSelector";
import { FaChevronLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import StepProgress from "./questionaire-stepper/QuestionaireStepper";
import pageNotDisplayLogo from "../../assets/pageNotDisplayLogo.svg";

const Onboardingpage = () => {
  const router = useRouter();
  const [questionaireState, setquestionaireState] = useState<any>(1);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps: number = 4;
  const steps: number[] = [0, 1, 2, 3.1, 3.2, 4];

  const handleNext = (): void => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex < steps.length - 1) {
      setCurrentStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = (): void => {
    const currentIndex = steps.indexOf(currentStep);
    if (currentIndex > 1) {
      setCurrentStep(steps[currentIndex - 1]);
    }
  };

  const navigateTo = () => {
    router.push("/pages/forgot-password");
  };
  return (
    <div className={styles.onboardingPageCont}>
      <div className={styles.pageNotDisplay}>
        <Image src={pageNotDisplayLogo} width={160} height={115} alt="none" />
        <p className={styles.pageNotDisplaytitle}>
          Oops! Best Viewed on Desktop
        </p>
        <p className={styles.pageNotDisplaysubtitle}>
          For the Best Experience, Switch to Desktop!
        </p>
        <p className={styles.pageNotDisplaydesc}>
          You&apos;re on a mobile or tablet. For the full experience and all
          site features, please visit us on your desktop.
        </p>
      </div>

      <div className={styles.onboardingPage}>
        <SidebarOnboard
          description={
            "Follow these simple onboarding steps and complete all fields to get started right away!"
          }
        />
        <div className={styles.questionaireContent}>
          <div className={styles.headerbtn}>
          {currentStep ===1 && <button
              className={styles.gobtn}
              style={{color:"#D1D5DB"}}
            >
              {" "}
              <FaChevronLeft className={styles.leftIcon} style={{color:"#D1D5DB"}}/> GO BACK
            </button>}
           {currentStep>1 && <button
              className={styles.gobtn}
              onClick={() => {
                handleBack();
              }}
            >
              {" "}
              <FaChevronLeft className={styles.leftIcon} /> GO BACK
            </button>}
            <LanguageSelector />
          </div>
          <div className={styles.questionaireSubContent}>
            <Questionaire
              questionaireStep={currentStep}
              setquestionaireState={setquestionaireState}
              onNext={handleNext}
            />
            <div className={styles.StepProgress}>
              <StepProgress currentStep={currentStep} totalSteps={totalSteps} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboardingpage;
