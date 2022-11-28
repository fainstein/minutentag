import React from "react";
import Integrity from "../Media/People/Integrity.png";
import Ownership from "../Media/People/Ownership.png";
import Flexibility from "../Media/People/Flexibility.png";
import Innovation from "../Media/People/Innovation.png";
import styles from "./People.module.css";

const PEOPLE_CONTENT = [
  {
    icon: <img src={Integrity} alt="integrity-img" />,
    title: "Integrity",
    subtitle: "'Always do the right thing'",
    description:
      "Customer relationship is our greatest asset. We know that working ethically, responsibly and respectfully.",
    button: "Learn more",
  },
  {
    icon: <img src={Ownership} alt="ownership-img" />,
    title: "Ownership",
    description:
      "We are accountable during every step of the process. We devote our complete dedication and knowledge to arrive at consistent efficient end to end solutions.",
    button: "Learn more",
  },
  {
    icon: <img src={Flexibility} alt="flexibility-img" />,
    title: "Flexibility",
    description:
      "We provide customized solutions. Each project has its own features. Adapting to schedules, objectives and people is the key to achieving success.",
    button: "Learn more",
  },
  {
    icon: <img src={Innovation} alt="innovation-img" />,
    title: "Innovation",
    description:
      "We have a constant- learning culture. Using the best & latest technology. We stimulate creative and sustainable solutioning.",
    button: "Learn more",
  },
];

const People = () => {
  return (
    <>
      <p className={styles.sectionTitle}>People are the key to success</p>
      <div className={styles.itemsContainer}>
        {PEOPLE_CONTENT.map((item, i) => (
          <div className={styles.peopleItem} key={i}>
            {item.icon}
            <p className={styles.title}>{item.title}</p>
            {item.subtitle && (
              <p className={styles.subtitle}>{item.subtitle}</p>
            )}
            <p className={styles.description}>{item.description}</p>
            <button>{item.button}</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default People;
