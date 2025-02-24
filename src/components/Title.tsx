import { Box, Heading, Text } from '@chakra-ui/react';
import styles from 'styles/Title.module.css';
import data from '@utils/data/renato-resume-data.json';

const Title = () => {
  const {
    profile: {
      header: { name, title }
    }
  } = data;
  const [firstName, lastName] = name.split(' ');
  return (
    <Box className={styles.title}>
      <Heading as="h1" size="2xl" letterSpacing="1.5px">
        {firstName} {lastName}
      </Heading>
      <Text color="gray.700" fontSize="2xl">
        {title}
      </Text>
    </Box>
  );
};

export { Title };
