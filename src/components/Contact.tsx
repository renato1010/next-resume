import { Box, Heading, HStack, Icon, Link, Text } from "@chakra-ui/react";
import { FaRegEnvelope, FaGithub } from "react-icons/fa";
import { TbWorld, TbExternalLink } from "react-icons/tb";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  return (
    <Box w="100%" p="2">
      <Heading as="h3" fontSize="24px" fontWeight="medium">
        Contact
      </Heading>
      <Box w="100%">
        <HStack spacing="4">
          <Icon as={FaRegEnvelope} fill="blue.500" />
          <Link href="mailto:contact@renatoperez.dev" color="blue.700">
            contact@renatoperez.dev
          </Link>
        </HStack>
        <HStack spacing="4">
          <Icon as={TbWorld} fill="blue.500" />
          <Link href="https://www.renatoperez.dev" color="blue.700">
            <HStack align="center">
              <Text>www.renatoperez.dev</Text>
              <Icon
                style={{ marginLeft: "1px", marginTop: "-2px" }}
                as={TbExternalLink}
              />
            </HStack>
          </Link>
        </HStack>
        <HStack spacing="4">
          <Icon as={FaGithub} fill="blue.500" />
          <Link href="https://github.com/renato1010" color="blue.700">
            <HStack align="center">
              <Text>/renato1010</Text>
              <Icon
                style={{ marginLeft: "1px", marginTop: "-2px" }}
                as={TbExternalLink}
              />
            </HStack>
          </Link>
        </HStack>
        <HStack spacing="4">
          <Icon as={GoLocation} fill="blue.500" />
          <Link color="blue.700">Guatemala|US|world</Link>
        </HStack>
      </Box>
    </Box>
  );
};

export { Contact };
