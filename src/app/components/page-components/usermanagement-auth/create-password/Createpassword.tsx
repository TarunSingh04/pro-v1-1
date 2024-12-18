"use client";
import React, { ChangeEvent, useState } from "react";
import styles from "./styles.module.scss";
import { useRouter } from "next/navigation";
import SidebarOnboard from "@/app/components/utilities/components/sidebar-onboarding/SidebarOnboard";
import LanguageSelector from "@/app/components/utilities/components/language-selector/LanguageSelector";
import { FaChevronLeft } from "react-icons/fa";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import Image from "next/image";
import pageNotDisplayLogo from "../../../assets/pageNotDisplayLogo.svg";

const Createpassword = () => {
  const router = useRouter();
  const [code, setCode] = useState<string[]>(["", "", "", ""]);
  const [loader, setloader] = useState(false);
  const [codeSent, setcodeSent] = useState(false);

  const sendCode = () => {
    setcodeSent(true);
  };

  const handleCodeChange = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < 3) {
      const nextInput = document.getElementById(
        `code-${index + 1}`
      ) as HTMLInputElement;
      if (nextInput) {
        nextInput.focus();
      }
    }
  };
  const navigateTo = () => {
    router.push("/pages/forgot-password");
  };

  return (
    <div className={styles.LoginPageCont}>
      <div className={styles.pageNotDisplay}>
        <Image src={pageNotDisplayLogo} width={160} height={115} alt="none" />
        <p className={styles.pageNotDisplaytitle}>
          Oops! Best Viewed on Desktop
        </p>
        <p className={styles.pageNotDisplaysubtitle}>
          For the Best Experience, Switch to Desktop!
        </p>
        <p className={styles.pageNotDisplaydesc}>
          You&apos;re on a mobile or tablet. For the full experience and all
          site features, please visit us on your desktop.
        </p>
      </div>
      <div className={styles.LoginPage}>
        <div className={styles.LoginContainer}>
          <div className={styles.headerbtn}>
            <button
              className={styles.gobtn}
              onClick={() => {
                navigateTo();
              }}
            >
              {" "}
              <FaChevronLeft className={styles.leftIcon} /> GO BACK
            </button>
            <LanguageSelector />
          </div>
          <div className={styles.LoginBox}>
            <p className={styles.loginHeader}>
              <p className={styles.loginHead}>Create new password</p>
              <p className={styles.loginsubHead}>
                Congrats! you&apos;ve been verified.
              </p>
            </p>
            <div className={styles.wrapperInputBox}>
              <p>Password</p>
              <input type="text" placeholder="**********" />
            </div>

            <div className={styles.wrapperInputBox}>
              <p>Confirm Password</p>
              <input type="text" placeholder="**********" />
            </div>

            <div className={styles.buttonCont}>
              <button
                className={styles.button}
                onClick={() => {
                  router.push("/pages/create-password");
                }}
              >
                CHANGE PASSWORD
              </button>
            </div>
          </div>
        </div>
        <SidebarOnboard
          description={
            "CSRD Reporting Made Easy and Affordable for Any Company."
          }
        />
      </div>
    </div>
  );
};

export default Createpassword;
