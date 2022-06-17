import { ReactNode } from "react";
import styles from "@styles/Page.module.css";

type PageProps = {
  children: ReactNode;
};
const Page = ({ children }: PageProps) => {
  return <div className={styles.page}>{children}</div>;
};

export { Page };
