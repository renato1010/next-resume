import { Box, Heading, Text } from '@chakra-ui/react';

const About = () => {
  return (
    <Box w="100%" p="2" border="1px solid #eeeaea">
      <Heading as="h3" fontSize="24px" fontWeight="medium">
        About
      </Heading>
      <Text mt="2" fontWeight="200" fontSize="15px" lineHeight="1.2" textAlign="justify">
        With over 12 years of web development experience, I have honed my skills across all stages
        of the software development lifecycle. My journey has seen me seamlessly transition from
        managing codebases for small projects to leading cross-functional teams in building complex
        enterprise solutions. I have a proven track record in developing high-traffic public
        websites, managing company brand assets, and modernizing legacy systems to cutting-edge
        architectures.
        <br /> My expertise encompasses a diverse and current toolkit, including technologies such
        as &nbsp;
        <span style={{ fontWeight: 'bold' }}>
          TypeScript, React, Svelte, Next.js, Node.js, Serverless, AWS, and Terraform.
        </span>
        Recently, I have specialized in developing LLM-powered Next.js applications using tools
        like&nbsp;
        <span style={{ fontWeight: 'bold' }}>Langchain</span>, integrating advanced AI capabilities
        into web solutions. I am adept at delivering high-value solutions that meet both technical
        and business needs, ensuring robust, scalable, and innovative web applications.
      </Text>
    </Box>
  );
};

export { About };
