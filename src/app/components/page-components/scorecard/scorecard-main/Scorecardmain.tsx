// import React, { useState } from 'react';
// import styles from "./styles.module.scss";
// import Maincard from './main-card/Maincard';
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
// import DownloadIcon from "../../../assets/downloadIcon.svg";
// import Image from 'next/image';

// const Scorecardmain = () => {
//   const [companyName, setcompanyName] = useState("Apple");

//   const downloadPDF = () => {
//     const sectionIds = ["section1", "section2", "section3"];
//     const pptWidth = 508; // Width in mm for PowerPoint dimensions (16:9 ratio)
//     const pptHeight = 286; // Height in mm for PowerPoint dimensions

//     const pdf = new jsPDF("l", "mm", [pptWidth, pptHeight]);

//     const renderSectionToPDF = async (id:any, isFirstPage:any) => {
//       const section = document.getElementById(id);
//       if (section) {
//         const canvas = await html2canvas(section, { scale: 2 });
//         const imgData = canvas.toDataURL("image/png");

//         // Set the page size to PowerPoint dimensions for every page
//         if (!isFirstPage) {
//           pdf.addPage([pptWidth, pptHeight]);
//         }

//         // Add image to PDF with the consistent PowerPoint page size
//         pdf.addImage(imgData, "PNG", 0, 0, pptWidth, pptHeight);
//       } else {
//         console.error(`Element with id '${id}' not found.`);
//       }
//     };

//     // Render sections in order
//     const renderPDF = async () => {
//       await renderSectionToPDF(sectionIds[0], true);  // First page
//       await renderSectionToPDF(sectionIds[1], false); // Middle page
//       await renderSectionToPDF(sectionIds[2], false); // Last page
//       pdf.save(`${companyName}-scorecard.pdf`);
//     };

//     renderPDF();
//   };

//   return (
//     <div className={styles.Scorecardmain}>
//       <div className={styles.downloadbtn}>
//         <button onClick={downloadPDF} className={styles.downloadButton}>
//           <Image src={DownloadIcon} height={16} width={16} alt='none' className={styles.downloadIcon}/>
//           Download as PDF
//         </button>
//       </div>
//       <Maincard/>
//     </div>
//   );
// };

// export default Scorecardmain;


import React, { useState, useEffect } from 'react';
import styles from "./styles.module.scss";
import Maincard from './main-card/Maincard';
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DownloadIcon from "../../../assets/downloadIcon.svg";
import Image from 'next/image';

const Scorecardmain = () => {
  const [companyName, setcompanyName] = useState("Apple");
  const [mainCardImageSrc, setMainCardImageSrc] = useState<string | null>(null);
  const [fileInput, setFileInput] = useState<File | null>(null);

  useEffect(() => {
    const renderMainCardAsImage = async () => {
      const mainCardElement = document.getElementById("maincard");
      if (mainCardElement) {
        const canvas = await html2canvas(mainCardElement, { scale: 2 });
        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], `${companyName}-scorecard.png`, { type: "image/png" });
            setFileInput(file);
            setMainCardImageSrc(URL.createObjectURL(file)); // Set URL for rendering the image
          }
        }, "image/png");
      }
    };
    renderMainCardAsImage();
  }, [companyName]);

  const downloadPDF = () => {
    const sectionIds = ["section1", "section2", "section3"];
    const pptWidth = 508; // Width in mm for PowerPoint dimensions (16:9 ratio)
    const pptHeight = 286; // Height in mm for PowerPoint dimensions

    const pdf = new jsPDF("l", "mm", [pptWidth, pptHeight]);

    const renderSectionToPDF = async (id:any, isFirstPage:any) => {
      const section = document.getElementById(id);
      if (section) {
        const canvas = await html2canvas(section, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");

        // Set the page size to PowerPoint dimensions for every page
        if (!isFirstPage) {
          pdf.addPage([pptWidth, pptHeight]);
        }

        // Add image to PDF with the consistent PowerPoint page size
        pdf.addImage(imgData, "PNG", 0, 0, pptWidth, pptHeight);
      } else {
        console.error(`Element with id '${id}' not found.`);
      }
    };

    // Render sections in order
    const renderPDF = async () => {
      await renderSectionToPDF(sectionIds[0], true);  // First page
      await renderSectionToPDF(sectionIds[1], false); // Middle page
      await renderSectionToPDF(sectionIds[2], false); // Last page
      pdf.save(`${companyName}-scorecard.pdf`);
    };

    renderPDF();
  };

  return (
    <div className={styles.Scorecardmain}>
      <div className={styles.downloadbtn}>
        <button onClick={downloadPDF} className={styles.downloadButton}>
          <Image src={DownloadIcon} height={16} width={16} alt="Download icon" className={styles.downloadIcon} />
          Download as PDF
        </button>
      </div>

      {/* Hidden file input to hold the Maincard image */}
      <input
        type="file"
        style={{ display: 'none' }}
        accept="image/png"
        // Use File object as a fake value setter since we can't actually set the file input value directly
        onChange={() => {}}
      />

        <div style={{width:"50%",overflow:"hidden",position:'absolute',zIndex:"-10000000",left:"-10000000000"}}>
          <Maincard />
        </div>

      {/* Render captured Maincard image */}
      {mainCardImageSrc ? (
        <Image
          src={mainCardImageSrc}
          alt={`${companyName} Scorecard`}
          layout="responsive"
          width={100}
          height={100}
          className={styles.mainCardImage}
        />
      ) : (
        <div id="maincard">
          <Maincard />
        </div>
      )}
    </div>
  );
};

export default Scorecardmain;
