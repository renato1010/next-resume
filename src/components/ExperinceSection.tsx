import { ListItem, OrderedList, Text, ListIcon, List } from "@chakra-ui/react";
import { ExperienceItem, TechItemsRow } from "@components";
import {
  SiGooglecloud,
  SiDialogflow,
  SiTypescript,
  SiNodedotjs,
  SiSvelte,
  SiGraphql,
  SiApollographql,
  SiPostgresql,
  SiAmazonaws,
  SiNextdotjs,
  SiReact,
  SiPrisma,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";

const ExperienceSection = () => {
  return (
    <>
      <ExperienceItem
        title="HCL Tech, US-Colombia - Contractor"
        subtitle="June 2021 - May 2022; 100% Remote from Guatemala"
      >
        <Text my={1} fontWeight="600">
          Dialogflow CX virtual agent:
        </Text>
        <OrderedList spacing={2} fontSize="medium" textAlign="justify">
          <ListItem>
            Design and develop the Google DialogFlow CX virtual agent, as a
            component of a complete solution with Google Contact Center AI.
          </ListItem>
          <ListItem>
            Develop an API as a proxy to the company services in order to
            provide dynamic responses or save info supplied by user.
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
        title="Sole Farms, Miami Fl - Sub contractor"
        subtitle="Oct 2020 - May 2021; 100% Remote from Guatemala"
      >
        <Text my={1} fontWeight="600">
          Admin Dashboard
        </Text>
        <List spacing={2} fontSize="medium" textAlign="justify">
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" />
            Supply chain management dashboard; actions and data visualization
          </ListItem>
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" />
            Frontend implemented with Sveltekit, outstanding performance
          </ListItem>
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" />
            Backend: GraphQL API, as a layer on top on already available company
            Restful API
          </ListItem>
        </List>
        <TechItemsRow
          icons={[
            { icon: SiSvelte, label: "Svelte/Sveltekit" },
            {
              icon: SiGraphql,
              label: "GraphQL",
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
              icon: SiApollographql,
              label: "Apollo GraphQL",
            },
            { icon: SiGooglecloud, label: "Google Cloud" },
            { icon: SiPostgresql, label: "Postgresql" },
          ]}
        />
      </ExperienceItem>
      <ExperienceItem
        title="3Pillar Global"
        subtitle="May 2018 - Aug 2020; 100% Remote"
      >
        <Text my={1} fontWeight="600">
          Re making of monolithic web application
        </Text>
        <List spacing={2} fontSize="medium" textAlign="justify">
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" />
            Going from RoR monolith to a Static-Site generated App with
            Next.js(React) & multi-language support
          </ListItem>
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" />
            Backend was AWS Serverless solution: API gateway, Lambda functions,
            Step functions
          </ListItem>
        </List>
        <TechItemsRow
          icons={[
            { icon: SiAmazonaws, label: "Amazon web services" },
            {
              icon: SiNextdotjs,
              label: "Next.js",
            },
            {
              icon: SiTypescript,
              label: "Typescript",
            },
            {
              icon: SiReact,
              label: "React",
            },
            {
              icon: SiNodedotjs,
              label: "NodeJS",
            },
            {
              icon: SiPrisma,
              label: "Prisma ORM",
            },
            { icon: SiPostgresql, label: "Postgresql" },
          ]}
        />
      </ExperienceItem>
    </>
  );
};

export { ExperienceSection };
