import { useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  Page,
  DevPic,
  Title,
  About,
  Contact,
  ExperienceSection,
} from "@components";
import {
  VStack,
  Flex,
  Heading,
} from "@chakra-ui/react";

const Home: NextPage = () => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setShowContent(true);
    return () => {
      setShowContent(false);
    };
  }, []);
  if (!showContent) {
    return null;
  }
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
          <VStack w="65%" h="100%" px="3">
            <Title />
            <About />
            <Heading
              w="100%"
              as="h3"
              fontSize="24px"
              fontWeight="medium"
              mb="1"
              textAlign="left"
            >
              Work Experience
            </Heading>
            <ExperienceSection />
          </VStack>
        </Flex>
      </Page>
    </>
  );
};

export default Home;
