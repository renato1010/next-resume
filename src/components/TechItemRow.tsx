import { useEffect, useState } from "react";
import { HStack } from "@chakra-ui/react";
import { TechItem } from "./TechItem";
import { type TechIconList } from "@utils/dynamicGetIconModules";

type TechItemsRowProps = {
  icons: Promise<TechIconList>;
  horizontalPos?: "start" | "end";
};
const TechItemsRow = ({ icons, horizontalPos = "end" }: TechItemsRowProps) => {
  const [iconList, setIconList] = useState<TechIconList>([]);
  useEffect(() => {
    async function getIconList(iconCollection: Promise<TechIconList> = icons) {
      const list = await iconCollection;
      setIconList(list);
    }
    getIconList();
  }, [icons]);
  return (
    <HStack pt="2" spacing="4" justify={`flex-${horizontalPos}`}>
      {iconList.map((icon) => (
        <TechItem key={icon.label} icon={icon.icon} label={icon.label} />
      ))}
    </HStack>
  );
};

export { TechItemsRow };
