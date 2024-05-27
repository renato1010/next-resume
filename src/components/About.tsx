import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box w="100%" p="2" border="1px solid #eeeaea">
      <Heading as="h3" fontSize="24px" fontWeight="medium">
        About
      </Heading>
      <Text mt="2" fontWeight="200" fontSize="15px" lineHeight="1.2" textAlign="justify">
        With over 12 years of web development experience, I have honed my skills across all stages
        of the software development lifecycle. I&apos;ve seamlessly transitioned from managing codebases
        for small projects to leading cross-functional teams in building complex enterprise
        solutions. My expertise includes developing high-traffic public websites, managing company
        brand assets, and modernizing legacy systems to cutting-edge architectures.
        <br /> My toolkit is diverse and current, encompassing technologies such as &nbsp;
        <span style={{ fontWeight: 'bold' }}>
          Typescript, React, Svelte, Next.js, Node.js, Serverless, AWS and Terraform
        </span>
        . I am adept at delivering high-value solutions that meet both technical and business needs,
        ensuring robust, scalable, and innovative web applications.
      </Text>
    </Box>
  );
};

export { About };
