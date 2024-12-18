import React, { useState } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";
import defaultImg from "../../../assets/reportdefaultImg.svg";
import globe from "../../../assets/globeLink.svg";
import Archieve from "../../../assets/archieveIcon.svg";
import downloadIcon from "../../../assets/DownloadWhite.svg";
import reportView from "../../../assets/reportView.svg";
import { MdClose } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import reportPdfDisplayStore from "../../../store/reportPdfDisplayStore";


const MyReports = () => {
  const [reports, setReports] = useState([
    {
      reportName: "Report Name 1",
      Date: "31ST AUGUST 2024",
      status: "In Progress",
      statusId: "1",
    },
    {
      reportName: "Report Name 2",
      Date: "31ST AUGUST 2024",
      status: "Completed",
      statusId: "2",
    },
    {
      reportName: "Report Name 3",
      Date: "31ST AUGUST 2024",
      status: "Completed",
      statusId: "3",
    },
    {
      reportName: "Report Name 4",
      Date: "31ST AUGUST 2024",
      status: "Completed",
      statusId: "4",
    },
    {
      reportName: "Report Name 5",
      Date: "31ST AUGUST 2024",
      status: "Archive",
      statusId: "5",
    },
    {
      reportName: "Report Name 6",
      Date: "31ST AUGUST 2024",
      status: "Archive",
      statusId: "6",
    },
    {
      reportName: "Report Name 7",
      Date: "31ST AUGUST 2024",
      status: "Archive",
      statusId: "7",
    },
  ]);

  const setreportPdfDisplayName = reportPdfDisplayStore(
    (state) => state.setreportPdfDisplayName
  );

  const [previewPopup, setPreviewPopup] = useState(false);
  const [popUpReportData, setPopUpReportData] = useState<any>({});

  const openPreviewPopup = (report: any) => {
    setPopUpReportData(report); // Set the selected report data
    setPreviewPopup(true); // Open the popup
  };

  const closePreviewPopup = () => {
    setPreviewPopup(false); // Close the popup
    setPopUpReportData({}); // Reset the popup data
  };

  const handleMoveToArchive = (statusId: string) => {
    setReports((prevReports) =>
      prevReports.map((report) =>
        report.statusId === statusId ? { ...report, status: "Archive" } : report
      )
    );
  };

  const renderReportsByStatus = (status: string) => {
    const filteredReports = reports.filter((report) => report.status === status);
    return filteredReports.map((report) => (
      <div className={styles.statusElement} key={report.statusId}>
        <div className={styles.statusleftcont}>
          <Image
            src={defaultImg}
            width={80}
            height={50}
            alt="Uploaded image"
            style={{ borderRadius: "8px" }}
          />
          <div className={styles.customtxt}>
            <p className={styles.headtxt}>{report.reportName}</p>
            <p className={styles.bodytxt}>{report.Date}</p>
          </div>
        </div>
        <div className={styles.Imgbox}>
          {status === "In Progress" && (
            <div className={styles.clickbtn} onClick={()=>{setreportPdfDisplayName(report.reportName);console.log("rohit")}}>
              <Image src={globe} width={16} height={16} alt="none" />
              <p>View on web</p>
            </div>
          )}
          {status === "Completed" && (
            <div
              className={styles.clickbtn}
              onClick={() => handleMoveToArchive(report.statusId)}
              style={{ cursor: "pointer" }}
            >
              <Image src={Archieve} width={16} height={16} alt="none" />
              <p>Move to Archive</p>
            </div>
          )}
          <div
            className={styles.uploadImgbtn}
            onClick={() => openPreviewPopup(report)} // Pass the report data
            style={{ cursor: "pointer" }}
          >
            <Image src={reportView} width={14} height={14} alt="none" />
            <p>Preview Image</p>
          </div>
          {status === "In Progress" && (
            <button className={styles.saveImgbtn} style={{ cursor: "pointer" }}>
              Save Report
            </button>
          )}
          {(status === "Completed" || status === "Archive") && (
            <button className={styles.saveImgbtn} style={{ cursor: "pointer" }}>
              <Image src={downloadIcon} width={14} height={14} alt="none" />
              <p>Download</p>
            </button>
          )}
        </div>
      </div>
    ));
  };

  return (
    <div className={styles.reportcont}>
      <div className={styles.reportHeader}>
        <div className={styles.textualcontent}>
          <p className={styles.headertxt}>My Reports</p>
          <p className={styles.txtbody}>
            Monitor the history of your company&apos;s ESG Progress Reports here.
            In this section, you can track the progress of your reports and
            download them.
          </p>
        </div>
      </div>

      <div className={styles.reportbody}>
        <div className={styles.statuscont}>
          <p className={styles.statusHeader}>In Progress</p>
          {renderReportsByStatus("In Progress")}
        </div>
        <div className={styles.statuscont}>
          <p className={styles.statusHeader}>Completed</p>
          {renderReportsByStatus("Completed")}
        </div>
        <div className={styles.statuscont1}>
          <p className={styles.statusHeader}>Archive</p>
          {renderReportsByStatus("Archive")}
        </div>
      </div>

      {previewPopup && (
        <div className={styles.container}>
          <div className={styles.boxCont1}>
            <div className={styles.subBox}>
              <div className={styles.closeheader}>
                <MdClose
                  className={styles.closeIcon}
                  onClick={closePreviewPopup}
                />
              </div>
              <h2 className={styles.title}>Report Preview</h2>
              <p className={styles.description}>
                   {popUpReportData.reportName}
              </p>
            </div>
            <div className={styles.popUpImgContbox}>
              <p>pdf will be shown here</p>
              <div className={styles.pdfpagination}>
                <FaAngleLeft className={styles.paginationIcon}/>
                <p>01 / 99</p>
                <FaAngleRight className={styles.paginationIcon2}/>
              </div>
            </div>

            <div className={styles.btncontainer}>
            <button className={styles.button} onClick={closePreviewPopup}>
              Go Back
            </button>
            <button className={styles.saveImgbtn} style={{ cursor: "pointer" }}>
              <Image src={downloadIcon} width={14} height={14} alt="none" />
              <p>Download</p>
            </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyReports;
