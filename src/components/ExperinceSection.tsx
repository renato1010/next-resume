import { useMemo } from "react";
import { ListItem, Text, ListIcon, List, VStack } from "@chakra-ui/react";
import { ExperienceItem, TechItemsRow } from "@components";
import { FaRegCheckCircle } from "react-icons/fa";
import { companyToTechListMap } from "@utils/dynamicGetIconModules";

const ExperienceSection = () => {
  const soleFarmList = useMemo(() => {
    const listFactory = companyToTechListMap.get("soleFarms")!;
    return listFactory();
  }, []);
  const pickfuList = useMemo(() => {
    const listFactory = companyToTechListMap.get("pickfu")!;
    return listFactory();
  }, []);
  const pillarList = useMemo(() => {
    const listFactory = companyToTechListMap.get("pillar")!;
    return listFactory();
  }, []);

  return (
    <VStack spacing="4">
      <ExperienceItem
        title="Sole Farms, FLA US"
        passedShadow="base"
        subtitle="May 2022 - Dec 2022; Contractor"
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
            <span style={{ fontWeight: "600" }}>1.5s FCP</span>(75th Percentile/page loads)
          </ListItem>
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" w="14px" />
            Backend: GraphQL API, schema implemented as small, reusable easy-to-test modules(GraphQL Modules)
          </ListItem>
        </List>
        <TechItemsRow icons={soleFarmList} />
      </ExperienceItem>
      <ExperienceItem
        passedShadow="base"
        title="PickFu, CA US"
        subtitle="Sept 2021 - Apr 2022; Full-Time Remote"
      >
        <Text my={1} fontWeight="600">
          Re making of monolithic web application
        </Text>
        <List spacing={2} fontSize="14px" textAlign="justify">
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" w="14px" />
            Going from RoR monolith to a Static-Site generated App with Next.js(React) & multi-language
            support
          </ListItem>
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" w="14px" />
            Backend was AWS Serverless solution: API gateway, Lambda & Step functions
          </ListItem>
        </List>
        <TechItemsRow icons={pickfuList} />
      </ExperienceItem>
      <ExperienceItem
        title="3Pillar Global, Costa Rica"
        passedShadow="base"
        subtitle="Jan 2020 - Apr 2021; Full-Time Remote"
      >
        <Text my={1} fontSize="14px" fontWeight="600">
          Travel App
        </Text>
        <List spacing={2} fontSize="14px" textAlign="justify">
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" w="14px" />
            Client: React(web) and React Native(iOS/Android) App
          </ListItem>
          <ListItem>
            <ListIcon as={FaRegCheckCircle} color="blue.500" w="14px" />
            Backend: Google Apigee, API backend; API ecosystem focused on multiple channels and business
            models serving valuable data and services as APIs for partners and developers alike, generating
            new revenue streams
          </ListItem>
        </List>
        <TechItemsRow icons={pillarList} />
      </ExperienceItem>
    </VStack>
  );
};

export { ExperienceSection };
