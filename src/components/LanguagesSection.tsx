import { Box, HStack, Text } from "@chakra-ui/react";
import { HeadingSection } from "@components";

const LanguagesSection = () => {
  return (
    <Box w="100%" p="2">
      <HeadingSection title="languages" />
      <HStack spacing={3} mt="3" color="blue.700">
        <Text>🇬🇧</Text>
        <Text>{`English -> Fluent`}</Text>
      </HStack>
      <HStack spacing={3} color="blue.700">
        <Text>🇪🇸</Text>
        <Text>{`Spanish -> Native`}</Text>
      </HStack>
    </Box>
  );
};

export { LanguagesSection };
