"use client";
import React, { useState } from "react";
import styles from "./styles.module.scss";
import DataTable from "./certificate-tables/Datatable";
import certificate_3rd from "../../utilities/certificate_3rd";
import certificate_ISO from "../../utilities/certificate_Iso";
import certificate_others from "../../utilities/certificate_others";
import Image from "next/image";
import { MdClose, MdOutlineEuroSymbol } from "react-icons/md";
import sectionHeaderIcon from "../../assets/sectionNameIcon.svg";
import searchIcon from "../../assets/searchIcon.svg";
import filter from "../../assets/Filter.svg";
import sortfilter from "../../assets/sortfilter.svg";
import popupCheck from "../../assets/popupcheck.svg";
import SingleSelect from "../onboarding-questionaires/questionaire-content/single-select/SingleSelect";
import DragFile from "../onboarding-questionaires/questionaire-content/drag-and-drop/Dragfile";
import DataTable2 from "./certficate-discover-tables/Datatable2";
import country_data from "../../utilities/country_data";

const Certificates = () => {
  const [selectedCertificate, setselectedCertificate] = useState<any>(null);
  const [selectedUtility, setSelectedUtility] = useState<any>(null);
  const [cartificateNavigate, setcartificateNavigate] = useState(1);
  const [sortFilterSelected, setsortFilterSelected] = useState(1);
  const [popsortFilter, setpopsortFilter] = useState(false);
  const [popFilter, setpopFilter] = useState(false);
  const [file, setFile] = useState<any>(null);
  const [addCertificatePopUp, setaddCertificatePopUp] = useState(false);
  const [newCertificatesCountry, setnewCertificatesCountry] = useState<any>("");
  const [newCertificatesLink, setnewCertificatesLink] = useState<any>("");
  const [newCertificateNAme, setnewCertificateNAme] = useState<any>("");
  const [certificatefile, setcertificateFile] = useState<any>(null);

  const closeCertificatePopUp = () => {
    setaddCertificatePopUp(false);
  };
  const onCertificateFileChange = (files: any) => {
    console.log(files);
    setcertificateFile(files);
  };

  const openCertificatePopUp = () => {
    setaddCertificatePopUp(true);
  };

  const selectSortFilter = (filterNum: number) => {
    setsortFilterSelected(filterNum);
  };

  const handleCardClick = (certificate: any) => {
    setselectedCertificate(certificate);
  };
  const onFileChange = (files: any) => {
    console.log(files);
    setFile(files);
  };

  const closePopup = () => {
    setselectedCertificate(null);
  };

  const certificateContentChange = (scoreNum: any) => {
    setcartificateNavigate(scoreNum);
  };

  const handleSaveCertificate = () => {
    if (
      !newCertificateNAme ||
      !newCertificatesCountry ||
      !newCertificatesLink ||
      !certificatefile
    ) {
      alert("Please fill in all fields.");
      return;
    }

    const newCertificate = {
      name: newCertificateNAme,
      country: newCertificatesCountry,
      website: newCertificatesLink,
      file: certificatefile,
    };

    console.log(newCertificate);

    // Reset fields
    setnewCertificateNAme("");
    setnewCertificatesCountry("");
    setnewCertificatesLink("");
    setcertificateFile(null);
    setaddCertificatePopUp(false);
  };

  return (
    <div className={styles.Certificates}>
      <div className={styles.sectionHeader}>
        <Image src={sectionHeaderIcon} width={18} height={18} alt="none" />
        <p>
          <span>/</span>Certificates
        </p>
      </div>

      <div className={styles.mytasksubHeader}>
        <div className={styles.headerbox1}>
          <h2>Certificates</h2>
          <p>
            Track and list all your sustainability certifications, including ISO
            standards and third-party verified certifications. The Certificates
            section is designed to showcase your company`s compliance with
            recognized industry standards.
          </p>
        </div>
        <button
          className={styles.headerbtn}
          onClick={() => {
            openCertificatePopUp();
          }}
        >
          + Add certificate
        </button>
      </div>

      <div className={styles.scorecardBody}>
        <div className={styles.scorecardsubcontbar}>
          <p
            onClick={() => {
              certificateContentChange(1);
            }}
            className={
              cartificateNavigate === 1
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            MY CERTIFICATES
          </p>
          <p
            onClick={() => {
              certificateContentChange(2);
            }}
            className={
              cartificateNavigate === 2
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            DISCOVER
          </p>
        </div>
        <div className={styles.scorecardBodyContent}>
          <div className={styles.subHeader}>
            <div className={styles.sectionFilters}>
              <div className={styles.sortFilter}>
                <div
                  className={styles.sortFilter2}
                  onClick={() => {
                    setpopsortFilter(!popsortFilter);
                  }}
                >
                  <Image
                    src={sortfilter}
                    width={16}
                    height={16}
                    alt="none"
                    className={styles.filterIcon}
                  />
                  SORT BY
                </div>
                {popsortFilter && (
                  <div className={styles.popUp}>
                    <div
                      className={
                        sortFilterSelected === 1
                          ? styles.popUpoptionshadow
                          : styles.popUpoption
                      }
                      onClick={() => {
                        selectSortFilter(1);
                      }}
                    >
                      <p>Newest First</p>{" "}
                      <Image
                        src={popupCheck}
                        width={17}
                        height={17}
                        alt="news image"
                        className={
                          sortFilterSelected !== 1 ? styles.hidden : styles.show
                        }
                      />
                    </div>
                    <div
                      className={
                        sortFilterSelected === 2
                          ? styles.popUpoptionshadow
                          : styles.popUpoption
                      }
                      onClick={() => {
                        selectSortFilter(2);
                      }}
                    >
                      <p>Oldest First</p>{" "}
                      <Image
                        src={popupCheck}
                        width={17}
                        height={17}
                        alt="news image"
                        className={
                          sortFilterSelected !== 2 ? styles.hidden : styles.show
                        }
                      />
                    </div>
                    <div
                      className={
                        sortFilterSelected === 3
                          ? styles.popUpoptionshadow
                          : styles.popUpoption
                      }
                      onClick={() => {
                        selectSortFilter(3);
                      }}
                    >
                      <p>Alphabetically A-Z</p>{" "}
                      <Image
                        src={popupCheck}
                        width={17}
                        height={17}
                        alt="news image"
                        className={
                          sortFilterSelected !== 3 ? styles.hidden : styles.show
                        }
                      />
                    </div>
                    <div
                      className={
                        sortFilterSelected === 4
                          ? styles.popUpoptionshadow
                          : styles.popUpoption
                      }
                      onClick={() => {
                        selectSortFilter(4);
                      }}
                    >
                      <p>Alphabetically Z-A</p>{" "}
                      <Image
                        src={popupCheck}
                        width={17}
                        height={17}
                        alt="news image"
                        className={
                          sortFilterSelected !== 4 ? styles.hidden : styles.show
                        }
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.sortFilter}>
                <div
                  className={styles.sortFilter2}
                  onClick={() => setpopFilter(!popFilter)}
                >
                  <Image
                    src={filter}
                    width={16}
                    height={16}
                    alt="none"
                    className={styles.filterIcon}
                  />
                  FILTERS
                </div>
                {popFilter && (
                  <div className={styles.popUp1}>
                    <p className={styles.filterByHeadline}>Filter By:</p>

                    <div className={styles.twoselectcontainer}>
                      <div className={styles.select1Box}>
                        <div className={styles.selectContainer1}>
                          <select className={styles.select1}>
                            <option value="" disabled selected>
                              Relevance
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className={styles.select1Box}>
                        <div className={styles.selectContainer1}>
                          <select className={styles.select1}>
                            <option value="" disabled selected>
                              Location
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className={styles.twoselectcontainer}>
                      <div className={styles.select1Box}>
                        <div className={styles.selectContainer1}>
                          <select className={styles.select1}>
                            <option value="" disabled selected>
                              Rating
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className={styles.select1Box}>
                        <div className={styles.selectContainer1}>
                          <select className={styles.select1}>
                            <option value="" disabled selected>
                              Industry
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <button className={styles.filterboxbtn}>
                      CLEAR FILTERS
                    </button>
                  </div>
                )}
              </div>
              <div className={styles.searchbar}>
                <Image
                  src={searchIcon}
                  width={26}
                  height={26}
                  alt="none"
                  className={styles.searchIcon}
                />
                <input type="text" placeholder="Search by keywords" />
              </div>
            </div>
          </div>
          {cartificateNavigate === 1 && <DataTable />}
          {cartificateNavigate === 2 && <DataTable2 />}
        </div>

        {addCertificatePopUp && (
        <div className={styles.container}>
          <div className={styles.boxCont1}>
            <div className={styles.subBox}>
              <div className={styles.closeheader}>
                <MdClose
                  className={styles.closeIcon}
                  onClick={closeCertificatePopUp}
                />
              </div>
              <h2 className={styles.title}>Add Your Certificate</h2>
              <p className={styles.description}>
                Please upload the certificate and provide necessary details.
              </p>
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Certificate Name</p>
              <input
                type="text"
                placeholder="Enter Certificate Name"
                value={newCertificateNAme}
                onChange={(e) => setnewCertificateNAme(e.target.value)}
              />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Select Country</p>
              <SingleSelect
                placeholder="Select Your Country"
                fieldData={country_data}
                setState={setnewCertificatesCountry}
                state={newCertificatesCountry}
              />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Website Link</p>
              <input
                type="text"
                placeholder="Paste Website Url"
                value={newCertificatesLink}
                onChange={(e) => setnewCertificatesLink(e.target.value)}
              />
            </div>
            <DragFile onFileChange={onCertificateFileChange} fileState={certificatefile}/>
            <button className={styles.button} onClick={handleSaveCertificate}>
                Save Certificate
            </button>
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Certificates;
