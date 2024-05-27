import { Square } from "@chakra-ui/react";
import Image from "next/image";
import styles from "@styles/DevPic.module.css";
import data from "@utils/data/renato-resume-data.json";

const DevPic = () => {
  const {
    profile: { avatar },
  } = data;
  return (
    <Square className={styles.devPic}>
      <div className={styles.picFrame}>
        <Image objectFit="cover" objectPosition="center 10%" layout="fill" src={avatar} alt="developer picture" />
      </div>
    </Square>
  );
};

export { DevPic };
