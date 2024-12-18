// "use client";
// import React, { useState, useEffect } from "react";
// import styles from "./styles.module.scss";
// import Sidebar from "./sidebar/Sidebar";
// import Image from "next/image";
// import { usePathname, useRouter } from "next/navigation";
// import logoutIcon from "../../assets/log-out.svg";
// import notifyIcon from "../../assets/notifyIcon'.svg";
// import searchIcon from "../../assets/searchIcon.svg";
// import pageNotDisplayLogo from "../../assets/pageNotDisplayLogo.svg";
// import searchExclaimation from "../../assets/searchHeadtile.svg"; 
// import searchShowIcon from "../../assets/searchItemArrowIcon.svg";
// import notificationWhiteIcon from "../../assets/notificationWhite.svg";
// import DashboardIcon from "../../assets/dashboardIcon.svg";
// import MytaskIcon from "../../assets/MytaskIcon.svg";
// import ScoreCardIcon from "../../assets/ScorecardIcon.svg";
// import ResportsIcon from "../../assets/ReportIcon.svg"
// import CertificatesIcon from "../../assets/certificateIcon.svg";
// import UtilityIcon from "../../assets/UtilityIcon.svg";
// import NewsIcon from "../../assets/NewsIcon.svg";
// import MarketplaceIcon from "../../assets/marketplaceIcon.svg";
// import learningIcon from "../../assets/elearningIcon.svg";
// import AIIcon from  "../../assets/AIIcon.svg";
// import SettingsIcon from "../../assets/settingsIcon.svg";
// import BadgeIcon from "../../assets/BadgeIcon.svg";
// import footer from "../../assets/footerSidenav.svg"
// import EditIcon from "../../assets/EditIcon.svg";
// import profileImage from "../../assets/profileImage.png";


// const SidebarTabs = [
//   {
//     tabName: "Dashboard",
//     tagNavigate: "/pages/dashboard",
//   },
//   {
//     tabName: "My Tasks",
//     tagNavigate: "/pages/mytasks",
//   },
//   {
//     tabName: "Scorecard",
//     tagNavigate: "/pages/scorecard",
//   },
//   {
//     tabName: "ESG Progress Report",
//     tagNavigate: "/pages/reports",
//   },
//   {
//     tabName: "Sustainability Badge",
//     tagNavigate: "/pages/sustainability-badge",
//   },
//   {
//     tabName: "Certificates",
//     tagNavigate: "/pages/certificates",
//   },
//   {
//     tabName: "Utilities",
//     tagNavigate: "/pages/utilities",
//   },
//   {
//     tabName: "ESG News",
//     tagNavigate: "/pages/esgnews",
//   },
//   {
//     tabName: "Marketplace",
//     tagNavigate: "/pages/marketplace",
//   },
//   {
//     tabName: "E-learning modules",
//     tagNavigate: "/pages/learning",
//   },
//   {
//     tabName: "AI Assistant",
//     tagNavigate: "/pages/ai-assistant",
//   },
//   {
//     tabName: "Settings",
//     tagNavigate: "/pages/settings",
//   },
// ];

// const withDashboardLayout = (WrappedComponent: any, route: string) => {
//   const DashboardLayout: React.FC = () => {
//     const navigate = useRouter();
//     const pathname = usePathname();
//     const [searchQuery, setSearchQuery] = useState<string>("");
//     const [searchResults, setSearchResults] = useState<typeof SidebarTabs>([]);
//     const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
//     const [notificationsShow, setnotificationsShow] = useState<boolean>(false);
//     const [notifications, setnotifications] = useState([
//       {
//         notificationTitle:"utilities",
//         notificationMessage:"A new utility has been submitted for review.",
//         notificationSection:"/pages/utilities",
//         notificationTime: "4 hours ago"
//       },
//       {
//         notificationTitle:"certificates",
//         notificationMessage:"A new certificates has been submitted for review.",
//         notificationSection:"/pages/utilities",
//         notificationTime: "6 hours ago"
//       },
//       {
//         notificationTitle:"marketplace",
//         notificationMessage:"A new certificates has been submitted for review.",
//         notificationSection:"/pages/marketplace",
//         notificationTime: "6 hours ago"
//       },
//       {
//         notificationTitle:"learning",
//         notificationMessage:"A new certificates has been submitted for review.",
//         notificationSection:"/pages/learning",
//         notificationTime: "6 hours ago"
//       },

