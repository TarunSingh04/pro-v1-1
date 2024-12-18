import React, { useState, useMemo } from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';
import verifiedLogo from "../../../assets/Verified.svg";
import pendingLogo from "../../../assets/Pending.svg";
import Dot from "../../../assets/scoredot.svg";
import LocationImg from "../../../assets/locationImg.svg";

const Sustainability_data = [
  {
    publicationDate: "26/07/2024",
    validUntil: "26/07/2030",
    score: "C",
    overallScore: 60
  },
  {
    publicationDate: "29/20/2006",
    validUntil: "28/11/2010",
    score: "A",
    overallScore: 75
  }
]

const Sustainabilitydatatable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortColumn, setSortColumn] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');

  const itemsPerPage = 10;

  const sortedData = useMemo(() => {
    if (!sortColumn) return Sustainability_data;

    return [...Sustainability_data].sort((a:any, b:any) => {
      if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
      if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
      return 0;
    });
  }, [sortColumn, sortDirection]);

  const paginatedData = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedData.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedData, currentPage]);

  const totalPages = Math.ceil(sortedData.length / itemsPerPage);

  const handleSort = (column:any) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  return (
    <div className="Tablecontainer">
      <div className={styles.dataTableContainer}>
      <div className={styles.companyHeader}>
        <p>Apple</p>
        <Image src={Dot} width={6} height={6} alt="none" className={styles.dotIcon}/>
        <div className={styles.Location}>
         <Image src={LocationImg} width={16} height={16} alt="none"/>
         <p>GERMANY</p>
        </div>
      </div>
        <table className={styles.dataTable}>
          <thead className={styles.theadUtility}>
            <tr>
              <th>Badge</th>
              <th onClick={() => handleSort('publicationDate')} className={styles.sortable}>
                Publication {sortColumn === 'publicationDate' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('validUntil')} className={styles.sortable}>
                Valid Until {sortColumn === 'validUntil' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('score')} className={styles.sortable}>
                Score {sortColumn === 'score' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
              <th onClick={() => handleSort('overallScore')} className={styles.sortable}>
                Overall% {sortColumn === 'overallScore' && (sortDirection === 'asc' ? '▲' : '▼')}
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((item:any, index:any) => (
              <tr key={index} className={styles.tableRows}>
                <td><Image src={item.overallScore>74 ? verifiedLogo: pendingLogo} width={120} height={120} alt='none'/></td>
                <td>{item.publicationDate}</td>
                <td>{item.validUntil}</td>
                <td>{item.score}</td>
                <td>{item.overallScore}%</td>
              </tr>
            ))}
          </tbody>
        </table>

        
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={styles.prevbtn}
        >
          <span>{"<"}</span> PREVIOUS 
        </button>
        <span className={styles.pageDisplay}>{currentPage}/{totalPages}</span>
        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={styles.nextbtn}
        >
           NEXT PAGE <span>{">"}</span>
        </button>
      </div>
      </div>
    </div>
  );
};

export default Sustainabilitydatatable;
