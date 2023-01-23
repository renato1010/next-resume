import { type IconType } from "react-icons";
import { SiNodedotjs } from "react-icons/si";

export type CompanyKeys = "soleFarms" | "pickfu" | "pillar" | "bairesDev" | "letulet" | "foodologist";
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

export const companyToTechListMap = new Map<CompanyKeys, () => Promise<TechIconList>>([
  ["soleFarms", getSoleFarmIcons],
  ["pickfu", getPickfuIcons],
  ["pillar", getPillarIcons],
  ["bairesDev", getBairesIcons],
  ["letulet", getLetuletIcons],
  ["foodologist", getFoodologistIcons],
]);
