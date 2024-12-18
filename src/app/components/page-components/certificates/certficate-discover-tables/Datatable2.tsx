import React, { useState, useMemo } from "react";
import styles from "./styles.module.scss";
import utility_section_data from "../../../utilities/utility_section_data";
import linksTab from "../../../assets/linksbtn.svg";
import Image from "next/image";
import DataTableLogo from "../../../assets/dataTablelogo.svg";
import Dot from "../../../assets/dot.svg";
import { MdClose } from "react-icons/md";
import LinkPdfImg from "../../../assets/pdfImg.svg";

const DataTable2 = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");

  const itemsPerPage = 10;
  const filteredData = useMemo(() => {
    return utility_section_data.filter(
      (item) =>
        item.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

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

  const getbackgroundColor = (rating: any) => {
    if (rating === "A") {
      return "#6F8C60";
    } else if (rating === "B") {
      return "#A6C496";
    } else if (rating === "C") {
      return "#F1D02C";
    } else if (rating === "D") {
      return "#F18E2C";
    } else {
      return "#F25555";
    }
  };

  return (
    <div className={styles.dataTableContainer}>
      <table className={styles.dataTable}>
        <thead className={styles.theadUtility}>
          <tr>
            <th>Certificates</th>
            <th>Industry</th>
            <th>Certificate Name</th>
            <th
              onClick={() => handleSort("rating")}
              className={styles.sortable}
            >
              Country{" "}
              {sortColumn === "rating" && (sortDirection === "asc" ? "▲" : "▼")}
            </th>
            <th
              onClick={() => handleSort("revenues")}
              className={styles.sortable}
            >
              Website
            </th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item: any, index: any) => (
            <tr key={index} className={styles.tableRows}>
              <td className={styles.companyNameBolder}>
                <Image src={DataTableLogo} width={40} height={40} alt="none" />
                <p></p>Sample supplier
              </td>
              <td className={styles.navigateLink}>Industry</td>
              <td className={styles.navigateLink3}>Sample name</td>
              <td className={styles.navigateLink}>France</td>
              <td className={styles.navigateLink}>
                <a
                  href={item.websiteURL}
                  target="_blank"
                  className={styles.utilityTableLinks}
                >
                  <p>impakter.com</p>
                  <Image src={linksTab} width={12} height={12} alt="none" />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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

export default DataTable2;
