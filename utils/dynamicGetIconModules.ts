import { type IconType } from "react-icons";

export type CompanyKeys =
  | "soleFarms"
  | "pickfu"
  | "pillar"
  | "bairesDev"
  | "letulet"
  | "foodologist"
  | "skillList";
type TechIconItem = {
  icon: IconType;
  label: string;
};
export type TechIconList = ReadonlyArray<TechIconItem>;

async function getSoleFarmIcons(): Promise<TechIconList> {
  const { SiSvelte, SiGraphql, SiTypescript, SiNodedotjs, SiApollographql, SiGooglecloud, SiPostgresql } =
    await import("react-icons/si");
  return [
    {
      icon: SiSvelte,
      label: "Svelte/Sveltekit",
    },
    {
      icon: SiGraphql,
      label: "GraphQL",
    },
    {
      icon: SiTypescript,
      label: "Typescript",
    },
    {
      icon: SiNodedotjs,
      label: "NodeJS",
    },
    {
      icon: SiApollographql,
      label: "Apollo GraphQL",
    },
    { icon: SiGooglecloud, label: "Google Cloud" },
    { icon: SiPostgresql, label: "Postgresql" },
  ];
}
async function getPickfuIcons(): Promise<TechIconList> {
  const { SiAmazonaws, SiNextdotjs, SiTypescript, SiNodedotjs, SiReact, SiPrisma, SiPostgresql } =
    await import("react-icons/si");
  return [
    { icon: SiAmazonaws, label: "Amazon web services" },
    {
      icon: SiNextdotjs,
      label: "Next.js",
    },
    {
      icon: SiTypescript,
      label: "Typescript",
    },
    {
      icon: SiReact,
      label: "React",
    },
    {
      icon: SiNodedotjs,
      label: "NodeJS",
    },
    {
      icon: SiPrisma,
      label: "Prisma ORM",
    },
    { icon: SiPostgresql, label: "Postgresql" },
  ];
}
async function getPillarIcons(): Promise<TechIconList> {
  const { SiGooglecloud, SiNextdotjs, SiTypescript, SiNodedotjs, SiReact, SiMysql } = await import(
    "react-icons/si"
  );
  const { Apigee } = await import("@icons");
  return [
    { icon: Apigee, label: "Google Apigee" },
    { icon: SiGooglecloud, label: "Google Cloud Platform" },
    {
      icon: SiNextdotjs,
      label: "Next.js",
    },
    {
      icon: SiTypescript,
      label: "Typescript",
    },
    {
      icon: SiReact,
      label: "React",
    },
    {
      icon: SiNodedotjs,
      label: "NodeJS",
    },
    { icon: SiMysql, label: "MySQL" },
  ];
}
async function getBairesIcons(): Promise<TechIconList> {
  const { SiLinux, SiJavascript, SiTypescript, SiFirebase, SiNodedotjs, SiAngular } = await import(
    "react-icons/si"
  );
  return [
    {
      icon: SiLinux,
      label: "Linux Server",
    },
    { icon: SiJavascript, label: "Javascript" },
    {
      icon: SiTypescript,
      label: "Typescript",
    },
    { icon: SiFirebase, label: "Google Cloud Platform" },
    {
      icon: SiNodedotjs,
      label: "NodeJS",
    },
    { icon: SiAngular, label: "Angular Framework" },
  ];
}

async function getLetuletIcons(): Promise<TechIconList> {
  const { SiAngular, SiAmazonaws, SiJavascript, SiTypescript, SiJava } = await import("react-icons/si");
  return [
    { icon: SiAngular, label: "Angular Framework" },
    {
      icon: SiAmazonaws,
      label: "Amazon web services",
    },
    { icon: SiJavascript, label: "Javascript" },
    {
      icon: SiTypescript,
      label: "Typescript",
    },
    {
      icon: SiJava,
      label: "Java",
    },
  ];
}
async function getFoodologistIcons(): Promise<TechIconList> {
  const { SiAmazonaws, SiNodedotjs, SiNpm, SiJavascript, SiLaravel, SiPython } = await import(
    "react-icons/si"
  );
  return [
    {
      icon: SiAmazonaws,
      label: "Amazon web services",
    },
    { icon: SiNodedotjs, label: "NodeJS" },
    { icon: SiNpm, label: "NPM" },
    { icon: SiJavascript, label: "Javascript" },
    {
      icon: SiLaravel,
      label: "Laravel",
    },
    {
      icon: SiPython,
      label: "Python",
    },
  ];
}
async function getResumeSkillList(): Promise<TechIconList> {
  const {
    SiTypescript,
    SiNodedotjs,
    SiReact,
    SiAngular,
    SiJavascript,
    SiNextdotjs,
    SiSvelte,
    SiGraphql,
    SiApollographql,
    SiPrisma,
    SiPostgresql,
    SiMongodb,
    SiGooglecloud,
    SiAmazonaws,
    SiLinux,
    SiDocker,
    SiTailwindcss,
    SiCss3,
    SiHtml5,
    SiDeno,
  } = await import("react-icons/si");
  return [
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
}

export const companyToTechListMap = new Map<CompanyKeys, () => Promise<TechIconList>>([
  ["soleFarms", getSoleFarmIcons],
  ["pickfu", getPickfuIcons],
  ["pillar", getPillarIcons],
  ["bairesDev", getBairesIcons],
  ["letulet", getLetuletIcons],
  ["foodologist", getFoodologistIcons],
  ["skillList", getResumeSkillList],
]);
