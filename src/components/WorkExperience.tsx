import { type ReactNode } from "react";
import styles from "@styles/WorkExperience.module.css";

type PageProps = {
  children: ReactNode;
};

const Experience = ({ children }: PageProps) => {
  return (
    <div className={styles.page}>
      {children}
    </div>
  );
};

export { Experience };
