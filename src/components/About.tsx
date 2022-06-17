import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box w="100%" pt="8">
      <Heading as="h3" fontSize="24px" fontWeight="medium">
        About me
      </Heading>
      <Text mt="4" fontSize="medium" textAlign="justify">
        In 14 years of experience as a full stack developer, I have accumulated
        extensive experience in all stages of the software development
        lifecycle, being in charge of the complete product realization, leading
        teams or simply augmenting staff. I have created complex enterprise
        software from scratch, products like high traffic public websites,
        business management dashboards, virtual agents for contact centers are
        my thing. My next project will be something in the orbit of:{" "}
        <Text fontWeight="semibold">
          Typescript, React, Svelte, Next.js, Nodejs, Serverless, GraphQL.
        </Text>
      </Text>
    </Box>
  );
};

export { About };
