import { useEffect, useState } from 'react';
import { Box, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import { HeadingSection } from '@components';
import { companyToTechListMap, type TechIconList } from '@utils/dynamicGetIconModules';

const SkillListPlain = () => {
  const [skills, setSkills] = useState<TechIconList | undefined>([]);
  useEffect(() => {
    async function getSkills() {
      const list = await companyToTechListMap.get('skillList')?.();
      setSkills(list);
    }
    getSkills();
  }, []);
  if (!skills) {
    return null;
  }
  return (
    <Box w="100%" p="2">
      <HeadingSection title="skill set" />
      <SimpleGrid columns={2} spacing={4} w="100%">
        {skills.map((skill) => (
          <HStack key={skill.label} alignItems="center">
            <Text fontSize="14px" color="blue.700">
              {skill.label}
            </Text>
          </HStack>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export { SkillListPlain };
