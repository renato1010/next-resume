import type { NextPage } from "next";
import { Page, DevPic, Title, About, Contact } from "@components";
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
        <Flex w="100%" h="100%" align="stretch" bg="#F1F2F5">
          <VStack w="35%" h="100%">
            <DevPic />
            <Contact />
          </VStack>
          <VStack w="65%" h="100%" pl="8">
            <Title />
            <About />
          </VStack>
        </Flex>
      </Page>
    </>
  );
};

export default Home;
