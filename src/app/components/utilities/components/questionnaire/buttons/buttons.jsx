import styles from "./buttons.module.scss";
import Image from "next/image";
import Checkmark from "../../../../assets/Checkmark.png";

export const PrimaryButton = ({ onClick, label, outlined = false, checked = false }) => {
  return (
    <>
      <div className={styles.center}>
        <button
          className={
            outlined ? styles.primary_button_outlined : styles.primary_button
          }
          onClick={onClick}
        >
          {checked ? <Image src={Checkmark} width={15} height={15} /> : null}
          {label}
        </button>
      </div>
    </>
  );
};

export const SecondaryButton = ({ onClick, label }) => {
  return (
    <>
      <button
        onClick={onClick}
        className={styles.secondary_button}
        style={{ width: "100px", height: "35px" }}
      >
        <span>{label}</span>
      </button>
    </>
  );
};
