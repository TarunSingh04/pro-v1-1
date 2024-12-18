import styles from "./question.module.scss";
import { useState } from "react";
import {
  AnswerInputField,
  AnswerRadioButtonField,
  AnswerCheckboxField,
} from "../inputfields/inputfields";


export const SubQuestion = ({ index, question, onChange, inputType = "text"}) => {
  const [selectedOption, setSelectedOption] = useState(
    question.choice_type == "radio"
      ? null
      : Array(question.choices.length).fill(false)
  );

  const handleCheckboxChange = (option) => {
    if (selectedOption.includes(option)) {
      setSelectedOption(selectedOption.filter((item) => item !== option));
    } else {
      setSelectedOption([...selectedOption, option]);
    }
  };

  return (
    <>
      <div key={`${index}:questions`}>
          <p className={styles.subquestiontext}>{question.question}</p>
        <div
          className={
            question.choice_orientation == "horizontal"
              ? styles.option_container_horizontal
              : styles.option_container
          }
        >
          {question.choices.map((option, choiceIndex) => {
            if (question.choice_type == "radio") {
              return (
                <AnswerRadioButtonField
                  key={`${choiceIndex}:sub_question_choices`}
                  index={choiceIndex}
                  option={option}
                  selectedOption={selectedOption}
                  onChange={(option) => {
                    setSelectedOption(option);
                  }}
                />
              );
            } else {
              return (
                <AnswerCheckboxField
                  key={`${choiceIndex}:sub_question_choices`}
                  index={choiceIndex}
                  option={option}
                  selectedOption={selectedOption}
                  onChange={(option) => {
                    handleCheckboxChange(option);
                  }}
                />
              );
            }
          })}
        </div>

      
        {/* File */}

        {/* Input Field */}
        {question.text_labels.map((text_label, labelIndex) => {
          return (
            <AnswerInputField
              key={`${labelIndex}:sub_text_label`}
              index={labelIndex}
              inputType={text_label.input_type ? text_label.input_type : "text"}
              label={text_label.label}
              placeholder={text_label.placeholder}
              onChange={(text) => {}}
            />
          );
        })}
      </div>
    </>
  );
};


export const Question = ({ index, question, onChange }) => {
  const [selectedOption, setSelectedOption] = useState(
    question.choice_type == "radio"
      ? null
      : Array(question.choices.length).fill(false)
  );

  const handleCheckboxChange = (option) => {
    if (selectedOption.includes(option)) {
      setSelectedOption(selectedOption.filter((item) => item !== option));
    } else {
      setSelectedOption([...selectedOption, option]);
    }
  };

  return (
    <>
      <div key={`${index}:questions`}>
        
          <p className={styles.questiontext}>{question.question}</p>
        

        <div
          className={
            question.choice_orientation == "horizontal"
              ? styles.option_container_horizontal
              : styles.option_container
          }
        >
          {question.choices.map((option, choiceIndex) => {
            if (question.choice_type == "radio") {
              return (
                <AnswerRadioButtonField
                  key={`${choiceIndex}:r_question_choices`}
                  index={choiceIndex}
                  option={option}
                  selectedOption={selectedOption}
                  onChange={(option) => {
                    setSelectedOption(option);
                  }}
                />
              );
            } else {
              return (
                <AnswerCheckboxField
                  key={`${choiceIndex}:c_question_choices`}
                  index={choiceIndex}
                  option={option}
                  selectedOption={selectedOption}
                  onChange={(option) => {
                    handleCheckboxChange(option);
                  }}
                />
              );
            }
          })}
        </div>

        {/* Sub Question*/}
        {question.sub_questions
          ? question.sub_questions.map((sub_question, subIndex) => {
              return (
                <SubQuestion
                  key={`${subIndex}-${sub_question}`}
                  index={subIndex}
                  question={sub_question}
                  onChange={() => {}}
                />
              );
            })
          : null}
        {/* File */}

        {/* Input Field */}
        {question.text_labels.map((text_label, labelIndex) => {
          return (
            <AnswerInputField
              key={`${labelIndex}:text_label`}
              inputType={text_label.input_type ? text_label.input_type : "text"}
              large={text_label.large}
              index={labelIndex}
              label={text_label.label}
              placeholder={text_label.placeholder}
              onChange={(text) => {
                
              }}
            />
          );
        })}
      </div>
    </>
  );
};

