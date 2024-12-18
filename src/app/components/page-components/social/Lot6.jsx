import { QUESTION_SET_6, STEPS } from "./constants/constants";
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


function Lot6(props) {
  return (
    <>
      <QuestionLayout>
        <SideStepBar activeStep={1} STEPS={STEPS} />

        <div className={styles.outer_question_container}>
          <Navbar
            onGoBack={() => {
                props.goBack(4);
            }}
            onSave={() => {}}
          />

          <div className={styles.question_container}>
            <div>
              <p className={styles.headertext}>Social</p>
              <p className={styles.subheadertext}>
              Community engagement with business partners and customers
              </p>

              {/* Divider */}
              <Divider />
              {/* Questions */}
              <ul>
                {QUESTION_SET_6.map((question, index) => {
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
                  props.onSubmit(0);
                }}
                label={"NEXT PAGE"}
              />
            </div>

            {/* Progress */}

            <ProgressBar progress={95} label={"Social - STEP 6"} />
          </div>
        </div>
      </QuestionLayout>
    </>
  );
}

export default Lot6;
