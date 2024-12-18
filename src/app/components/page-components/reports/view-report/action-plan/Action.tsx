import React, { useState } from 'react';
import styles from "./styles.module.scss";
import { BsPlus, BsDash } from 'react-icons/bs';

interface ESGItem {
  ESGtitle: string;
  ESGdescription: string;
  ESGId: number;
}

const Action: React.FC = () => {
  const ESGData: ESGItem[] = [
    {
      ESGtitle: "Environmental Measures",
      ESGdescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum qui nesciunt perspiciatis ullam repellat quis explicabo consequuntur cum! Expedita quo impedit sapiente omnis reiciendis quasi distinctio magnam nulla provident fuga harum enim, ullam recusandae repellat sint! Consectetur, neque quia. Vitae enim dolore sequi sed ea? Architecto ipsam vero, corporis incidunt quas eveniet numquam quaerat recusandae cum similique libero, facere commodi tempore iusto soluta doloremque aspernatur mollitia voluptatum, iure molestias debitis consequatur maxime id! Eius eaque odio laudantium atque sunt!",
      ESGId: 1,
    },
    {
      ESGtitle: "Social Measures",
      ESGdescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum qui nesciunt perspiciatis ullam repellat quis explicabo consequuntur cum! Expedita quo impedit sapiente omnis reiciendis quasi distinctio magnam nulla provident fuga harum enim, ullam recusandae repellat sint! Consectetur, neque quia. Vitae enim dolore sequi sed ea? Architecto ipsam vero, corporis incidunt quas eveniet numquam quaerat recusandae cum similique libero, facere commodi tempore iusto soluta doloremque aspernatur mollitia voluptatum, iure molestias debitis consequatur maxime id! Eius eaque odio laudantium atque sunt!",
      ESGId: 2,
    },
    {
      ESGtitle: "Governance Measures",
      ESGdescription:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae laborum qui nesciunt perspiciatis ullam repellat quis explicabo consequuntur cum! Expedita quo impedit sapiente omnis reiciendis quasi distinctio magnam nulla provident fuga harum enim, ullam recusandae repellat sint! Consectetur, neque quia. Vitae enim dolore sequi sed ea? Architecto ipsam vero, corporis incidunt quas eveniet numquam quaerat recusandae cum similique libero, facere commodi tempore iusto soluta doloremque aspernatur mollitia voluptatum, iure molestias debitis consequatur maxime id! Eius eaque odio laudantium atque sunt!",
      ESGId: 3,
    },
  ];

  // State to manage the open state of each item
  const [openItems, setOpenItems] = useState<Record<number, boolean>>({});

  const toggleItem = (index: number): void => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle the specific item's state
    }));
  };

  return (
    <div className={styles.Actions}>
      <div className={styles.taskcont}>
        <div className={styles.taskHeader}>
          <p className={styles.headtxt}>
            Action Plan: Recommended Measures to Achieve Sustainability in the Most Cost Effective Way
          </p>
          <p className={styles.desctxt}>
            The table below provides a description of suggested, cost effective measures Impakter Pro recommends on the
            basis of the analysis and findings reported in the preceding section. They are presented here in a descending
            order of priority and separated for each category, E, S and G, with the most important ones on top of the list:
          </p>
        </div>
        <li className={styles.headertitle}>Recommended Measures (descending order of priority)</li>
        <div className={styles.actionslist}>
          {ESGData.map((item, index) => (
            <div className={styles.measuresBox} key={item.ESGId}>
              <div
                className={styles.measureBoxHeader}
                onClick={() => toggleItem(index)}
                style={{ cursor: "pointer" }}
              >
                <p>{item.ESGtitle}</p>
                {openItems[index] ? (
                  <BsDash className={styles.measuresIcon} />
                ) : (
                  <BsPlus className={styles.measuresIcon} />
                )}
              </div>
              {openItems[index] && (
                <>
                  <div className={styles.dividerline}></div>
                  <div className={styles.measuredescription}>{item.ESGdescription}</div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Action;
