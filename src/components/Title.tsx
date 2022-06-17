import { Box, Heading, Text } from "@chakra-ui/react";
import styles from "styles/Title.module.css";

const Title = () => {
  return (
    <Box className={styles.title}>
      <Heading as="h1" size="2xl" letterSpacing="1.5px">
        Renato <span className={styles.contrastTitle}>Perez</span>
      </Heading>
      <Text color="gray.700" fontSize="2xl">
        Full-Stack Developer
      </Text>
    </Box>
  );
};

export { Title };
