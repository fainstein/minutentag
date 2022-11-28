import React from "react";
import Solution1 from "../Media/Solutions/Solution1.png";
import Solution2 from "../Media/Solutions/Solution2.png";
import Solution3 from "../Media/Solutions/Solution3.png";
import styles from "./Solutions.module.css";

const CARDS_CONTENT = [
  {
    image: <img src={Solution1} alt="solution-1" />,
    title: "Team & Staff Augmentation",
    description:
      "We empower your work team & provide knowledgeable and scalable consultants.",
    button: "Learn more",
  },
  {
    image: <img src={Solution2} alt="solution-2" />,
    title: "Product Development & UX",
    description:
      "We cover all stages of consulting, design, development, testing and full journey life-cycle management for your idea.",
    button: "Learn more",
  },
  {
    image: <img src={Solution3} alt="solution-3" />,
    title: "Government Solutions ",
    description:
      "Intelligence, Analytics and technology solutions to help governments become safer, efficient and more productive",
    button: "Learn more",
  },
];

const Solutions = () => {
  return (
    <div>
      <p className={styles.sectionTitle}>
        Custom software solutioning to support high demanding businesses{" "}
      </p>
      <div className={styles.cardContainer}>
        {CARDS_CONTENT.map((item, i) => (
          <div
            className={`${styles.card} shadow ${i === 1 && styles.cardMiddle}`}
            key={i}
          >
            <div className={styles.cardImage}>{item.image}</div>
            <div className={styles.cardInfo}>
              <p className={styles.cardTitle}>{item.title}</p>
              <p className={styles.cardDescription}>{item.description}</p>
              <button>{item.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
