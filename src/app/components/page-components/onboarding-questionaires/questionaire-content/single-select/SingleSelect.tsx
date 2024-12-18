// import React from "react";
// import styles from "./styles.module.scss";
// import country_data from "@/app/components/utilities/country_data";

// const SingleSelect: React.FC = () => {
//   return (
//     <div className={styles.selectContainer}>
//       <select className={styles.select}>
//         {country_data.map((option) => (
//           <option key={option.value} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default SingleSelect;

import React from "react";
import styles from "./styles.module.scss";

interface Option {
  value: string | number;
  label: string;
}

interface SingleSelectProps {
  fieldData: Option[];
  setState: (value: string | number) => void;
  state:string,
  placeholder: string;
}

const SingleSelect: React.FC<SingleSelectProps> = ({ fieldData, setState, placeholder,state }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState(event.target.value);
  };
  

  return (
    <div className={styles.selectContainer}>
      <select className={styles.select} onChange={handleChange} value={state}>
        <option value="" disabled>
          {placeholder}
        </option>
        {fieldData.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SingleSelect;