//     ]);

//     useEffect(() => {
//       if (searchQuery.trim() === "") {
//         setSearchResults([]);
//         setShowSuggestions(false);
//         return;
//       }

//       const filteredResults = SidebarTabs.filter((tab) =>
//         tab.tabName.toLowerCase().includes(searchQuery.toLowerCase())
//       );

//       setSearchResults(filteredResults);
//       setShowSuggestions(true);
//     }, [searchQuery]);

//     const navigateTo = (pathname: string) => {
//       navigate.push(pathname);
//     };

//     return (
//       <div className={styles.dashboardPageCont}>
//         <div className={styles.pageNotDisplay}>
//           <Image src={pageNotDisplayLogo} width={160} height={115} alt="none" />
//           <p className={styles.pageNotDisplaytitle}>
//             Oops! Best Viewed on Desktop
//           </p>
//           <p className={styles.pageNotDisplaysubtitle}>
//             For the Best Experience, Switch to Desktop!
//           </p>
//           <p className={styles.pageNotDisplaydesc}>
//             You&apos;re on a mobile or tablet. For the full experience and all
//             site features, please visit us on your desktop.
//           </p>
//         </div>
//         <div className={styles.dashboardPage}>
//           <Sidebar defaultRoute={route} />
//           <div className={styles.siderbarSpace}></div>
//           <div className={styles.Content}>
//             <div className={styles.navbar}>
//               <div className={styles.searchbar}>
//                 <Image
//                   src={searchIcon}
//                   width={26}
//                   height={26}
//                   alt="none"
//                   className={styles.searchIcon}
//                 />
//                 <input
//                   type="text"
//                   placeholder="Search anything"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                 />
//                 {showSuggestions && (
//                   <div className={styles.suggestionBox}>
//                     <div className={styles.headline}>
//                       <Image src={searchExclaimation} width={15} height={15} alt="none" className={styles.exclaimIcon}/>
//                       <p>Search results {searchResults.length} found</p>
//                     </div>
//                     {searchResults.length > 0 ? (
//                       searchResults.map((result, index) => (
//                         <div
//                           key={index}
//                           className={styles.suggestionItem}
//                           onClick={() => navigateTo(result.tagNavigate)}
//                         >
//                           <p className={styles.tabName}>
//                             {result.tabName}
//                             <Image src={searchShowIcon} width={10} height={10} alt="none"/>
//                           </p>
//                           <p className={styles.description}>Search details in the grey sub line</p>
//                         </div>
//                       ))
//                     ) : (
//                       <div className={styles.noResults}>No relevant pages found</div>
//                     )}
//                   </div>
//                 )}
//               </div>
//               <div className={styles.notifycont} >
//                 <div className={styles.notify} style={{color:!notificationsShow?"#1492EF":"#FFFFFF",background:notificationsShow?"#1492EF":"#F1F8FF"}} onClick={()=>{setnotificationsShow(!notificationsShow)}}>
//                   {
//                     !notificationsShow &&
//                   <Image
//                     src={notifyIcon}
//                     width={16}
//                     height={16}
//                     alt="none"
//                     className={styles.notifyIcon}
//                   />
//                   }
//                   {
//                     notificationsShow &&
//                     <Image
//                      src={notificationWhiteIcon}
//                      width={16}
//                      height={16}
//                      alt="none"
//                      className={styles.notifyIcon}
//                    />
//                   }
//                   <span style={{color:!notificationsShow?"#1492EF":"#FFFFFF"}}>{notifications.length}</span>
//                 </div>
//                 <div
//                   className={styles.logout}
//                   onClick={() => {
//                     navigateTo("/pages/login-user");
//                   }}
//                 >
//                   <Image
//                     src={logoutIcon}
//                     width={16}
//                     height={16}
//                     alt="none"
//                     className={styles.logoutIcon}
//                   />
//                   <span>LOG OUT</span>
//                 </div>
//                 {
//                     notificationsShow && <div className={styles.notificationSection}>
//                     {
//                       notifications.length !==0 &&  <div className={styles.noticationssubcont}>
//                         {
//                           notifications.map((notificationItems,index)=>{
//                             return(
//                               (notifications.length !== index+1) ?
//                               <div className={styles.notifyBox} key={index}>
//                                 <div className={styles.notificationImg}>
//                                   {
//                                     notificationItems.notificationTitle === "dashboard" && 
//                                     <Image src={DashboardIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                   }
//                                   {
//                                     notificationItems.notificationTitle === "mytask" && 
//                                     <Image src={MytaskIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                   }
//                                   {
//                                     notificationItems.notificationTitle === "scorecard" && 
//                                     <Image src={ScoreCardIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                   }
//                                   {
//                                     notificationItems.notificationTitle === "report" && 
//                                     <Image src={ResportsIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                   }
//                                   {
//                                     notificationItems.notificationTitle === "sustainability badge" && 
//                                     <Image src={BadgeIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                   }
//                                   {
//                                     notificationItems.notificationTitle === "certificates" && 
//                                     <Image src={CertificatesIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                   }
//                                   {
//                                     notificationItems.notificationTitle === "utilities" && 
//                                     <Image src={UtilityIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                   }
//                                   {
//                                     notificationItems.notificationTitle === "news" && 
//                                     <Image src={NewsIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                   }
//                                    {
//                                     notificationItems.notificationTitle === "marketplace" && 
//                                     <Image src={MarketplaceIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                   }
//                                    {
//                                     notificationItems.notificationTitle === "learning" && 
//                                     <Image src={learningIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                   }
//                                   {
//                                     notificationItems.notificationTitle === "aiassistant" && 
//                                     <Image src={AIIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                   }
//                                   {
//                                     notificationItems.notificationTitle === "settings" && 
//                                     <Image src={SettingsIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                   }

