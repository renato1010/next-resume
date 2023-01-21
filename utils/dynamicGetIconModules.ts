import { type IconType } from "react-icons";

export type CompanyKeys = "soleFarms" | "pickfu" | "pillar";
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

export const companyToTechListMap = new Map<CompanyKeys, () => Promise<TechIconList>>([
  ["soleFarms", getSoleFarmIcons],
  ["pickfu", getPickfuIcons],
  ["pillar", getPillarIcons],
]);
