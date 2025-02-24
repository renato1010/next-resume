import { type IconType } from 'react-icons';

export type CompanyKeys =
  | 'independent_contractor'
  | 'kiutee'
  | 'parkMobile_easyPark'
  | 'soleFarms'
  | 'pickfu'
  | 'pillar'
  | 'bairesDev'
  | 'letulet'
  | 'foodologist'
  | 'skillList';
type TechIconItem = {
  icon: IconType;
  label: string;
};
export type TechIconList = ReadonlyArray<TechIconItem>;

async function getIndependentContractorIcons(): Promise<TechIconList> {
  const { SiTypescript, SiCloudflare, SiLangchain } = await import('react-icons/si');
  const { TbBrandAzure } = await import('react-icons/tb');
  return [
    {
      icon: SiTypescript,
      label: 'Typescript'
    },
    {
      icon: SiCloudflare,
      label: 'Cloudflare'
    },
    { icon: SiLangchain, label: 'Langchain' },
    { icon: TbBrandAzure, label: 'AzureOpenAI' }
  ];
}

async function getKiuteeIcons(): Promise<TechIconList> {
  const { SiNextdotjs, SiTailwindcss, SiShopify, SiAmazonwebservices } = await import(
    'react-icons/si'
  );

  const { LuBrainCircuit } = await import('react-icons/lu');

  return [
    {
      icon: SiShopify,
      label: 'Shopify API'
    },
    {
      icon: SiNextdotjs,
      label: 'Next.js'
    },
    {
      icon: SiTailwindcss,
      label: 'Tailwindcss'
    },
    {
      icon: LuBrainCircuit,
      label: 'Langchain'
    },
    { icon: SiAmazonwebservices, label: 'Amazon web services' }
  ];
}
async function getParkMobileIcons(): Promise<TechIconList> {
  const { SiReact, SiNextdotjs, SiJavascript, SiNodedotjs, SiSentry, SiAmazonwebservices } =
    await import('react-icons/si');
  const { IoLanguage } = await import('react-icons/io5');

  return [
    {
      icon: SiReact,
      label: 'React'
    },
    {
      icon: SiNextdotjs,
      label: 'Next.js'
    },
    {
      icon: SiJavascript,
      label: 'Javascript'
    },
    {
      icon: SiNodedotjs,
      label: 'NodeJS'
    },
    {
      icon: SiSentry,
      label: 'Sentry'
    },
    { icon: SiAmazonwebservices, label: 'Amazon web services' },
    { icon: IoLanguage, label: 'multi-lang' }
  ];
}
async function getSoleFarmIcons(): Promise<TechIconList> {
  const {
    SiSvelte,
    SiGraphql,
    SiTypescript,
    SiNodedotjs,
    SiApollographql,
    SiGooglecloud,
    SiPostgresql
  } = await import('react-icons/si');
  return [
    {
      icon: SiSvelte,
      label: 'Svelte/Sveltekit'
    },
    {
      icon: SiGraphql,
      label: 'GraphQL'
    },
    {
      icon: SiTypescript,
      label: 'Typescript'
    },
    {
      icon: SiNodedotjs,
      label: 'NodeJS'
    },
    {
      icon: SiApollographql,
      label: 'Apollo GraphQL'
    },
    { icon: SiGooglecloud, label: 'Google Cloud' },
    { icon: SiPostgresql, label: 'Postgresql' }
  ];
}
async function getPickfuIcons(): Promise<TechIconList> {
  const {
    SiAmazonwebservices,
    SiNextdotjs,
    SiTypescript,
    SiNodedotjs,
    SiReact,
    SiPrisma,
    SiPostgresql
  } = await import('react-icons/si');
  return [
    { icon: SiAmazonwebservices, label: 'Amazon web services' },
    {
      icon: SiNextdotjs,
      label: 'Next.js'
    },
    {
      icon: SiTypescript,
      label: 'Typescript'
    },
    {
      icon: SiReact,
      label: 'React'
    },
    {
      icon: SiNodedotjs,
      label: 'NodeJS'
    },
    {
      icon: SiPrisma,
      label: 'Prisma ORM'
    },
    { icon: SiPostgresql, label: 'Postgresql' }
  ];
}
async function getPillarIcons(): Promise<TechIconList> {
  const { SiGooglecloud, SiNextdotjs, SiTypescript, SiNodedotjs, SiReact, SiMysql } = await import(
    'react-icons/si'
  );
  const { Apigee } = await import('@icons');
  return [
    { icon: Apigee, label: 'Google Apigee' },
    { icon: SiGooglecloud, label: 'Google Cloud Platform' },
    {
      icon: SiNextdotjs,
      label: 'Next.js'
    },
    {
      icon: SiTypescript,
      label: 'Typescript'
    },
    {
      icon: SiReact,
      label: 'React'
    },
    {
      icon: SiNodedotjs,
      label: 'NodeJS'
    },
    { icon: SiMysql, label: 'MySQL' }
  ];
}
async function getBairesIcons(): Promise<TechIconList> {
  const { SiLinux, SiJavascript, SiTypescript, SiFirebase, SiNodedotjs, SiAngular } = await import(
    'react-icons/si'
  );
  return [
    {
      icon: SiLinux,
      label: 'Linux Server'
    },
    { icon: SiJavascript, label: 'Javascript' },
    {
      icon: SiTypescript,
      label: 'Typescript'
    },
    { icon: SiFirebase, label: 'Google Cloud Platform' },
    {
      icon: SiNodedotjs,
      label: 'NodeJS'
    },
    { icon: SiAngular, label: 'Angular Framework' }
  ];
}

