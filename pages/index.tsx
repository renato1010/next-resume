import type { NextPage } from "next";
import { Page } from "@components";
import { HStack, VStack, Box, Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <>
      <a
        href="/api/pdf"
        download="generated_resume.pdf"
        className="downloadBtn"
      >
        Download PDF
      </a>
      <Page>
        <Flex w="100%" h="100%" align="stretch" border="1px solid green">
          <Box w="40%" h="100%" bg="#F1F2F5"></Box>
          <Box w="60%" h="100%" bg="pink"></Box>
        </Flex>
      </Page>
    </>
  );
};

export default Home;
