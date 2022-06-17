import { HStack, SimpleGrid, Text } from "@chakra-ui/react";
import {
  SiGooglecloud,
  SiTypescript,
  SiNodedotjs,
  SiSvelte,
  SiGraphql,
  SiApollographql,
  SiPostgresql,
  SiAmazonaws,
  SiNextdotjs,
  SiReact,
  SiPrisma,
  SiJavascript,
  SiMongodb,
  SiLinux,
  SiTailwindcss,
  SiDocker,
  SiAngular,
  SiCss3,
  SiHtml5,
  SiDeno,
} from "react-icons/si";
import { HeadingSection, TechItem, type TechItemProps } from "@components";

const skills: Omit<TechItemProps, "width" | "height">[] = [
  { icon: SiTypescript, label: "Typescript" },
  { icon: SiJavascript, label: "Javascript" },
  { icon: SiReact, label: "React" },
  { icon: SiAngular, label: "Angular" },
  { icon: SiNodedotjs, label: "NodeJS" },
  { icon: SiNextdotjs, label: "Next.js" },
  { icon: SiSvelte, label: "Svelte" },
  { icon: SiGraphql, label: "GraphQL" },
  { icon: SiApollographql, label: "Apollo" },
  { icon: SiPrisma, label: "Prisma ORM" },
  { icon: SiPostgresql, label: "PostgresQL" },
  { icon: SiMongodb, label: "MongoDB" },
  { icon: SiGooglecloud, label: "Google Cloud" },
  { icon: SiAmazonaws, label: "Amazon Cloud" },
  { icon: SiLinux, label: "Linux" },
  { icon: SiDocker, label: "Docker" },
  { icon: SiTailwindcss, label: "TailwindCSS" },
  { icon: SiCss3, label: "CSS" },
  { icon: SiHtml5, label: "HTML" },
  { icon: SiDeno, label: "Deno" },
];
const SkillList = () => {
  return (
    <>
      <HeadingSection title="skill set" />
      <SimpleGrid columns={2} spacing={4} w="100%">
        {skills.map((skill) => (
          <HStack key={skill.label} alignItems="center">
            <TechItem
              width="16px"
              height="16px"
              icon={skill.icon}
              label={skill.label}
            />
            <Text fontSize="14px" color="blue.700">
              {skill.label}
            </Text>
          </HStack>
        ))}
      </SimpleGrid>
    </>
  );
};

export { SkillList };
