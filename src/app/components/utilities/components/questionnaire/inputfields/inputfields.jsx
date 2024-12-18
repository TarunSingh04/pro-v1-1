import {
  MdError,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import styles from "./inputfields.module.scss";
import { useState, useEffect, useRef, use } from "react";
import { SearchIcon } from "lucide-react";
export const AnswerInputField = ({
  index,
  label,
  placeholder,
  onChange,
  prefixIcon = null,
  inputType = "text",
  large = false,
}) => {
  return (
    <>
      <div key={`${index}:text_label`} className={`${styles.column}`}>
        <p className={styles.text_label}>{label}</p>

        {
          large ? (
            <textarea
              className={styles.textarea}
              placeholder={placeholder}
              onChange={(e) => {
                onChange(e.target.value);
              }}
            />
          ) : (
            
              prefixIcon ? (<div className={`${styles.row_center} ${styles.searchfield}`}>
                {prefixIcon}
                <input
                    style={{
                      flexGrow: 100,
                      border: "none",
                      textDecoration: "none",
                      outline: "none",
                    }}
                    type={inputType}
                    placeholder={placeholder}
                    onChange={(e) => {
                      onChange(e.target.value);
                    }}
                  />
              </div>) : <>
                <input
                  className={styles.inputfield}
                  type={inputType}
                  placeholder={placeholder}
                  onChange={(e) => {
                    onChange(e.target.value);
                  }}
                />
              
              </>
          )
        }
      </div>
    </>
  );
};

export const AnswerRadioButtonField = ({
  index,
  option,
  selectedOption,
  onChange,
}) => {
  return (
    <>
      <div
        key={`${index}:question_choices`}
        className={`${styles.row} ${styles.gap_8}`}
      >
        <input
          type="radio"
          checked={selectedOption == option}
          className={styles.radiobutton}
          value={option}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <p className={styles.optiontext}>{option}</p>
      </div>
    </>
  );
};

export const AnswerCheckboxField = ({
  index,
  option,
  selectedOption,
  onChange,
}) => {
  return (
    <>
      <div
        key={`${index}:question_choices`}
        className={`${styles.row} ${styles.gap_8}`}
      >
        <input
          type="checkbox"
          checked={selectedOption.includes(option)}
          className={styles.checkbox}
          value={option}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
        <p className={styles.optiontext}>{option}</p>
      </div>
    </>
  );
};

export const SearchableDropdown = ({
  label = "Select Sustainable Development Goals",
  placeholder = "Type to search",
  options,
  onChange,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  useEffect(() => {
    if (searchText.length == 0) {
      setFilteredOptions(options);
    } else {
      setFilteredOptions(
        options.filter((option) => {
          return option.toLowerCase().includes(searchText.toLowerCase());
        })
      );
    }
  }, [searchText]);

  const setDropdownVisibility = (visibility) => {
    setShowDropdown(visibility);
  };

  return (
    <div>
      <div
        className={styles.dropdown_button}
        onClick={() => {
          setDropdownVisibility(!showDropdown);
        }}
      >
        <p className={styles.optiontext}>{label}</p>

        {showDropdown ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}
      </div>

      {showDropdown && (
        <div className={styles.dropdown_container}>
          <AnswerInputField
            prefixIcon={
              <SearchIcon
                width={20}
                height={20}
                color="#0077cc"
                style={{
                  marginRight: "8px",
                }}
              />
            }
            index={0}
            label={""}
            placeholder={"Type to search"}
            onChange={(text) => {
              setSearchText(text);
            }}
          />
          <div className={styles.row}>
            <MdError color={"#7c7c7c"} />{" "}
            <p className={styles.optiontext}>Max 5 SDGs Allowed</p>
          </div>
          {filteredOptions ? (
            <>
              {filteredOptions.map((option, index) => {
                return (
                  <AnswerCheckboxField
                    key={`${index}:searchable_dropdown`}
                    index={index}
                    option={option}
                    selectedOption={selectedOptions}
                    onChange={(option) => {
                      if (selectedOptions.includes(option)) {
                        setSelectedOptions(
                          selectedOptions.filter((item) => item !== option)
                        );
                      } else {
                        if (selectedOptions.length >= 5) {
                          alert("Max 5 SDGs allowed");
                          return;
                        }
                        setSelectedOptions([...selectedOptions, option]);
                      }
                    }}
                  />
                );
              })}
            </>
          ) : null}
        </div>
      )}
    </div>
  );
};
