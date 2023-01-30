import { Box, Heading, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FaRegEnvelope, FaGithub } from "react-icons/fa";
import { TbWorld, TbExternalLink } from "react-icons/tb";
import { GoLocation } from "react-icons/go";
import data from "@utils/data/renato-resume-data.json";

const Contact = () => {
  const { email, website, github, location } = data.profile.contact;
  return (
    <Box w="100%" p="2">
      <Heading as="h3" fontSize="24px" fontWeight="medium">
        Contact
      </Heading>
      <Box w="100%">
        <HStack spacing="4">
          <Icon as={FaRegEnvelope} fill="blue.500" />
          <Link href="mailto:contact@renatoperez.dev" color="blue.700">
            {email}
          </Link>
        </HStack>
        <HStack spacing="4">
          <Icon as={TbWorld} fill="blue.500" />
          <Link href={website.href} color="blue.700">
            <HStack align="center">
              <Text>{website.text}</Text>
              <Icon style={{ marginLeft: "1px", marginTop: "-2px" }} as={TbExternalLink} />
            </HStack>
          </Link>
        </HStack>
        <HStack spacing="4">
          <Icon as={FaGithub} fill="blue.500" />
          <Link href={github.href} color="blue.700">
            <HStack align="center">
              <Text>{github.text}</Text>
              <Icon style={{ marginLeft: "1px", marginTop: "-2px" }} as={TbExternalLink} />
            </HStack>
          </Link>
        </HStack>
        <HStack spacing="4">
          <Icon as={GoLocation} fill="blue.500" />
          <Link color="blue.700">{location}</Link>
        </HStack>
      </Box>
    </Box>
  );
};

export { Contact };