//                                 </div>
//                                 <div className={styles.notificationtextBox}>
//                                   <div className={styles.notifyMessage}>{notificationItems.notificationMessage}</div>
//                                   <div className={styles.notifySectionTitle}>{notificationItems.notificationTitle}</div>
//                                   <div className={styles.notifytime}>{notificationItems.notificationTime}</div>
//                                   <div className={styles.notifybtnCont}>
//                                     <button className={styles.discardbtn}>DISCARD</button>
//                                     <button onClick={()=>{navigate.push(notificationItems.notificationSection)}} className={styles.viewbtn}>VIEW</button>
//                                   </div>
//                                 </div>
//                               </div>:
//                               <div className={styles.notifyBox1} key={index}>
//                               <div className={styles.notificationImg}>
//                                 {
//                                   notificationItems.notificationTitle === "dashboard" && 
//                                   <Image src={DashboardIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                 }
//                                 {
//                                   notificationItems.notificationTitle === "mytask" && 
//                                   <Image src={MytaskIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                 }
//                                 {
//                                   notificationItems.notificationTitle === "scorecard" && 
//                                   <Image src={ScoreCardIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                 }
//                                 {
//                                   notificationItems.notificationTitle === "report" && 
//                                   <Image src={ResportsIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                 }
//                                 {
//                                   notificationItems.notificationTitle === "sustainability badge" && 
//                                   <Image src={BadgeIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                 }
//                                 {
//                                   notificationItems.notificationTitle === "certificates" && 
//                                   <Image src={CertificatesIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                 }
//                                 {
//                                   notificationItems.notificationTitle === "utilities" && 
//                                   <Image src={UtilityIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                 }
//                                 {
//                                   notificationItems.notificationTitle === "news" && 
//                                   <Image src={NewsIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                 }
//                                  {
//                                   notificationItems.notificationTitle === "marketplace" && 
//                                   <Image src={MarketplaceIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                 }
//                                  {
//                                   notificationItems.notificationTitle === "learning" && 
//                                   <Image src={learningIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                 }
//                                 {
//                                   notificationItems.notificationTitle === "aiassistant" && 
//                                   <Image src={AIIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                 }
//                                 {
//                                   notificationItems.notificationTitle === "settings" && 
//                                   <Image src={SettingsIcon} width={18} height={18} alt="none" className={styles.sidebarIcon} />
//                                 }

