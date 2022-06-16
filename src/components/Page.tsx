import type { NextPage } from "next";
import styles from "@styles/Page.module.css";

type PageProps = {
  children: React.ReactNode;
};
const Page: NextPage<PageProps> = ({ children }: PageProps) => {
  return <div className={styles.page}>{children}</div>;
};

export { Page };
