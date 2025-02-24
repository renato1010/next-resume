import { Box, Heading, Text } from '@chakra-ui/react';
import { BoldText } from '@components';

const About = () => {
  return (
    <Box w="100%" p="2">
      <Heading as="h3" fontSize="24px" fontWeight="medium">
        About
      </Heading>
      <Text mt="2" fontWeight="200" fontSize="15px" lineHeight="1.2" textAlign="justify">
        Over more than a decade refining web solutions, I’ve gone from taming small codebases to
        leading cross-functional teams on enterprise-scale projects. I’ve built and maintained
        applications for MAU&apos;s and revitalized legacy systems with future-proof architectures.
        My toolkit spans&nbsp;
        <BoldText>TypeScript, React, Svelte, Next.js, Node.js, Serverless, AWS,</BoldText> and&nbsp;
        <BoldText>Terraform</BoldText>. Lately, I&apos;ve ventured into&nbsp;
        <BoldText>Generative AI</BoldText>, integrating <BoldText>LLM&apos;s</BoldText> into
        full-stack development with frameworks like <BoldText>LangChain/LangGraph</BoldText> and
        vector solutions such as Pinecone, MongoDB, or Postgres+Pgvector. This shift propelled me
        from a conventional Fullstack Developer to an <BoldText>AI Engineer</BoldText>. At the
        intersection of modern web development and Generative AI, I craft solutions that exceed
        business goals while redefining user experiences.
      </Text>
    </Box>
  );
};

export { About };
