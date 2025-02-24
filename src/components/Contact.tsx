import { Box, Heading, HStack, Icon, Link, Text } from '@chakra-ui/react';
import { FaRegEnvelope, FaGithub } from 'react-icons/fa';
import { TbWorld, TbExternalLink } from 'react-icons/tb';
import { GoLocation } from 'react-icons/go';
import data from '@utils/data/renato-resume-data.json';

const Contact = () => {
  const { email, website, github, location } = data.profile.contact;
  return (
    <Box w="100%" p="2">
      <Heading as="h3" fontSize="24px" fontWeight="medium">
        Contact
      </Heading>
      <Box fontSize="18px" w="100%">
        <HStack spacing="4">
          <Icon as="svg" fill="blue.500">
            {FaRegEnvelope({ size: '24px', fill: 'blue.500' })}
          </Icon>
          <Link href="mailto:contact@renatoperez.dev" color="blue.700">
            {email}
          </Link>
        </HStack>
        <HStack spacing="4">
          <Icon as="svg" fill="blue.500">
            {TbWorld({ size: '24px', fill: 'blue.500' })}
          </Icon>
          <Link href={website.href} color="blue.700">
            <HStack align="center">
              <Text>{website.text}</Text>
              <Icon style={{ marginLeft: '1px', marginTop: '-2px' }} as="svg">
                {TbExternalLink({ size: '24px', color: 'blue.700' })}
              </Icon>
            </HStack>
          </Link>
        </HStack>
        <HStack spacing="4">
          <Icon as="svg" fill="blue.500">
            {FaGithub({ size: '24px', fill: 'blue.500' })}
          </Icon>
          <Link href={github.href} color="blue.700">
            <HStack align="center">
              <Text>{github.text}</Text>
              <Icon style={{ marginLeft: '1px', marginTop: '-2px' }} as="svg">
                {TbExternalLink({ size: '24px', color: 'blue.700' })}
              </Icon>
            </HStack>
          </Link>
        </HStack>
        <HStack spacing="4">
          <Icon as="svg" fill="blue.500">
            {GoLocation({ size: '24px', fill: 'blue.500' })}
          </Icon>
          <Link color="blue.700">{location}</Link>
        </HStack>
      </Box>
    </Box>
  );
};

export { Contact };
