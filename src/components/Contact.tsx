import { Box, Heading, HStack, Icon, Link } from "@chakra-ui/react";
import { FaRegEnvelope, FaLinkedin } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { GoLocation } from "react-icons/go";

const Contact = () => {
  return (
    <Box w="100%">
      <Heading as="h3" fontSize="24px" fontWeight="medium">
        Contact
      </Heading>
      <Box w="100%" p="4">
        <HStack spacing="4">
          <Icon as={FaRegEnvelope} fill="blue.500" />
          <Link href="mailto:contact@renatoperez.dev" color="blue.700">
            contact@renatoperez.dev
          </Link>
        </HStack>
        <HStack spacing="4">
          <Icon as={TbWorld} fill="blue.500" />
          <Link href="https://www.renatoperez.dev" color="blue.700">
            renatoperez.dev
          </Link>
        </HStack>
        <HStack spacing="4">
          <Icon as={FaLinkedin} fill="blue.500" />
          <Link
            href="https://www.linkedin.com/in/renatoperezgt/"
            color="blue.700"
          >
            /renatoperezgt
          </Link>
        </HStack>
        <HStack spacing="4">
          <Icon as={GoLocation} fill="blue.500" />
          <Link color="blue.700">Guatemala/US/world</Link>
        </HStack>
      </Box>
    </Box>
  );
};

export { Contact };
