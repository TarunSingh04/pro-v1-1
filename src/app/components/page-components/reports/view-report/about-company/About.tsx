import React from 'react';
import styles from "./styles.module.scss";
import Aboutreport from "../../../../assets/AboutReport.svg";
import Image from 'next/image';
import TreeIcon from "../../../../assets/TreeIcon.svg";
import CloudIcon from "../../../../assets/cloudIcon.svg";
import footerDots from "../../../../assets/footerDots.svg";
import menuIcon from "../../../../assets/aboutMenuIcon.svg";
import defaultImg from "../../../../assets/uitilityImgBgm.svg";
import Dot from "../../../../assets/dot.svg";
import Location from "../../../../assets/locationBlue.svg";
import Badge from "../../../../assets/orangeBadge.svg";

const About = () => {
  const ImpactData = [
    {
      ImpactIcon: <div className={styles.ImpactIcon} style={{background:"#E7FFFC"}}><Image src={TreeIcon} width={27} height={22} alt='none'/></div>,
      ImpactName:"Impact",
      Impactdata:
      <ul>
        <li>Trees Planted</li>
        <li>Goal : 100,000 of 120,000</li>
        <li>That&apos;s equivalent of 250 football pitches</li>
      </ul>
    },
    {
      ImpactIcon:<div className={styles.ImpactIcon} style={{background:"#FFFAE5"}}><Image src={CloudIcon} width={27} height={26} alt='none'/></div>,
      ImpactName:"Impact",
      Impactdata: 
      <ul>
        <li>CO2 Avoided</li>
        <li>Goal : 100,000 of 120,000</li>
        <li>That&apos;s equivalent weight of 9 adult blue whales</li>
      </ul>
    }
  ]

  const utilitiesData = [
    {
      score:"A",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"B",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"B",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
  ]

  const linkedBrandData = [
    {
      score:"A",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"B",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"B",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"F",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"D",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"C",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"A",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"B",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"B",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"F",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"D",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"C",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"A",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"B",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"B",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"F",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"D",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"C",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"A",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"B",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"B",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"F",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"D",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
    {
      score:"C",
      utilityImage: <Image src={defaultImg} width={180} height={180} alt='none' className={styles.utilitieImg}/>,
      utilityName: "Company Name",
      utilityDomain: "Company domain"
    },
  ]
  const getbackgroundColor = (rating:any)=>{
    if(rating==="A"){
      return "#6F8C60";
    }
    else if(rating==="B"){
      return "#A6C496";
    }
    else if(rating==="C"){
      return "#F1D02C";
    } 
    else if(rating==="D"){
      return "#F18E2C";
    } 
    else{
      return "#F25555";
    }
    }
  return (
    <div className={styles.About}>
      <div className={styles.Aboutcont}>
        <div className={styles.aboutleftcont}>
          <p className={styles.header}>Description</p>
          <p className={styles.txtbody}>Lorem ipsum dolor sit amet consectetur. Ullamcorper nisl turpis consectetur gravida neque blandit quam consequat lacus. Amet augue eget ultricies ultricies diam venenatis nec pulvinar. Viverra amet penatibus volutpat nisi mattis. Volutpat morbi facilisis at elementum semper auctor quam pulvinar nibh. Odio tempus tortor quis urna habitasse. Id amet morbi ut justo sagittis. </p>
          <p className={styles.txtbody}>Facilisi nisl in mi ut elementum. Pulvinar eget sit scelerisque non. Ultricies maecenas aliquet ut auctor suscipit quis.</p>
        </div>
        {
          ImpactData.map((ImpactItems,index)=>{
            return(
              <div className={styles.aboutrightcont} key={index}>
                <div className={styles.box1}>
                 {ImpactItems.ImpactIcon}
                  <div className={styles.ImpactHeader}>{ImpactItems.ImpactName}</div>
                  <div className={styles.Impactbody}>{ImpactItems.Impactdata}</div>
                </div>
              </div>
            )
          })
        }
        
      </div>
      <div className={styles.Aboutcont}>
        <div className={styles.aboutleftcont1}>
          <div>
          <p className={styles.header}>Company Activity</p>
          <p className={styles.txtbody}>Lorem ipsum dolor sit amet consectetur. Ullamcorper nisl turpis consectetur gravida neque blandit quam consequat lacus. Amet augue eget ultricies ultricies diam venenatis nec pulvinar. Viverra amet penatibus volutpat nisi mattis. Volutpat morbi facilisis</p>
          <p className={styles.txtbody1}>Amet augue eget ultricies ultricies diam venenatis nec pulvinar. Viverra amet penatibus volutpat nisi mattis. Volutpat morbi facilisis</p>
          </div>
           <Image src={footerDots} width={50} height={24} alt='none' className={styles.footerIcons}/>
        </div>
        <div className={styles.aboutrightcont1}>
          <div>
          <p className={styles.header}>Company Sustainability Activity</p>
          <p className={styles.txtbody}>Lorem ipsum dolor sit amet consectetur. Ullamcorper nisl turpis consectetur gravida neque blandit quam consequat lacus. Amet augue eget ultricies ultricies diam venenatis nec pulvinar. Viverra amet penatibus volutpat nisi mattis. Volutpat morbi facilisis</p>
          <p className={styles.txtbody1}>Amet augue eget ultricies ultricies diam venenatis nec pulvinar. Viverra amet penatibus volutpat nisi mattis. Volutpat morbi facilisis</p>
          </div>
           <Image src={footerDots} width={50} height={24} alt='none' className={styles.footerIcons2}/>
        </div>
      </div>

      <div className={styles.Aboutcont}>
        <div className={styles.aboutleftcont2}>
          <div className={styles.ImpactIcon} style={{background:"#F1F8FF"}}><Image src={menuIcon} width={27} height={22} alt='none'/></div>,
          <div>
             <p className={styles.header}>Utilities <span>Facilisi nisl in mi ut elementum. Pulvinar eget sit scelerisque non. Ultricies maecenas aliquet ut auctor suscipit quis.</span></p>
          </div>
          <div className={styles.utilitiescont}>
          {
            utilitiesData.map((items,index)=>{
              return(
                <div className={styles.utilitiesBox} key={index}>
                  {items.utilityImage}
                  <p className={styles.companyName}>{items.utilityName}</p>
                  <p className={styles.companyDomain}>{items.utilityDomain}</p>
                  <div className={styles.scoredisplay} style={{background:getbackgroundColor(items.score)}}>
                    <p>{items.score}</p>
                    <Image src={Dot} width={5} height={5} alt='none'/>
                  </div>
                </div>
              )
            })
          }
          </div>

        </div>
        <div className={styles.aboutrightcont2}>
          <div className={styles.rightbox1}>
          <div className={styles.ImpactIcon} style={{background:"#F1F8FF"}}><Image src={Location} width={20} height={24} alt='none'/></div>
          <div className={styles.contentInfoBody}>
            <div className={styles.contentHeader}>Contact</div>
            <div className={styles.contentTxtBody}>1234, Park avenue, San Jose, CA 11223344, United States</div>
          </div>
          </div>
          <div className={styles.rightbox2}>
          <div className={styles.ImpactIcon} style={{background:"#FFF6E9"}}><Image src={Badge} width={24} height={24} alt='none'/></div>
          <div className={styles.contentInfoBody}>
            <div className={styles.contentHeader}>Awards</div>
            <div className={styles.contentTxtBody}>NCMEC&apos;s 2019 hope award</div>
          </div>
          </div>
        </div>
      </div>

      <div className={styles.Aboutcont}>
        <div className={styles.aboutBoxfootcont}>
        <div>
             <p className={styles.header}>Linked brands <span>Facilisi nisl in mi ut elementum. Pulvinar eget sit scelerisque non. Ultricies maecenas aliquet ut auctor suscipit quis.</span></p>
          </div>
          <div className={styles.linkedBrandcont}>
          {
            linkedBrandData.map((items,index)=>{
              return(
                <div className={styles.utilitiesBox} key={index}>
                  {items.utilityImage}
                  <p className={styles.companyName}>{items.utilityName}</p>
                  <p className={styles.companyDomain}>{items.utilityDomain}</p>
                  <div className={styles.scoredisplay} style={{background:getbackgroundColor(items.score)}}>
                    <p>{items.score}</p>
                    <Image src={Dot} width={5} height={5} alt='none'/>
                  </div>
                </div>
              )
            })
          }
          </div>


        </div>
      </div>

    </div>
  )
}

export default About