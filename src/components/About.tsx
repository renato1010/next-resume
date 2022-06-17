import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box w="100%" p="2" boxShadow="base">
      <Heading as="h3" fontSize="24px" fontWeight="medium">
        About me
      </Heading>
      <Text
        mt="2"
        fontWeight="200"
        fontSize="medium"
        lineHeight="normal"
        textAlign="justify"
      >
        In 14 years of experience as a full stack developer, I have accumulated
        extensive experience in all stages of the software development
        lifecycle, being in charge of the whole product codebase, leading dev
        teams or simply augmenting staff. I have created complex enterprise
        software from scratch, products like high traffic public websites,
        business management dashboards, virtual agents for contact centers are
        my things. My next project will be something in the orbit of: &nbsp;
        <span style={{ fontWeight: "bold" }}>
          Typescript, React, Svelte, Next.js, Nodejs, Serverless, GraphQL.
        </span>
      </Text>
    </Box>
  );
};

export { About };
