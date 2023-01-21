import { PropsWithChildren } from "react";
import { Box, Heading } from "@chakra-ui/react";
import type { BoxProps } from "@chakra-ui/layout";

type ExperienceItemProps = {
  title: string;
  subtitle: string;
  passedShadow?: BoxProps["boxShadow"];
};
const ExperienceItem = ({
  title,
  subtitle,
  children,
  passedShadow,
}: PropsWithChildren<ExperienceItemProps>) => {
  return (
    <Box w="100%" pt="4" p="2" boxShadow={passedShadow} lineHeight="normal">
      <Heading as="h4" fontSize="18px" fontWeight="medium" color="blue.500">
        {title}
      </Heading>
      <Heading as="h5" fontSize="16px" fontWeight="medium" color="blue.700">
        {subtitle}
      </Heading>
      {children}
    </Box>
  );
};

export { ExperienceItem };
