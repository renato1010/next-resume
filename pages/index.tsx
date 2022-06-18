import { useEffect, useMemo, useState } from "react";
import type { NextPage } from "next";
import {
  Page,
  DevPic,
  Title,
  About,
  Contact,
  ExperienceSection,
  SkillList,
  HeadingSection,
  LanguagesSection,
} from "@components";
import { VStack, Flex } from "@chakra-ui/react";

const Home: NextPage = () => {
  const [showContent, setShowContent] = useState(false);
  useEffect(() => {
    setShowContent(true);
    return () => {
      setShowContent(false);
    };
  }, []);
  const filename = useMemo(() => {
    const parts = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "long",
    }).formatToParts(new Date());
    const month = parts.filter((p) => p.type === "month").map((p) => p.value);
    const year = parts.filter((p) => p.type === "year").map((p) => p.value);
    return `resume_renato_perez_fullstack_dev_${month}-${year}.pdf`;
  }, []);

  if (!showContent) {
    return null;
  }
  return (
    <>
      <a href="/api/pdf" download={filename} className="downloadBtn">
        Download PDF
      </a>
      <Page>
        <Flex w="100%" h="100%" align="stretch" bg="#F1F2F5">
          <VStack w="35%" h="100%" spacing={4}>
            <DevPic />
            <Contact />
            <SkillList />
            <LanguagesSection />
          </VStack>
          <VStack w="65%" h="100%" px="3">
            <Title />
            <About />
            <HeadingSection title="work experience" />
            <ExperienceSection />
          </VStack>
        </Flex>
      </Page>
    </>
  );
};

export default Home;
