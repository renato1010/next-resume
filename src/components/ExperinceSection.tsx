import { ListItem, OrderedList, Text, UnorderedList } from "@chakra-ui/react";
import { ExperienceItem, TechItemsRow } from "@components";
import {
  SiGooglecloud,
  SiDialogflow,
  SiTypescript,
  SiNodedotjs,
  SiSvelte,
  SiGraphql,
  SiApollographql,
  SiAwsamplify,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";

const ExperienceSection = () => {
  return (
    <>
      <ExperienceItem
        title="HCL Tech - Contractor"
        subtitle="June 2021 - June 2022; 100% Remote from Guatemala"
      >
        <Text>Two phases project:</Text>
        <OrderedList fontSize="medium" textAlign="justify">
          <ListItem>
            Design and develop the Google DialogFlow CX virtual agent, as a
            component of a complete solution with Google Contact Center AI.
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
        title="Sole Farms, Miama Fl - Sub contractor"
        subtitle="December 2021 - May 2022; 100% Remote from Guatemala"
      >
        <Text>Management Dashboard</Text>
        <UnorderedList fontSize="medium" textAlign="justify">
          <ListItem>
            Supply chain management dashboard with actions and data
            visualization
          </ListItem>
          <ListItem>
            Frontend implemented with Sveltekit, outstanding performance
          </ListItem>
          <ListItem>
            Backend: GraphQL API, as a layer on top on already available company
            Restful API
          </ListItem>
        </UnorderedList>
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
            {
              icon: SiAwsamplify,
              label: "AWS amplify",
            },
          ]}
        />
      </ExperienceItem>
    </>
  );
};

export { ExperienceSection };
