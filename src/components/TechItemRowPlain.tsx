import { useEffect, useState } from 'react';
import { HStack, Text } from '@chakra-ui/react';
import { type TechIconList } from '@utils/dynamicGetIconModules';

type TechItemsRowProps = {
  icons: Promise<TechIconList>;
  horizontalPos?: 'start' | 'end';
};
const TechItemsRowPlain = ({ icons, horizontalPos = 'end' }: TechItemsRowProps) => {
  const [iconList, setIconList] = useState<TechIconList>([]);
  useEffect(() => {
    async function getIconList(iconCollection: Promise<TechIconList> = icons) {
      const list = await iconCollection;
      setIconList(list);
    }
    getIconList().catch((error) => console.error(error));
  }, [icons]);
  return (
    <HStack width="100%" pt="2" justify={`flex-${horizontalPos}`} overflow="clip">
      {iconList.map((icon) => (
        <Text fontSize={11} px="3px" borderRadius="4px" key={icon.label} background="gray.300">
          {icon.label}
        </Text>
      ))}
    </HStack>
  );
};

export { TechItemsRowPlain };
