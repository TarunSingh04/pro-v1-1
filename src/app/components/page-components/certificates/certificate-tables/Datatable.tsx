import React, { useState, useMemo } from "react";
import styles from "./styles.module.scss";
import certificate_3rd from "../../../utilities/certificate_3rd";
import certificate_ISO from "../../../utilities/certificate_Iso";
import certificate_others from "../../../utilities/certificate_others";
import Image from "next/image";
// import DragFile from "../../onboarding-questionaires/questionaire-content/drag-and-drop/Dragfile";
import certificate_datas from "../../../utilities/certificate_data";
import Select from "react-select";
import ScoreDot from "../../../assets/scoredot.svg";

const DataTable = () => {
  const [certificates, setcertificates] = useState<any>([]);
  const [selectedFiles, setSelectedFiles] = useState<any>([]);
  const [certificate_data, setcertificate_data] = useState([
    ...certificate_ISO,
    ...certificate_3rd,
    ...certificate_others,
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [selectedCertificate, setselectedCertificate] = useState<any>(null);

  const handleCardClick = () => {
    setselectedCertificate(1);
  };

  const closePopup = () => {
    setselectedCertificate(null);
  };

  const itemsPerPage = 10;

  const filteredData = useMemo(() => {
    return certificate_data.filter((item) =>
      item.Name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [certificate_data, searchTerm]);

  const sortedData = useMemo(() => {
    if (!sortColumn) return filteredData;

    return [...filteredData].sort((a: any, b: any) => {
      if (a[sortColumn] < b[sortColumn])
        return sortDirection === "asc" ? -1 : 1;
      if (a[sortColumn] > b[sortColumn])
        return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortColumn, sortDirection]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (column: any) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortColumn(column);
      setSortDirection("asc");
    }
  };
  const [file, setFile] = useState<any>(null);
  const onFileChange = (files: any) => {
    console.log(files);
    setFile(files);
  };

  const getstatusbgcol = (status: string) => {
    if (status === "COMPLETED") {
      return "#E7FFFC";
    } else if (status === "NOT STARTED") {
      return "#FFFAE5";
    } else {
      return "#FFF6E9";
    }
  };

  const getstatuscol = (status: string) => {
    if (status === "COMPLETED") {
      return "#017C2E";
    } else if (status === "NOT STARTED") {
      return "#FF9951";
    } else {
      return "#E8B500";
    }
  };

  const getprioritybgcol = (priority: string) => {
    if (priority === "HIGH") {
      return "#FFE9EC";
    } else if (priority === "MEDIUM") {
      return "#FFFAE5";
    } else {
      return "#FFFAE5";
    }
  };

  const getprioritycol = (priority: string) => {
    if (priority === "HIGH") {
      return "#FF5151";
    } else if (priority === "MEDIUM") {
      return "#E8B500";
    } else {
      return "#E8B500";
    }
  };

  return (
    <div className={styles.Tablecontainer}>
      <div className={styles.Tablesubcontainer}>
        <div className={styles.dataTableContainer}>
          <table className={styles.dataTable}>
            <thead className={styles.theadUtility}>
              <tr>
                <th>Certificate Name</th>
                <th>Category</th>
                <th>Country</th>
                <th>Sector</th>
                <th>Focus(ESG)</th>
                <th>Status</th>
                <th>Priority</th>
                <th>Completion Date</th>
                <th>Renewal Due Date</th>
                {/* <th onClick={() => handleSort('eScore')} className={styles.sortable}>
              E {sortColumn === 'eScore' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('sScore')} className={styles.sortable}>
              S {sortColumn === 'sScore' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('gScore')} className={styles.sortable}>
              G {sortColumn === 'gScore' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th>
            <th onClick={() => handleSort('Price')} className={styles.sortable}>
              Price {sortColumn === 'Price' && (sortDirection === 'asc' ? '▲' : '▼')}
            </th> */}
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item: any, index: any) => (
                <tr key={index} className={styles.tableRows}>
                  <td className={styles.navigateLink}>{item.Name}</td>
                  <td className={styles.navigateLink}>ISO</td>
                  <td className={styles.navigateLink}>France</td>
                  <td className={styles.navigateLink}>Sector</td>
                  <td className={styles.navigateLink2}>
                    <p>
                      E: <span>70%</span>{" "}
                      <Image
                        src={ScoreDot}
                        width={6}
                        height={6}
                        alt="none"
                        className={styles.DotIcon}
                      />{" "}
                      S:<span>70%</span>{" "}
                      <Image
                        src={ScoreDot}
                        width={6}
                        height={6}
                        alt="none"
                        className={styles.DotIcon}
                      />{" "}
                      G:<span>70%</span>
                    </p>
                  </td>
                  <td className={styles.navigateLink3}>
                    <span
                      style={{
                        background: getstatusbgcol("COMPLETED"),
                        color: getstatuscol("COMPLETED"),
                      }}
                      className={styles.status}
                    >
                      COMPLETED
                    </span>
                  </td>
                  <td className={styles.navigateLink3}>
                    <span
                      style={{
                        background: getprioritybgcol("HIGH"),
                        color: getprioritycol("HIGH"),
                      }}
                      className={styles.status}
                    >
                      HIGH
                    </span>
                  </td>
                  <td className={styles.navigateLink}>MM/DD/YYYY</td>
                  <td className={styles.navigateLink}>MM/DD/YYYY</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={styles.prevbtn}
        >
          <span>{"<"}</span> PREVIOUS
        </button>
        <span className={styles.pageDisplay}>
          {currentPage}/{totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={styles.nextbtn}
        >
          NEXT PAGE <span>{">"}</span>
        </button>
      </div>
    </div>
  );
};

export default DataTable;
