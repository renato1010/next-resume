import { HStack } from "@chakra-ui/react";
import { TechItem, type TechItemProps } from "./TechItem";

type TechItemsRowProps = {
  icons: TechItemProps[];
};
const TechItemsRow = ({ icons }: TechItemsRowProps) => {
  return (
    <HStack pt="2" spacing="4">
      {icons.map((icon) => (
        <TechItem key={icon.label} icon={icon.icon} label={icon.label} />
      ))}
    </HStack>
  );
};

export { TechItemsRow };
