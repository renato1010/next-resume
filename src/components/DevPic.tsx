import { Square } from "@chakra-ui/react";
import Image from "next/image";
import profilePic from "public/images/profile_pic_w_697.jpg";
import styles from "@styles/DevPic.module.css";

const DevPic = () => {
  return (
    <Square className={styles.devPic}>
      <div className={styles.picFrame}>
        <Image src={profilePic} alt="developer picture" />
      </div>
    </Square>
  );
};

export { DevPic };
