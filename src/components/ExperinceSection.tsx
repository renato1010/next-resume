import { ListItem, Text, ListIcon, List, VStack } from "@chakra-ui/react";
import { ExperienceItem, TechItemsRow } from "@components";
import {
  SiGooglecloud,
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
import { TbNumber1, TbNumber2 } from "react-icons/tb";
import { FaRegCheckCircle } from "react-icons/fa";
import { Apigee } from "@icons";

const ExperienceSection = () => {
  return (
    <VStack spacing="4">
      <ExperienceItem
        title="Sole Farms, FLA US"
        subtitle="May 2022 - July 2022; Contractor"
      >
        <Text my={1} fontSize="14px" fontWeight="600">
          Admin Dashboard
        </Text>
        <List spacing={2} fontSize="14px" textAlign="justify">
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" w="14px" />
            Supply chain management dashboard; actions and data visualization
          </ListItem>
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" w="14px" />
            Frontend with Sveltekit, outstanding performance:{" "}
            <span style={{ fontWeight: "600" }}>1.5s FCP</span>(75th
            Percentile/page loads)
          </ListItem>
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" w="14px" />
            Backend: GraphQL API, schema implemented as small, reusable
            easy-to-test modules(GraphQL Modules)
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
        title="PickFu, CA US"
        subtitle="Sept 2021 - Apr 2022; Full-Time Remote"
      >
        <Text my={1} fontWeight="600">
          Re making of monolithic web application
        </Text>
        <List spacing={2} fontSize="14px" textAlign="justify">
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" w="14px" />
            Going from RoR monolith to a Static-Site generated App with
            Next.js(React) & multi-language support
          </ListItem>
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" w="14px" />
            Backend was AWS Serverless solution: API gateway, Lambda & Step
            functions
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
      <ExperienceItem
        title="3Pillar Global, Costa Rica"
        subtitle="Jan 2019 - Jan 2021; Full-Time Remote"
      >
        <Text my={1} fontSize="14px" fontWeight="600">
          Travel App
        </Text>
        <List spacing={2} fontSize="14px" textAlign="justify">
          <ListItem>
            <ListIcon as={TbNumber1} color="blue.500" w="14px" />
            Client: React(web) and React Native(iOS/Android) App
          </ListItem>
          <ListItem>
            <ListIcon as={TbNumber2} color="blue.500" w="14px" />
            Backend: Google Apigee, API backend; API ecosystem focused on
            multiple channels and business models serving valuable data and
            services as APIs for partners and developers alike, generating new
            revenue streams
          </ListItem>
        </List>
        <TechItemsRow
          icons={[
            { icon: SiGooglecloud, label: "Google Cloud" },
            {
              icon: Apigee,
              label: "Google Apigee",
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
              icon: SiNextdotjs,
              label: "NextJS",
            },
            {
              icon: SiNodedotjs,
              label: "NodeJS",
            },
          ]}
        />
      </ExperienceItem>
    </VStack>
  );
};

export { ExperienceSection };
