import React, { useState, ChangeEvent } from "react";
import { X } from "lucide-react";
import styles from "./styles.module.scss";

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  placeholder: string;
  data: Option[]; // Expect an array of { label: string; value: string }
  onChangeSelected: (selectedValues: string[]) => void; // Callback to update the parent component's state
  selectedData: Option[];
}

const MultiSelect: React.FC<MultiSelectProps> = ({ placeholder, data, onChangeSelected,selectedData }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value:any = e.target.value;
    if (value && !selectedData.includes(value)) {
      const updatedSelected = [...selectedData, value];
      setSelected(updatedSelected);
      onChangeSelected(updatedSelected); // Notify parent about the state change
    }
    e.target.value = "";
  };

  const removeTag = (tagToRemove: string) => {
    console.log(selectedData)
    const updatedSelected:any = selectedData.filter((tag:any) => tag !== tagToRemove);
    setSelected(updatedSelected);
    onChangeSelected(updatedSelected); // Notify parent about the state change
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectContainer}>
        <select
          onChange={handleChange}
          className={styles.select}
          defaultValue=""
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {data.map((option,index) => (
            <option key={index} value={option.label}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.tagsGrid}>
        {selectedData.map((tag:any, index:any) => (
          <div key={index} className={styles.tag}>
            <span className={styles.tagText}>
              {tag.length > 16 ? tag.substring(0, 16) + "..." : tag}
            </span>
            <X className={styles.closeIcon} onClick={() => removeTag(tag)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;


