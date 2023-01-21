import { useMemo } from "react";
import { Box, Flex, VStack, Text, List, ListItem, ListIcon } from "@chakra-ui/react";
import { ExperienceItem, TechItemsRow } from "@components";
import { CompanyKeys, companyToTechListMap } from "@utils/dynamicGetIconModules";
import { FaRegCheckCircle } from "react-icons/fa";
import data from "@utils/data/renato-resume-data.json";

type ExperienceCardProps = {
  companyKey: CompanyKeys;
};
const ExperienceCard = ({ companyKey }: ExperienceCardProps) => {
  const iconList = useMemo(() => {
    const listFactory = companyToTechListMap.get(companyKey)!;
    return listFactory();
  }, [companyKey]);
  const content = data["work-experience"]["projects"][companyKey];
  return (
    <Box padding="4" boxShadow="lg">
      <VStack w="100%" h="100%" align="stretch" gap={1} bg="#F1F2F5">
        <Flex>
          <Flex alignItems="center" w={1 / 4}>
            <Text my={1} fontSize="14px" fontWeight="600">
              Company/Org.
            </Text>
          </Flex>
          <Box>
            <ExperienceItem
              title={content.title}
              subtitle={content.subTitle}
              passedShadow={undefined}
            ></ExperienceItem>
          </Box>
        </Flex>
        <Flex>
          <Flex alignItems="center" w={1 / 4}>
            <Text my={1} fontSize="14px" fontWeight="600">
              Project
            </Text>
          </Flex>
          <Box w={1 / 3}>
            <Text my={1} fontSize="14px" fontWeight="600">
              {content.projectName}
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Flex alignItems="center" w={1 / 4}>
            <Text my={1} fontSize="14px" fontWeight="600">
              Achievements
            </Text>
          </Flex>
          <Box w={3 / 4}>
            <List spacing={2} fontSize="14px" textAlign="justify">
              {content.achievements.map((item) => {
                return (
                  <ListItem key={item}>
                    <ListIcon as={FaRegCheckCircle} color="blue.500" w="14px" />
                    {item}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Flex>
        <Flex>
          <Flex alignItems="center" w={1 / 4}>
            <Text my={1} fontSize="14px" fontWeight="600">
              Tech Stack
            </Text>
          </Flex>
          <Box w={3 / 4}>
            <TechItemsRow horizontalPos="start" icons={iconList} />
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export { ExperienceCard };
