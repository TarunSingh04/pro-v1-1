import React, { useState } from "react";
import styles from "./styles.module.scss";
import editIcon from "../../../assets/edit.svg";
import Image from "next/image";
import logoutIcon from "../../../assets/log-out.svg";
import searchIcon from "../../../assets/searchIcon.svg";

const SettingsMain = () => {
  const [EditState1, setEditState1] = useState(false);
  const [EditState2, setEditState2] = useState(false);
  const [EditState3, setEditState3] = useState(false);
  const [EditState4, setEditState4] = useState(false);
  const [isToggled, setIsToggled] = useState(false);
  const [timeZoneSearch, setTimeZoneSearch] = useState("");
  const [selectedTimeZone, setSelectedTimeZone] = useState(
    "UTC Dublin, Edinburgh, Lisbon, London"
  );
  const [language, setLanguage] = useState("English UK");
  const [email, setEmail] = useState("johndoe@gmail.com");
  const [password, setPassword] = useState("");
  const [timeZones] = useState([
    "UTC Dublin, Edinburgh, Lisbon, London",
    "UTC New York, Toronto",
    "UTC Tokyo, Osaka, Sapporo",
    "UTC Sydney, Canberra, Melbourne",
  ]);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  const handleSaveChanges = () => {
    const data = {
      password,
      twoFactorAuth: isToggled,
      email,
      timeZone: selectedTimeZone,
      language,
    };
    console.log("Saved Data:", data);
  };

  const handleTimeZoneSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTimeZoneSearch(e.target.value);
  };

  const filteredTimeZones = timeZones.filter((zone) =>
    zone.toLowerCase().includes(timeZoneSearch.toLowerCase())
  );

  return (
    <div className={styles.settings}>
      {/* Password Section */}
      <div className={styles.settingsBoxType1}>
        <div className={styles.settingBoxleftcont}>
          <div className={styles.Headertxt}>Password</div>
          {!EditState1 && (
            <div className={styles.txtBody}>One line sample description</div>
          )}
          {EditState1 && (
            <div className={styles.txtBody}>
              <input
                type="password"
                placeholder="Enter Your Password"
                className={styles.inputBoxStyles}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className={styles.settingBoxrightcont}>
          {!EditState1 ? (
            <p className={styles.edit} onClick={() => setEditState1(true)}>
              <Image src={editIcon} width={15} height={15} alt="none" />
              <span>Edit</span>
            </p>
          ) : (
            <p className={styles.edit} onClick={() => setEditState1(false)}>
              Close
            </p>
          )}
        </div>
      </div>

      {/* Two-Factor Authentication Section */}
      <div className={styles.settingsBoxType1}>
        <div className={styles.settingBoxleftcont}>
          <div className={styles.Headertxt}>Two-factor authentication</div>
          <div className={styles.txtBody}>
            Two-factor authentication is{" "}
            <span>{isToggled ? "active" : "inactive"}</span> for your account
          </div>
        </div>
        <div className={styles.settingBoxrightcont}>
          <p className={styles.toggledState}>
            {isToggled ? "Inactivate" : "Activate"}
          </p>
          <div
            className={`${styles.toggleWrapper} ${isToggled ? styles.active : ""}`}
            onClick={handleToggle}
            role="button"
            aria-pressed={isToggled}
            tabIndex={0}
          >
            <div className={styles.slider} />
          </div>
        </div>
      </div>

      {/* Email Section */}
      <div className={styles.settingsBoxType1}>
        <div className={styles.settingBoxleftcont}>
          <div className={styles.Headertxt}>Email</div>
          {!EditState2 && (
            <div className={styles.txtBody}>
              Your email address is <span>{email}</span>
            </div>
          )}
          {EditState2 && (
            <div className={styles.txtBody}>
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className={styles.inputBoxStyles}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
        </div>
        <div className={styles.settingBoxrightcont}>
          {!EditState2 ? (
            <p className={styles.edit} onClick={() => setEditState2(true)}>
              <Image src={editIcon} width={15} height={15} alt="none" />
              <span>Edit</span>
            </p>
          ) : (
            <p className={styles.edit} onClick={() => setEditState2(false)}>
              Close
            </p>
          )}
        </div>
      </div>

      {/* Time Zone Section */}
      <div className={styles.settingsBoxType1}>
        <div className={styles.settingBoxleftcont}>
          <div className={styles.Headertxt}>Time Zone</div>
          <div className={styles.txtBody}>
            <span>{selectedTimeZone}</span>
          </div>
        </div>
        <div className={styles.settingBoxrightcont}>
          <div className={styles.searchbar}>
            <Image
              src={searchIcon}
              width={26}
              height={26}
              alt="none"
              className={styles.searchIcon}
            />
            <input
              type="text"
              placeholder="Search by Time Zones"
              value={timeZoneSearch}
              onChange={handleTimeZoneSearch}
            />
            {timeZoneSearch && (
              <div className={styles.suggestions}>
                {filteredTimeZones.length > 0 ? (
                  filteredTimeZones.map((zone, index) => (
                    <p
                      key={index}
                      className={styles.suggestionItem}
                      onClick={() => {
                        setSelectedTimeZone(zone);
                        setTimeZoneSearch("");
                      }}
                    >
                      {zone}
                    </p>
                  ))
                ) : (
                  <p className={styles.suggestionItem}>
                    No relevant time zones found
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Language Section */}
      <div className={styles.settingsBoxType1}>
        <div className={styles.settingBoxleftcont}>
          <div className={styles.Headertxt}>Language</div>
          {!EditState4 ? (
            <div className={styles.txtBody}>{language}</div>
          ) : (
            <div className={styles.txtBody}>
              <select
                className={styles.select}
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
              >
                <option value="English UK">English</option>
                <option value="Spanish ES">Spanish</option>
                <option value="French FR">French</option>
              </select>
            </div>
          )}
        </div>
        <div className={styles.settingBoxrightcont}>
          {!EditState4 ? (
            <p className={styles.edit} onClick={() => setEditState4(true)}>
              <Image src={editIcon} width={15} height={15} alt="none" />
              <span>Edit</span>
            </p>
          ) : (
            <p className={styles.edit} onClick={() => setEditState4(false)}>
              Close
            </p>
          )}
        </div>
      </div>

      {/* Sign Out All Sessions Section */}
      <div className={styles.settingsBoxType1}>
        <div className={styles.settingBoxleftcont1}>
          <div className={styles.Headertxt}>Sign out of all sessions</div>
          <div className={styles.txtBody}>One line sample description</div>
        </div>
        <div className={styles.settingBoxrightcont1}>
          <p className={styles.signout}>
            <Image
              src={logoutIcon}
              width={14}
              height={14}
              alt="none"
              className={styles.ImageIcon}
            />
            Sign out of all accounts
          </p>
        </div>
      </div>

      {/* Deactivate Account Section */}
      <div className={styles.settingsBoxType1}>
        <div className={styles.settingBoxleftcont1}>
          <div className={styles.Headertxt}>Deactivate account</div>
          <div className={styles.txtBody}>
            If you no longer need your account on Impkater, you can deactivate
            it
          </div>
        </div>
        <div className={styles.settingBoxrightcont1}>
          <p className={styles.deactivate}>Deactivate account</p>
        </div>
      </div>

      {/* Save Changes Button */}
      <div className={styles.btncont}>
        <button className={styles.savebtn} onClick={handleSaveChanges}>
          Save changes
        </button>
      </div>
    </div>
  );
};

export default SettingsMain;
