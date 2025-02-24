import { useMemo } from 'react';
import { ListItem, Text, ListIcon, List, VStack } from '@chakra-ui/react';
import { ExperienceItem, TechItemsRow } from '@components';
import { PiDotOutline } from 'react-icons/pi';
import { companyToTechListMap } from '@utils/dynamicGetIconModules';
import data from '@utils/data/renato-resume-data.json';

const {
  'work-experience': {
    projects: { independent_contractor, kiutee }
  }
} = data;
const companyList = [independent_contractor, kiutee];
const ExperienceSection = () => {
  const contractorList = useMemo(() => {
    const listFactory = companyToTechListMap.get('independent_contractor')!;
    return listFactory();
  }, []);
  const kiuteeList = useMemo(() => {
    const listFactory = companyToTechListMap.get('kiutee')!;
    return listFactory();
  }, []);

  const companyIconsList = [contractorList, kiuteeList];
  return (
    <VStack spacing="0">
      {companyList.map(({ title, subTitle, projectName, achievements }, idx) => (
        <ExperienceItem title={title} subtitle={subTitle} key={title}>
          <Text my={1} fontSize="14px" textColor="blue.800" textDecoration="underline">
            {projectName}
          </Text>
          <List spacing={0} fontSize="14px" textAlign="justify">
            {achievements.map((line) => (
              <ListItem key={line}>
                <ListIcon as="svg" color="blue.500" w="14px">
                  {PiDotOutline({ size: '28px', color: 'blue.500' })}
                </ListIcon>
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
