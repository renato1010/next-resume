import { useMemo } from 'react';
import { ListItem, Text, List, VStack } from '@chakra-ui/react';
import { ExperienceItem, TechItemsRowPlain } from '@components';
import { companyToTechListMap } from '@utils/dynamicGetIconModules';
import data from '@utils/data/renato-resume-data.json';

const {
  'work-experience': {
    projects: { parkMobile_easyPark, soleFarms }
  }
} = data;
const companyList = [parkMobile_easyPark, soleFarms];
const ExperienceSectionPLain = () => {
  const parkMobileList = useMemo(() => {
    const listFactory = companyToTechListMap.get('parkMobile_easyPark')!;
    return listFactory();
  }, []);
  const soleFarmList = useMemo(() => {
    const listFactory = companyToTechListMap.get('soleFarms')!;
    return listFactory();
  }, []);

  const companyIconsList = [parkMobileList, soleFarmList];
  return (
    <VStack spacing="2">
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
