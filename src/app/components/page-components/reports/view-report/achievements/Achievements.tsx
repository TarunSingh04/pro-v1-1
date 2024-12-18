import React from 'react';
import styles from "./styles.module.scss";
import defaultImg from "../../../../assets/companydefaultImg.svg";
import Image from 'next/image';
import certficateIcon from "../../../../assets/basicBage.svg";
import { DotIcon } from 'lucide-react';
import { GoDotFill } from 'react-icons/go';

const Achievements = () => {
  const CertificatesData = [
    {
      certficateName:"Certificate Name",
      certificateDesc:"Lorem ipsum dolor sit amet consectetur. Consectetur non a vestibulum tellus odio.",
      certificateImage:defaultImg,
    },
    {
      certficateName:"Certificate Name",
      certificateDesc:"Lorem ipsum dolor sit amet consectetur. Consectetur non a vestibulum tellus odio.",
      certificateImage:defaultImg,
    },
    {
      certficateName:"Certificate Name",
      certificateDesc:"Lorem ipsum dolor sit amet consectetur. Consectetur non a vestibulum tellus odio.",
      certificateImage:defaultImg,
    },
    {
      certficateName:"Certificate Name",
      certificateDesc:"Lorem ipsum dolor sit amet consectetur. Consectetur non a vestibulum tellus odio.",
      certificateImage:defaultImg,
    }
  ]
  return (
    <div className={styles.Achievements}>
       <div className={styles.taskcont}>
        <div className={styles.taskHeader}>
          <p className={styles.headtxt}>
          Certificates Obtained
          </p>
        </div>
        <p className={styles.desctxt}>
        Lorem ipsum dolor sit amet consectetur. Sit velit semper a nec porta nullam in accumsan senectus. Elit semper nibh duis pretium. Etiam velit tellus penatibus lacus vehicula. Faucibus varius nulla purus proin. Tortor nulla blandit tempus vitae vestibulum massa convallis eget.
          </p>
          <div className={styles.archievementscont}>
          {
            CertificatesData.map((items,index)=>{
              return(
                <div className={styles.certificateBox} key={index}>
                  <Image src={items.certificateImage} width={225} height={225} alt='none'/>
                  <div className={styles.titlecont}>
                  <div className={styles.textInfo}>
                  <p className={styles.certicatetitle}>
                    {items.certficateName}
                  </p>
                  <p className={styles.certificatedesc}>
                    <GoDotFill className={styles.dotIcon} style={{fontSize:"18px"}}/> 
                    <span>{items.certificateDesc}</span>
                  </p>
                  </div>
                  <Image src={certficateIcon} width={24} height={24}alt='none'/>
                  </div>
                </div>
              )
            })
          }
        </div>
        </div>


    </div>
  )
}

export default Achievements