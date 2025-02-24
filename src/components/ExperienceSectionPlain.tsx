import { useMemo } from 'react';
import { ListItem, Text, List, VStack } from '@chakra-ui/react';
import { ExperienceItem, TechItemsRowPlain } from '@components';
import { companyToTechListMap } from '@utils/dynamicGetIconModules';
import data from '@utils/data/renato-resume-data.json';

const {
  'work-experience': {
    projects: { independent_contractor, kiutee }
  }
} = data;
const companyList = [independent_contractor, kiutee];
const ExperienceSectionPLain = () => {
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
    <VStack spacing="1">
      {companyList.map(({ title, subTitle, projectName, achievements }, idx) => (
        <ExperienceItem title={title} subtitle={subTitle} key={title}>
          <Text my={1} fontSize="14px" textColor="blue.800" textDecoration="underline">
            {projectName}
          </Text>
          <List spacing={1} fontSize="14px" textAlign="justify" styleType="'-'" px={1}>
            {achievements.map((line) => (
              <ListItem key={line}>
                <Text display="inline" dangerouslySetInnerHTML={{ __html: line }} />
              </ListItem>
            ))}
          </List>
          <TechItemsRowPlain icons={companyIconsList[idx]} />
        </ExperienceItem>
      ))}
    </VStack>
  );
};

export { ExperienceSectionPLain };
