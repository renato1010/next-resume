import { useMemo } from 'react';
import { ListItem, Text, ListIcon, List, VStack } from '@chakra-ui/react';
import { ExperienceItem, TechItemsRow } from '@components';
import { FaRegCheckCircle } from 'react-icons/fa';
import { companyToTechListMap } from '@utils/dynamicGetIconModules';
import data from '@utils/data/renato-resume-data.json';

const {
  'work-experience': {
    projects: { kiutee, parkMobile_easyPark }
  }
} = data;
const companyList = [kiutee, parkMobile_easyPark];
const ExperienceSection = () => {
  const kiuteeList = useMemo(() => {
    const listFactory = companyToTechListMap.get('kiutee')!;
    return listFactory();
  }, []);
  const parkMobileList = useMemo(() => {
    const listFactory = companyToTechListMap.get('parkMobile_easyPark')!;
    return listFactory();
  }, []);

  const companyIconsList = [kiuteeList, parkMobileList];
  return (
    <VStack spacing="2">
      {companyList.map(({ title, subTitle, projectName, achievements }, idx) => (
        <ExperienceItem title={title} subtitle={subTitle} key={title}>
          <Text my={1} fontSize="14px" textColor="blue.800" textDecoration="underline">
            {projectName}
          </Text>
          <List spacing={1} fontSize="14px" textAlign="justify">
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
