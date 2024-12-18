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

function Lot2(props) {
  return (
    <>
      <QuestionLayout>
        <SideStepBar activeStep={1} STEPS={STEPS} />

        <div className={styles.outer_question_container}>
          <Navbar
            onGoBack={() => {
                props.goBack(0);
            }}
            onSave={() => {}}
          />

          <div className={styles.question_container}>
            <div>
              <p className={styles.headertext}>Social</p>
              <p className={styles.subheadertext}>
              Work dignity and equal compensation
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
                  props.onSubmit(2);
                }}
                label={"NEXT PAGE"}
              />
            </div>

            {/* Progress */}

            <ProgressBar progress={30} label={"Social - STEP 2"} />
          </div>
        </div>
      </QuestionLayout>
    </>
  );
}

export default Lot2;