//                               </div>
//                               <div className={styles.notificationtextBox}>
//                                 <div className={styles.notifyMessage}>{notificationItems.notificationMessage}</div>
//                                 <div className={styles.notifySectionTitle}>{notificationItems.notificationTitle}</div>
//                                 <div className={styles.notifytime}>{notificationItems.notificationTime}</div>
//                                 <div className={styles.notifybtnCont}>
//                                   <button className={styles.discardbtn}>DISCARD</button>
//                                   <button onClick={()=>{navigate.push(notificationItems.notificationSection)}} className={styles.viewbtn}>VIEW</button>
//                                 </div>
//                               </div>
//                             </div>
//                             )
//                           })
//                         }
//                       </div>
//                     }
//                     {
//                       notifications.length===0 &&
//                       <div className={styles.noNotificationsMessage}>No New Notifications Found.</div>
//                     }
//                   </div>
//                   }
//               </div>
//             </div>
//             <WrappedComponent />
//           </div>
//         </div>
//       </div>
//     );
//   };

//   return DashboardLayout;
// };

// export default withDashboardLayout;

"use client";
import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import Sidebar from "./sidebar/Sidebar";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import logoutIcon from "../../assets/log-out.svg";
import notifyIcon from "../../assets/notifyIcon'.svg";
import searchIcon from "../../assets/searchIcon.svg";
import pageNotDisplayLogo from "../../assets/pageNotDisplayLogo.svg";
import searchExclaimation from "../../assets/searchHeadtile.svg"; 
import searchShowIcon from "../../assets/searchItemArrowIcon.svg";
import notificationWhiteIcon from "../../assets/notificationWhite.svg";
import DashboardIcon from "../../assets/dashboardIcon.svg";
import MytaskIcon from "../../assets/MytaskIcon.svg";
import ScoreCardIcon from "../../assets/ScorecardIcon.svg";
import ResportsIcon from "../../assets/ReportIcon.svg"
import CertificatesIcon from "../../assets/certificateIcon.svg";
import UtilityIcon from "../../assets/UtilityIcon.svg";
import NewsIcon from "../../assets/NewsIcon.svg";
import MarketplaceIcon from "../../assets/marketplaceIcon.svg";
import learningIcon from "../../assets/elearningIcon.svg";
import AIIcon from  "../../assets/AIIcon.svg";
import SettingsIcon from "../../assets/settingsIcon.svg";
import BadgeIcon from "../../assets/BadgeIcon.svg";
import footer from "../../assets/footerSidenav.svg";
import EditIcon from "../../assets/EditIcon.svg";
import profileImage from "../../assets/profileImage.png";

const SidebarTabs = [
  {
    tabName: "Dashboard",
    tagNavigate: "/pages/dashboard",
  },
  {
    tabName: "My Tasks",
    tagNavigate: "/pages/mytasks",
  },
  {
    tabName: "Scorecard",
    tagNavigate: "/pages/scorecard",
  },
  {
    tabName: "ESG Progress Report",
    tagNavigate: "/pages/reports",
  },
  {
    tabName: "Sustainability Badge",
    tagNavigate: "/pages/sustainability-badge",
  },
  {
    tabName: "Certificates",
    tagNavigate: "/pages/certificates",
  },
  {
    tabName: "Utilities",
    tagNavigate: "/pages/utilities",
  },
  {
    tabName: "ESG News",
    tagNavigate: "/pages/esgnews",
  },
  {
    tabName: "Marketplace",
    tagNavigate: "/pages/marketplace",
  },
  {
    tabName: "E-learning modules",
    tagNavigate: "/pages/learning",
  },
  {
    tabName: "AI Assistant",
    tagNavigate: "/pages/ai-assistant",
  },
  {
    tabName: "Settings",
    tagNavigate: "/pages/settings",
  },
];

