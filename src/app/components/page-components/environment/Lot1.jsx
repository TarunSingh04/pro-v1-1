import { QUESTION_SET_1, STEPS } from "./constants/constants";
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

function Lot1(props) {
  return (
    <>
      <QuestionLayout>
        <SideStepBar activeStep={0} STEPS={STEPS} />

        <div className={styles.outer_question_container}>
          <Navbar
            onGoBack={() => {
              props.goBack(0);
            }}
            onSave={() => {}}
          />

          <div className={styles.question_container}>
            <div>
              <p className={styles.headertext}>Environment</p>
              <p className={styles.subheadertext}>
                Your carbon footprint and sustainability certificates
              </p>

              {/* Divider */}
              <Divider />
              {/* Questions */}
             
                {QUESTION_SET_1.map((question, index) => {
                  return (
                    <Question
                      key={`${index}-${question}`}
                      index={index}
                      question={question}
                      onChange={() => {}}
                    />
                  );
                })}
              

              {/* Next Button */}
              <PrimaryButton
                onClick={() => {
                  props.onSubmit(1);
                }}
                label={"NEXT PAGE"}
              />
            </div>

            {/* Progress */}

            <ProgressBar progress={10} label={"ENVIRONMENT - STEP 1"} />
          </div>
        </div>
      </QuestionLayout>
    </>
  );
}

export default Lot1;
