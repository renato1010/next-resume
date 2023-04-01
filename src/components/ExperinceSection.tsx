import { useMemo } from "react";
import { ListItem, Text, ListIcon, List, VStack } from "@chakra-ui/react";
import { ExperienceItem, TechItemsRow } from "@components";
import { FaRegCheckCircle } from "react-icons/fa";
import { companyToTechListMap } from "@utils/dynamicGetIconModules";
import data from "@utils/data/renato-resume-data.json";

const {
  "work-experience": {
    projects: { soleFarms, pickfu, },
  },
} = data;
const companyList = [soleFarms, pickfu,];
const ExperienceSection = () => {
  const soleFarmList = useMemo(() => {
    const listFactory = companyToTechListMap.get("soleFarms")!;
    return listFactory();
  }, []);
  const pickfuList = useMemo(() => {
    const listFactory = companyToTechListMap.get("pickfu")!;
    return listFactory();
  }, []);

  const companyIconsList = [soleFarmList, pickfuList];
  return (
    <VStack spacing="4">
      {companyList.map(({ title, subTitle, projectName, achievements }, idx) => (
        <ExperienceItem title={title} subtitle={subTitle} key={title}>
          <Text my={1} fontSize="14px" textColor="blue.800" textDecoration="underline">
            {projectName}
          </Text>
          <List spacing={2} fontSize="14px" textAlign="justify">
            {achievements.map((line) => (
              <ListItem key={line}>
                <ListIcon as={FaRegCheckCircle} color="blue.500" w="14px" />
                <Text display="inline" dangerouslySetInnerHTML={{ __html: line }} />
              </ListItem>
            ))}
          </List>
          <TechItemsRow icons={companyIconsList[idx]} />
        </ExperienceItem>
      ))}
    </VStack>
  );
};

export { ExperienceSection };
