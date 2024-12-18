import { QUESTION_SET_7, STEPS } from "./constants/constants";
import styles from "./styles.module.scss";
import { Question } from "../../utilities/components/questionnaire/question/question";
import { PrimaryButton, SecondaryButton } from "../../utilities/components/questionnaire/buttons/buttons";
import { Navbar } from "../../utilities/components/questionnaire/nav/nav";
import {
  ProgressBar,
  SideStepBar,
} from "../../utilities/components/questionnaire/progressbar/progressbar";
import { QuestionLayout } from "../../utilities/components/questionnaire/layout/layout";
import Divider from "../../utilities/components/questionnaire/divider/divider";


function Lot7(props) {
  return (
    <>
      <QuestionLayout>
        <SideStepBar activeStep={2} STEPS={STEPS} />

        <div className={styles.outer_question_container}>
          <Navbar
            onGoBack={() => {
                props.goBack(4);
            }}
            onSave={() => {}}
          />

          <div className={styles.question_container}>
            <div>
              <p className={styles.headertext}>Governance</p>
              <p className={styles.subheadertext}>
              Data security and privacy protection
              </p>

              {/* Divider */}
              <Divider />
              {/* Questions */}
              <ul>
                {QUESTION_SET_7.map((question, index) => {
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
              
              <div style={
                {
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "start"
                }
              }>
              <PrimaryButton outlined={true} onClick={()=>{}} label={"+ ADD MORE DOCUMENTS"}/>
              </div>
              
              {/* Next Button */}
              <PrimaryButton
                onClick={() => {
                  props.onSubmit(0);
                }}
                label={"NEXT PAGE"}
              />
            </div>

            {/* Progress */}

            <ProgressBar progress={95} label={"Governance - STEP 7"} />
          </div>
        </div>
      </QuestionLayout>
    </>
  );
}

export default Lot7;
