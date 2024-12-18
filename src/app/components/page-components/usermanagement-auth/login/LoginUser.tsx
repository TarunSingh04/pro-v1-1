"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import googleLogo from "../../../assets/google.png";
import dashboard from "../../../assets/sidebanner.png";
import { useRouter } from "next/navigation";
import { AiFillCloseSquare } from "react-icons/ai";
import TwoFactorAuth from "./two-factor/TwoFactor";
import LanguageSelector from "@/app/components/utilities/components/language-selector/LanguageSelector";
import SidebarOnboard from "@/app/components/utilities/components/sidebar-onboarding/SidebarOnboard";
import pageNotDisplayLogo from "../../../assets/pageNotDisplayLogo.svg";

const LoginUser = () => {
  const router = useRouter();
  const [email, setemail] = useState<any>("");
  const [password, setpassword] = useState<any>("");
  const [verificationCode, setverificationCode] = useState<any>("");
  const [popUp, setpopUp] = useState(false);
  const [loaderShow, setloaderShow] = useState("");
  const [errorCheck, seterrorCheck] = useState(false);
  const [message, setmessage] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const navigateToSignin = () => {
    router.push("/pages/register-user");
  };

  const navigateToForgotPassword = () => {
    router.push("/pages/forgot-password");
  };

  const changeEmail = (e: any) => {
    setemail(e.target.value);
  };
  const changePassword = (e: any) => {
    setpassword(e.target.value);
  };

  const Signin = () => {
    if (!email || !password) {
      seterrorCheck(true);
      setmessage("All fields are mandatory*");
      return;
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      seterrorCheck(true);
      setmessage("Invalid email format*");
      return;
    }
    setpopUp(true);
    router.push("/pages/onboarding");
  };

  const close2FA = () => {
    setpopUp(false);
  };

  const loaderOn = () => {};

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
        {popUp && <TwoFactorAuth email={email} setpopUp={setpopUp} />}
        {loaderShow && (
          <div className={styles.authpopup}>
            <div className={styles.authpopupcontainer}>
              <div className="loader"></div>
            </div>
          </div>
        )}
        <div className={styles.LoginContainer}>
          <div className={styles.languageselectcont}>
          <LanguageSelector />
          </div>
          <div className={styles.LoginBox}>
            <p className={styles.loginHeader}>
              <p className={styles.loginHead}>Sign In</p>
              <p className={styles.loginsubHead}>Welcome back!</p>
            </p>

            <p className={errorCheck ? styles.message2 : styles.message1}>
              {message}
            </p>
            <div className={styles.wrapperInputBox}>
              <p>Email</p>
              <input
                type="text"
                placeholder="john.doe@impakter.com"
                onChange={changeEmail}
              />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Password</p>
              <input
                type="password"
                placeholder="********"
                onChange={changePassword}
              />
            </div>
            <div className={styles.buttonBoxLinks1}>
              <p
                onClick={() => {
                  navigateToForgotPassword();
                }}
              >
                Forgot password?
              </p>
            </div>
            <div className={styles.buttonBox}>
              <div className={styles.rememberBox}>
                <input
                  type="checkbox"
                  id="remember"
                  className={styles.custom_checkbox}
                  checked={isChecked}
                  onChange={handleToggle}
                />
                <label
                  htmlFor="remember"
                  className={styles.custom_label}
                ></label>
                <label htmlFor="remember">Keep me signed in</label>
              </div>
              <button
                className={styles.loginButton}
                onClick={() => {
                  Signin();
                }}
              >
                LET &apos;S GO
              </button>
              <p className={styles.buttonBoxLinks}>
                <div className={styles.divideline}></div>
                OR
                <div className={styles.divideline}></div>
              </p>
              <button className={styles.googleButton}>
                <Image src={googleLogo} height={22} width={22} alt="none" />
                <p>Sign in with Google</p>
              </button>
              <div className={styles.buttonBoxLinkssignup}>
                Don&apos;t have an account?{" "}
                <p
                  onClick={() => {
                    navigateToSignin();
                  }}
                >
                  Sign up here.
                </p>
              </div>
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

export default LoginUser;
