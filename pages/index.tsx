import { useEffect, useState } from "react";
import type { NextPage } from "next";
import {
  Page,
  DevPic,
  Title,
  About,
  Contact,
  ExperienceItem,
  TechItemsRow,
} from "@components";
import {
  VStack,
  Flex,
  Heading,
  Text,
  OrderedList,
  ListItem,
} from "@chakra-ui/react";
import {
  SiGooglecloud,
  SiDialogflow,
  SiTypescript,
  SiNodedotjs,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

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
            <ExperienceItem
              title="HCL Tech - Contractor"
              subtitle="June 2021 - June 2022; 100% Remote from Guatemala"
            >
              <Text>Two phases project:</Text>
              <OrderedList fontSize="medium" textAlign="justify">
                <ListItem>
                  Design and develop the Google DialogFlow CX virtual agent, as
                  a component of a complete solution with Google Contact Center
                  AI.
                </ListItem>
                <ListItem>
                  Develop an API as a proxy to the swarm of company services to
                  achieve user intent fulfillment through webhooks.
                </ListItem>
              </OrderedList>
              <TechItemsRow
                icons={[
                  { icon: SiGooglecloud, label: "Google Cloud" },
                  {
                    icon: SiDialogflow,
                    label: "ialogFlow CX",
                  },
                  {
                    icon: SiTypescript,
                    label: "Typescript",
                  },
                  {
                    icon: SiNodedotjs,
                    label: "NodeJS",
                  },
                  {
                    icon: TbApi,
                    label: "API Gateway",
                  },
                ]}
              />
            </ExperienceItem>
            <ExperienceItem
              title="HCL Tech - Contractor"
              subtitle="June 2021 - June 2022; 100% Remote from Guatemala"
            >
              <Text>Two phases project:</Text>
              <OrderedList fontSize="medium" textAlign="justify">
                <ListItem>
                  Design and develop the Google DialogFlow CX virtual agent, as
                  a component of a complete solution with Google Contact Center
                  AI.
                </ListItem>
                <ListItem>
                  Develop an API as a proxy to the swarm of company services to
                  achieve user intent fulfillment through webhooks.
                </ListItem>
              </OrderedList>
              <TechItemsRow
                icons={[
                  { icon: SiGooglecloud, label: "Google Cloud" },
                  {
                    icon: SiDialogflow,
                    label: "ialogFlow CX",
                  },
                  {
                    icon: SiTypescript,
                    label: "Typescript",
                  },
                  {
                    icon: SiNodedotjs,
                    label: "NodeJS",
                  },
                  {
                    icon: TbApi,
                    label: "API Gateway",
                  },
                ]}
              />
            </ExperienceItem>
          </VStack>
        </Flex>
      </Page>
    </>
  );
};

export default Home;