const withDashboardLayout = (WrappedComponent: any, route: string) => {
  const DashboardLayout: React.FC = () => {
    const navigate = useRouter();
    const pathname = usePathname();
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [searchResults, setSearchResults] = useState<typeof SidebarTabs>([]);
    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    const [notificationsShow, setnotificationsShow] = useState<boolean>(false);
    const [notifications, setnotifications] = useState([
      {
        id: 1,
        notificationTitle: "utilities",
        notificationMessage: "A new utility has been submitted for review.",
        notificationSection: "/pages/utilities",
        notificationTime: "4 hours ago",
      },
      {
        id: 2,
        notificationTitle: "certificates",
        notificationMessage: "A new certificates has been submitted for review.",
        notificationSection: "/pages/utilities",
        notificationTime: "6 hours ago",
      },
      {
        id: 3,
        notificationTitle: "marketplace",
        notificationMessage: "A new certificates has been submitted for review.",
        notificationSection: "/pages/marketplace",
        notificationTime: "6 hours ago",
      },
      {
        id: 4,
        notificationTitle: "learning",
        notificationMessage: "A new certificates has been submitted for review.",
        notificationSection: "/pages/learning",
        notificationTime: "6 hours ago",
      },
    ]);

    useEffect(() => {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
        setShowSuggestions(false);
        return;
      }

      const filteredResults = SidebarTabs.filter((tab) =>
        tab.tabName.toLowerCase().includes(searchQuery.toLowerCase())
      );

      setSearchResults(filteredResults);
      setShowSuggestions(true);
    }, [searchQuery]);

    const navigateTo = (pathname: string) => {
      navigate.push(pathname);
    };

    const discardNotification = (id: number) => {
      setnotifications((prevNotifications) =>
        prevNotifications.filter((notification) => notification.id !== id)
      );
    };

    return (
      <div className={styles.dashboardPageCont}>
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
        <div className={styles.dashboardPage}>
          <Sidebar defaultRoute={route} />
          <div className={styles.siderbarSpace}></div>
          <div className={styles.Content}>
            <div className={styles.navbar}>
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
                  placeholder="Search anything"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                {showSuggestions && (
                  <div className={styles.suggestionBox}>
                    <div className={styles.headline}>
                      <Image
                        src={searchExclaimation}
                        width={15}
                        height={15}
                        alt="none"
                        className={styles.exclaimIcon}
                      />
                      <p>Search results {searchResults.length} found</p>
                    </div>
                    {searchResults.length > 0 ? (
                      searchResults.map((result, index) => (
                        <div
                          key={index}
                          className={styles.suggestionItem}
                          onClick={() => navigateTo(result.tagNavigate)}
                        >
                          <p className={styles.tabName}>
                            {result.tabName}
                            <Image
                              src={searchShowIcon}
                              width={10}
                              height={10}
                              alt="none"
                            />
                          </p>
                          <p className={styles.description}>
                            Search details in the grey sub line
                          </p>
                        </div>
                      ))
                    ) : (
                      <div className={styles.noResults}>No relevant pages found</div>
                    )}
                  </div>
                )}
              </div>
              <div className={styles.notifycont}>
                <div
                  className={styles.notify}
                  style={{
                    color: !notificationsShow ? "#1492EF" : "#FFFFFF",
                    background: notificationsShow ? "#1492EF" : "#F1F8FF",
                  }}
                  onClick={() => {
                    setnotificationsShow(!notificationsShow);
                  }}
                >
                  {!notificationsShow && (
                    <Image
                      src={notifyIcon}
                      width={16}
                      height={16}
                      alt="none"
                      className={styles.notifyIcon}
                    />
                  )}
                  {notificationsShow && (
                    <Image
                      src={notificationWhiteIcon}
                      width={16}
                      height={16}
                      alt="none"
                      className={styles.notifyIcon}
                    />
                  )}
                  <span
                    style={{ color: !notificationsShow ? "#1492EF" : "#FFFFFF" }}
                  >
                    {notifications.length}
                  </span>
                </div>
                <div
                  className={styles.logout}
                  onClick={() => {
                    navigateTo("/pages/login-user");
                  }}
                >
                  <Image
                    src={logoutIcon}
                    width={16}
                    height={16}
                    alt="none"
                    className={styles.logoutIcon}
                  />
                  <span>LOG OUT</span>
                </div>
                {notificationsShow && (
                  <div className={styles.notificationSection}>
                    {notifications.length !== 0 && (
                      <div className={styles.noticationssubcont}>
                        {notifications.map((notificationItems,index) => (
                          <div
                            className={
                              notifications.length !== index+1
                                ? styles.notifyBox
                                : styles.notifyBox1
                            }
                            key={notificationItems.id}
                          >
                            <div className={styles.notificationImg}>
                              {notificationItems.notificationTitle === "dashboard" && (
                                <Image
                                  src={DashboardIcon}
                                  width={18}
                                  height={18}
                                  alt="none"
                                  className={styles.sidebarIcon}
                                />
                              )}
                              {notificationItems.notificationTitle === "mytask" && (
                                <Image
                                  src={MytaskIcon}
                                  width={18}
                                  height={18}
                                  alt="none"
                                  className={styles.sidebarIcon}
                                />
                              )}
                              {notificationItems.notificationTitle === "scorecard" && (
                                <Image
                                  src={ScoreCardIcon}
                                  width={18}
                                  height={18}
                                  alt="none"
                                  className={styles.sidebarIcon}
                                />
                              )}
                              {notificationItems.notificationTitle === "report" && (
                                <Image
                                  src={ResportsIcon}
                                  width={18}
                                  height={18}
                                  alt="none"
                                  className={styles.sidebarIcon}
                                />
                              )}
                              {notificationItems.notificationTitle === "sustainability badge" && (
                                <Image
                                  src={BadgeIcon}
                                  width={18}
                                  height={18}
                                  alt="none"
                                  className={styles.sidebarIcon}
                                />
                              )}
                              {notificationItems.notificationTitle === "certificates" && (
                                <Image
                                  src={CertificatesIcon}
                                  width={18}
                                  height={18}
                                  alt="none"
                                  className={styles.sidebarIcon}
                                />
                              )}
                              {notificationItems.notificationTitle === "utilities" && (
                                <Image
                                  src={UtilityIcon}
                                  width={18}
                                  height={18}
                                  alt="none"
                                  className={styles.sidebarIcon}
                                />
                              )}
                              {notificationItems.notificationTitle === "news" && (
                                <Image
                                  src={NewsIcon}
                                  width={18}
                                  height={18}
                                  alt="none"
                                  className={styles.sidebarIcon}
                                />
                              )}
                              {notificationItems.notificationTitle === "marketplace" && (
                                <Image
                                  src={MarketplaceIcon}
                                  width={18}
                                  height={18}
                                  alt="none"
                                  className={styles.sidebarIcon}
                                />
                              )}
                              {notificationItems.notificationTitle === "learning" && (
                                <Image
                                  src={learningIcon}
                                  width={18}
                                  height={18}
                                  alt="none"
                                  className={styles.sidebarIcon}
                                />
                              )}
                              {notificationItems.notificationTitle === "aiassistant" && (
                                <Image
                                  src={AIIcon}
                                  width={18}
                                  height={18}
                                  alt="none"
                                  className={styles.sidebarIcon}
                                />
                              )}
                              {notificationItems.notificationTitle === "settings" && (
                                <Image
                                  src={SettingsIcon}
                                  width={18}
                                  height={18}
                                  alt="none"
                                  className={styles.sidebarIcon}
                                />
                              )}
                            </div>
                            <div className={styles.notificationtextBox}>
                              <div className={styles.notifyMessage}>
                                {notificationItems.notificationMessage}
                              </div>
                              <div className={styles.notifySectionTitle}>
                                {notificationItems.notificationTitle}
                              </div>
                              <div className={styles.notifytime}>
                                {notificationItems.notificationTime}
                              </div>
                              <div className={styles.notifybtnCont}>
                                <button
                                  className={styles.discardbtn}
                                  onClick={() => discardNotification(notificationItems.id)}
                                >
                                  DISCARD
                                </button>
                                <button
                                  onClick={() => {
                                    navigate.push(notificationItems.notificationSection);
                                  }}
                                  className={styles.viewbtn}
                                >
                                  VIEW
                                </button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    {notifications.length === 0 && (
                      <div className={styles.noNotificationsMessage}>
                        No New Notifications Found.
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <WrappedComponent />
          </div>
        </div>
      </div>
    );
  };

  return DashboardLayout;
};

export default withDashboardLayout;
