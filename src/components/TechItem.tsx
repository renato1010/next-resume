import { Center, Icon, Tooltip } from '@chakra-ui/react';
import type { IconType } from 'react-icons';

export type TechItemProps = {
  icon: IconType;
  label: string;
  width?: string;
  height?: string;
};
const TechItem = ({ width = '24px', height = '24px', icon, label }: TechItemProps) => {
  return (
    <Tooltip label={label}>
      <Center w={width} h={height}>
        <Icon as="svg" fill="blue.500" w={width} h={height}>
          {icon({ size: '100%', fill: 'blue.500' })}
        </Icon>
      </Center>
    </Tooltip>
  );
};

export { TechItem };
