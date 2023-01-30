import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Box w="100%" p="2" boxShadow="base">
      <Heading as="h3" fontSize="24px" fontWeight="medium">
        About me
      </Heading>
      <Text mt="2" fontWeight="200" fontSize="15px" lineHeight="1.2" textAlign="justify">
        Seasoned developer with over a decade of experience as a web developer, during that time acquired
        experience in all stages of the software development lifecycle; held roles ranging from being solely
        responsible for the code base for a small project, to technical lead of a cross-functional team.
        <br /> I know the nuances of building complex enterprise software from scratch; products such as
        high-traffic public websites, management of company brand assets, shifting from legacy to cutting-edge
        software architectures is my thing. My next project will most likely involve(but not limited to):
        &nbsp;
        <span style={{ fontWeight: "bold" }}>
          Typescript, React, Svelte, Next.js, Nodejs, Serverless, GraphQL.
        </span>
      </Text>
    </Box>
  );
};

export { About };
