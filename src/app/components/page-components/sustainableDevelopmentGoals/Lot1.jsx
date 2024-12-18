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
import { SearchableDropdown } from "../../utilities/components/questionnaire/inputfields/inputfields";

function Lot1(props) {
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
              <p className={styles.headertext}>Sustainable development goals</p>
              <p className={styles.subheadertext}>
              Please provide detailed information about your company`&apos;`s SDG
              </p>
              <p className={styles.subheadertext}>
              For more details on SDGs <a href="#" style={
                {color: "blue", textDecoration: "none"}
              }>Click Here</a>
              </p>


              {/* Divider */}
              <Divider />
              {/* Questions */}
             
                <SearchableDropdown
                  options={QUESTION_SET_1.choices}
                  onChange={(options) => {
                    
                  }}
                />
              

              {/* Next Button */}
              <PrimaryButton
                onClick={() => {
                  props.onSubmit(1);
                }}
                label={"NEXT PAGE"}
              />
            </div>

            {/* Progress */}

            <ProgressBar progress={10} label={"Sustainable development goals - STEP 1"} />
          </div>
        </div>
      </QuestionLayout>
    </>
  );
}

export default Lot1;
