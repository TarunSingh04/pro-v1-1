import React, { useState } from "react";
import styles from "./styles.module.scss";
import DataTable from "./ultities-tables/Datatable";
import utility_section_data from "../../utilities/utility_section_data";
import Image from "next/image";
import sectionHeaderIcon from "../../assets/sectionNameIcon.svg";
import searchIcon from "../../assets/searchIcon.svg";
import filter from "../../assets/Filter.svg";
import sortfilter from "../../assets/sortfilter.svg";
import popupCheck from "../../assets/popupcheck.svg";
import MultiSelect from "../onboarding-questionaires/questionaire-content/multi-select/MultiSelect";
import sector_data from "../../utilities/sectors_data";
import { MdClose } from "react-icons/md";
import DataTableLogo from "../../assets/dataTablelogo.svg";
import utility_sector from "../../utilities/utility_sector";

const getBackgroundColor = (rating: any) => {
  switch (rating) {
    case "A":
      return "#6e8e7f";
    case "B":
      return "#b0d1ab";
    case "C":
      return "#ecce1d";
    case "D":
      return "#ed8a38";
    case "E":
      return "#ea5556";
    case "F":
      return "#ea5556";
    default:
      return "#fff"; // default background color if rating doesn't match
  }
};

const Utilitiescontent = () => {
  const [selectedUtility, setSelectedUtility] = useState<any>(null);
  const [utilityNavigate, setutilityNavigate] = useState(1);

  const [sortFilterSelected, setsortFilterSelected] = useState(1);
  const [popsortFilter, setpopsortFilter] = useState(false);
  const [popFilter, setpopFilter] = useState(false);
  const [utiltiyPopUp, setutilityPopUp] = useState(false);
  const [sectorsSelected, setsectorsSelected] = useState<any>([]);

  const [newUtilitiesData, setnewUtilitiesData] = useState<any>([]);
  const [newUtilitiesSector, setnewUtilitiesSector] = useState<any>([]);
  const [newUtilitiesName, setnewUtilitiesName] = useState<any>("");
  const [newUtilitiesLink, setnewUtilitiesLink] = useState<any>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const closeutilityPopUp = () => {
    setutilityPopUp(false);
  };

  const saveUtility = () => {
    if (
      !newUtilitiesName ||
      !newUtilitiesLink ||
      newUtilitiesSector.length === 0
    ) {
      alert("Please fill all fields.");
      return;
    }

    const newUtility = {
      sector: newUtilitiesSector,
      name: newUtilitiesName,
      link: newUtilitiesLink,
    };

    console.log(newUtility);


    // Clear inputs
    setnewUtilitiesSector([]);
    setnewUtilitiesName("");
    setnewUtilitiesLink("");
    setutilityPopUp(false);
  };

  const openutilityPopUp = () => {
    setutilityPopUp(true);
  };

  const selectSortFilter = (filterNum:number)=>{
      setsortFilterSelected(filterNum);
  }

  const utilityContentChange = (scoreNum: any) => {
    setutilityNavigate(scoreNum);
  };

  const closePopup = () => {
    setSelectedUtility(null);
  };

  const getFlagImageUrl = (countryCode: string): string => {
    const baseUrl = 'https://flagcdn.com/';
    const code = countryCode.toLowerCase();
    return `${baseUrl}${code}.svg`;
  };

  return (
    <div className={styles.Utilities}>
      <div className={styles.sectionHeader}>
        <Image src={sectionHeaderIcon} width={18} height={18} alt='none'/>
        <p><span>/</span>Utilities</p>
      </div>

      <div className={styles.mytasksubHeader}>
      <div className={styles.headerbox1}>
      <h2>Utilities</h2>
      <p>Monitor and evaluate the ESG scores of your utilities. Explore new utilities that prioritize sustainability in their operations and maintain transparency about their environmental impact.</p>
      </div>
      <button className={styles.headerbtn} onClick={()=>{openutilityPopUp()}}>+ Add Utilities</button>
     
      </div>
      <div className={styles.scorecardBody}>
        <div className={styles.scorecardsubcontbar}>
          <p
            onClick={() => {
              utilityContentChange(1);
            }}
            className={
              utilityNavigate === 1
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            My Utilities
          </p>
          <p
            onClick={() => {
              utilityContentChange(2);
            }}
            className={
              utilityNavigate === 2
                ? styles.boldScoreSection
                : styles.normalScoreSection
            }
          >
            Discover
          </p>
        </div>
        <div className={styles.scorecardBodyContent}>

        <div className={styles.subHeader}>
        <div className={styles.sectionFilters}>
            <div className={styles.sortFilter}>
                <div className={styles.sortFilter2} onClick={()=>{setpopsortFilter(!popsortFilter)}}><Image src={sortfilter} width={16} height={16} alt='none' className={styles.filterIcon}/>SORT BY</div>
                {
                    popsortFilter && <div className={styles.popUp}>
                    <div className={sortFilterSelected===1?styles.popUpoptionshadow :styles.popUpoption}  onClick={()=>{selectSortFilter(1)}} ><p>Newest First</p>  <Image src={popupCheck} width={17} height={17} alt="news image" className={sortFilterSelected!==1?styles.hidden:styles.show} /></div>
                    <div className={sortFilterSelected===2?styles.popUpoptionshadow :styles.popUpoption}  onClick={()=>{selectSortFilter(2)}} ><p>Oldest First</p>  <Image src={popupCheck} width={17} height={17} alt="news image" className={sortFilterSelected!==2?styles.hidden:styles.show} /></div>
                    <div className={sortFilterSelected===3?styles.popUpoptionshadow :styles.popUpoption}  onClick={()=>{selectSortFilter(3)}} ><p>Alphabetically A-Z</p>  <Image src={popupCheck} width={17} height={17} alt="news image" className={sortFilterSelected!==3?styles.hidden:styles.show} /></div>
                    <div className={sortFilterSelected===4?styles.popUpoptionshadow :styles.popUpoption}  onClick={()=>{selectSortFilter(4)}} ><p>Alphabetically Z-A</p>  <Image src={popupCheck} width={17} height={17} alt="news image" className={sortFilterSelected!==4?styles.hidden:styles.show} /></div>
                </div>
                }
                </div>

                <div className={styles.sortFilter}>
                    <div className={styles.sortFilter2}  onClick={() => setpopFilter(!popFilter)}><Image src={filter} width={16} height={16} alt='none' className={styles.filterIcon}/>FILTERS</div>
                    {
                    popFilter && <div className={styles.popUp1}>
                    <p className={styles.filterByHeadline}>Filter By:</p>
                    <div className={styles.selectContainer}>
                      <select className={styles.select}>
                        <option value="" disabled selected>
                            Utility category
                        </option>
                      </select>
                    </div>

                    <div className={styles.twoselectcontainer}>
                      <div className={styles.select1Box}>
                      <div className={styles.selectContainer}>
                      <select className={styles.select}>
                        <option value="" disabled selected>
                        Relevance
                        </option>
                      </select>
                    </div>
                      </div>
                      <div className={styles.select1Box}>
                      <div className={styles.selectContainer}>
                      <select className={styles.select}>
                        <option value="" disabled selected>
                        Location
                        </option>
                      </select>
                    </div>
                      </div>
                    </div>

                    <div className={styles.twoselectcontainer}>
                      <div className={styles.select1Box}>
                      <div className={styles.selectContainer}>
                      <select className={styles.select}>
                        <option value="" disabled selected>
                        Rating
                        </option>
                      </select>
                    </div>
                      </div>
                      <div className={styles.select1Box}>
                      <div className={styles.selectContainer}>
                      <select className={styles.select}>
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
                }
                </div>
            <div className={styles.searchbar}>
            <Image src={searchIcon} width={26} height={26} alt="none" className={styles.searchIcon}/>
            <input type="text" placeholder="Search by keywords" />
            </div>
        </div>
      </div>
        {utilityNavigate === 1 && <DataTable setSelectedUtility={setSelectedUtility} SelectedUtility={selectedUtility}/>}
        {utilityNavigate === 2 && <DataTable setSelectedUtility={setSelectedUtility} SelectedUtility={selectedUtility}/>}
      </div>
      </div>
      
      {utiltiyPopUp && (
        <div className={styles.container}>
          <div className={styles.boxCont1}>
            <div className={styles.subBox}>
              <div className={styles.closeheader}>
                <MdClose
                  className={styles.closeIcon}
                  onClick={() => setutilityPopUp(false)}
                />
              </div>
              <h2 className={styles.title}>Add Your Utility</h2>
              <p className={styles.description}>
                Please provide details about the utility.
              </p>
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Utility Sector</p>
              <MultiSelect
                placeholder="Select Your Sectors"
                data={utility_sector}
                onChangeSelected={setnewUtilitiesSector}
                selectedData={newUtilitiesSector}
              />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Utility name</p>
              <input
                type="text"
                value={newUtilitiesName}
                onChange={(e) => setnewUtilitiesName(e.target.value)}
                placeholder="Enter Utility Name"
              />
            </div>
            <div className={styles.wrapperInputBox}>
              <p>Website</p>
              <input
                type="text"
                value={newUtilitiesLink}
                onChange={(e) => setnewUtilitiesLink(e.target.value)}
                placeholder="Paste Website URL"
              />
            </div>
            <button className={styles.button} onClick={saveUtility}>
               SAVE UTILITY
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Utilitiescontent;
