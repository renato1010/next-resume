import { PropsWithChildren } from "react";
import { Box, Heading } from "@chakra-ui/react";

type ExperienceItemProps = {
  title: string;
  subtitle: string;
  showBorder?: boolean;
};
const ExperienceItem = ({
  title,
  subtitle,
  showBorder = true,
  children,
}: PropsWithChildren<ExperienceItemProps>) => {
  return (
    <Box w="100%" pt="4" p="2" border={showBorder ? "1px solid #eeeaea" : undefined} lineHeight="normal">
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