async function getLetuletIcons(): Promise<TechIconList> {
  const { SiAngular, SiAmazonwebservices, SiJavascript, SiTypescript } = await import(
    'react-icons/si'
  );
  const { FaJava } = await import('react-icons/fa');
  return [
    { icon: SiAngular, label: 'Angular Framework' },
    {
      icon: SiAmazonwebservices,
      label: 'Amazon web services'
    },
    { icon: SiJavascript, label: 'Javascript' },
    {
      icon: SiTypescript,
      label: 'Typescript'
    },
    {
      icon: FaJava,
      label: 'Java'
    }
  ];
}
async function getFoodologistIcons(): Promise<TechIconList> {
  const { SiAmazonwebservices, SiNodedotjs, SiNpm, SiJavascript, SiLaravel, SiPython } =
    await import('react-icons/si');
  return [
    {
      icon: SiAmazonwebservices,
      label: 'Amazon web services'
    },
    { icon: SiNodedotjs, label: 'NodeJS' },
    { icon: SiNpm, label: 'NPM' },
    { icon: SiJavascript, label: 'Javascript' },
    {
      icon: SiLaravel,
      label: 'Laravel'
    },
    {
      icon: SiPython,
      label: 'Python'
    }
  ];
}
async function getResumeSkillList(): Promise<TechIconList> {
  const {
    SiTypescript,
    SiNodedotjs,
    SiReact,
    SiJavascript,
    SiNextdotjs,
    SiSvelte,
    SiGraphql,
    SiApollographql,
    SiPrisma,
    SiPostgresql,
    SiMongodb,
    SiGooglecloud,
    SiAmazonwebservices,
    SiLinux,
    SiDocker,
    SiTailwindcss,
    SiTerraform,
    SiLangchain,
    SiCypress
  } = await import('react-icons/si');
  const { PlaywrightIcon } = await import('@icons');
  return [
    { icon: SiTypescript, label: 'Typescript' },
    { icon: SiJavascript, label: 'Javascript' },
    { icon: SiReact, label: 'React' },
    { icon: SiLangchain, label: 'Langchain' },
    { icon: SiNodedotjs, label: 'NodeJS' },
    { icon: SiNextdotjs, label: 'Next.js' },
    { icon: SiSvelte, label: 'Svelte' },
    { icon: SiGraphql, label: 'GraphQL' },
    { icon: SiApollographql, label: 'Apollo' },
    { icon: SiPrisma, label: 'Prisma ORM' },
    { icon: SiPostgresql, label: 'PostgresQL' },
    { icon: SiMongodb, label: 'MongoDB' },
    { icon: SiGooglecloud, label: 'Google Cloud' },
    { icon: SiAmazonwebservices, label: 'Amazon Cloud' },
    { icon: SiTerraform, label: 'Terraform' },
    { icon: SiLinux, label: 'Linux' },
    { icon: SiDocker, label: 'Docker' },
    { icon: SiTailwindcss, label: 'TailwindCSS' },
    { icon: SiCypress, label: 'Cypress' },
    { icon: PlaywrightIcon, label: 'Playwright' }
  ].sort((a, b) => a.label.localeCompare(b.label));
}

export const companyToTechListMap = new Map<CompanyKeys, () => Promise<TechIconList>>([
  ['independent_contractor', getIndependentContractorIcons],
  ['kiutee', getKiuteeIcons],
  ['parkMobile_easyPark', getParkMobileIcons],
  ['soleFarms', getSoleFarmIcons],
  ['pickfu', getPickfuIcons],
  ['pillar', getPillarIcons],
  ['bairesDev', getBairesIcons],
  ['letulet', getLetuletIcons],
  ['foodologist', getFoodologistIcons],
  ['skillList', getResumeSkillList]
]);
