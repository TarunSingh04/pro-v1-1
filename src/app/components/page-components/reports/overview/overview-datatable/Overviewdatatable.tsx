import React, { useMemo, useState } from 'react';
import styles from "./styles.module.scss";
import { GoDotFill } from 'react-icons/go';


const Metrics_data = [
    {
      sectionName: "Environmental",
      sectionNameColor: "#46AD38",
      sectionDotColor: "#B71212",
      currentScore: "75",
      actionItems:1,
      status:"To Do",
      keyMeasures:["This is a key measure","This is a key measure"]
    },
    {
      sectionName: "Social",
      sectionNameColor: "#D2871F",
      sectionDotColor: "#F78B1F",
      currentScore: "75",
      actionItems:1,
      status:"IN PROGRESS",
      keyMeasures:["This is a key measure","This is a key measure"]
    },
    {
      sectionName: "Governance",
      sectionNameColor: "#285CD5",
      sectionDotColor: "#12B76A",
      currentScore: "75",
      actionItems:1,
      status:"COMPLETED",
      keyMeasures:["This is a key measure","This is a key measure"]
    }

  ]

const Overviewdatatable = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortColumn, setSortColumn] = useState('');
    const [sortDirection, setSortDirection] = useState('asc');
  
    const itemsPerPage = 10;
  
    const sortedData = useMemo(() => {
      if (!sortColumn) return Metrics_data;
  
      return [...Metrics_data].sort((a:any, b:any) => {
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
          <div className={styles.tableTag}><p>ESG Progress Report & Action Plan Insights</p></div>
          <table className={styles.dataTable}>
            <thead className={styles.theadUtility}>
              <tr>
                <th>Section</th>
                <th onClick={() => handleSort('publicationDate')} className={styles.sortable}>
                  Current Score 
                </th>
                <th onClick={() => handleSort('validUntil')} className={styles.sortable}>
                  Key Measures 
                </th>
                <th onClick={() => handleSort('score')} className={styles.sortable}>
                  Action Items 
                </th>
                <th onClick={() => handleSort('overallScore')} className={styles.sortable}>
                  Status 
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.map((item:any, index:any) => (
                <tr key={index} className={styles.tableRows}>
                  <td style={{color:item.sectionNameColor,fontWeight:500}}>{item.sectionName}</td>
                  <td><span>{item.currentScore}</span> / 100</td>
                  <td>
                  {
                    item.keyMeasures.map((meaureitem:any,idx:any)=>{
                      return(
                          <li key={idx}>{meaureitem}</li>
                      )
                    })
                  }
                  </td>
                  <td><span>{item.actionItems}</span></td>
                  <td className={styles.statusData}> <GoDotFill style={{color:item.sectionDotColor,marginTop: "10px"}}/> <p>{item.status}</p></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default Overviewdatatable