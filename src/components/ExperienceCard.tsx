import { useMemo } from 'react';
import { Box, Flex, VStack, Text, List, ListItem, ListIcon } from '@chakra-ui/react';
import { ExperienceItem, TechItemsRowPlain, TechItemsRow } from '@components';
import { companyToTechListMap } from '@utils/dynamicGetIconModules';
import data from '@utils/data/renato-resume-data.json';
import { PiDotOutline } from 'react-icons/pi';

type Data = typeof data;
type Projects = Data['work-experience']['projects'];
type ExperienceCardProps = {
  companyKey: keyof Projects;
  plain?: boolean;
};
const ExperienceCard = ({ companyKey, plain = false }: ExperienceCardProps) => {
  const iconList = useMemo(() => {
    const listFactory = companyToTechListMap.get(companyKey)!;
    return listFactory();
  }, [companyKey]);
  const content: Data['work-experience']['projects'][keyof Projects] =
    data['work-experience']['projects'][companyKey];
  return (
    <Box boxShadow="none">
      <VStack w="100%" h="100%" align="stretch">
        <Flex>
          <Flex alignItems="center" w={1 / 4}>
            <Text my={0} fontSize="14px" fontWeight="600">
              Company/Org.
            </Text>
          </Flex>
          <Box>
            <ExperienceItem
              title={content.title}
              subtitle={content.subTitle}
              showBorder={false}
            ></ExperienceItem>
          </Box>
        </Flex>
        <Flex style={{ margin: 0 }}>
          <Flex alignItems="center" w={1 / 4}>
            <Text my={0} fontSize="14px" fontWeight="600">
              Project
            </Text>
          </Flex>
          <Box>
            <Text my={0} fontSize="14px" fontWeight="600">
              {content.projectName}
            </Text>
          </Box>
        </Flex>
        <Flex>
          <Flex alignItems="center" w={1 / 4}>
            <Text my={0} fontSize="14px" fontWeight="600">
              Achievements
            </Text>
          </Flex>
          <Box w={3 / 4}>
            <List
              spacing={0}
              fontSize="14px"
              textAlign="justify"
              px={plain ? 1 : 0}
              styleType={plain ? "'-'" : 'none'}
            >
              {content.achievements.map((item) => {
                return (
                  <ListItem key={item}>
                    {plain ? null : (
                      <ListIcon as="svg" color="blue.500" w="14px">
                        {PiDotOutline({ size: '28px', color: 'blue.500' })}
                      </ListIcon>
                    )}
                    <Text display="inline" dangerouslySetInnerHTML={{ __html: item }} />
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Flex>
        <Flex>
          <Flex alignItems="center" w={1 / 4}>
            <Text my={0} fontSize="14px" fontWeight="600">
              Tech Stack
            </Text>
          </Flex>
          <Box w={3 / 4}>
            {plain ? (
              <TechItemsRowPlain horizontalPos="end" icons={iconList} />
            ) : (
              <TechItemsRow horizontalPos="end" icons={iconList} />
            )}
          </Box>
        </Flex>
      </VStack>
    </Box>
  );
};

export { ExperienceCard };
