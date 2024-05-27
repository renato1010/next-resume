import { Heading } from "@chakra-ui/react";

type HeadingSectionProps = {
  title: string;
};
const HeadingSection = ({ title }: HeadingSectionProps) => {
  return (
    <Heading
      w="100%"
      as="h3"
      fontSize="20px"
      fontWeight="medium"
      mb="1"
      textAlign="left"
      textTransform="capitalize"
    >
      {title}
    </Heading>
  );
};

export { HeadingSection };
