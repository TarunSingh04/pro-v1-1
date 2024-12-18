'use client';

import { QUESTION_SET_2, STEPS } from "./constants/constants";
import styles from "./styles.module.scss";
import { Question } from "../../utilities/components/questionnaire/question/question";
import { PrimaryButton } from "../../utilities/components/questionnaire/buttons/buttons";
import { Navbar } from "../../utilities/components/questionnaire/nav/nav";
import {
  ProgressBar,
  SideStepBar,
} from "../../utilities/components/questionnaire/progressbar/progressbar";
import { QuestionLayout } from "../../utilities/components/questionnaire/layout/layout";
import Divider from "../../utilities/components/questionnaire/divider/divider";
import { useRouter } from 'next/navigation';

function Lot2(props) {

  const router = useRouter();

  return (
    <>
      <QuestionLayout>
        <SideStepBar activeStep={3} STEPS={STEPS} />

        <div className={styles.outer_question_container}>
          <Navbar
            onGoBack={() => {
                props.goBack(0);
            }}
            onSave={() => {}}
          />

          <div className={styles.question_container}>
            <div>
              <p className={styles.headertext}>Sustainable Development Goals</p>
              <p className={styles.subheadertext}>
              Please provide detailed information about your company`&apos;`s SDG
              </p>
              <p className={styles.subheadertext}>
              For more details on SDGs <a href="#" style={
                {color: 'blue', textDecoration: "none"}
              }>Click Here</a>
              </p>

              {/* Divider */}
              <Divider />
              {/* Questions */}
              <ul>
                {QUESTION_SET_2.map((question, index) => {
                  return (
                    <Question

                      key={`${index}-${question}`}
                      index={index}
                      question={question}
                      onChange={() => {}}
                    />
                  );
                })}
              </ul>

              {/* Next Button */}
              <PrimaryButton
                onClick={() => {
                  router.push("/pages/dashboard");
                }}
                label={"Submit"}
              />
            </div>

            {/* Progress */}

            <ProgressBar progress={90} label={"Sustainable Development Goals - STEP 2"} />
          </div>
        </div>
      </QuestionLayout>
    </>
  );
}

export default Lot2;
