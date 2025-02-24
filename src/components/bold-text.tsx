import { ReactNode } from 'react';
import { Text } from '@chakra-ui/react';

const BoldText = ({ children }: { children: ReactNode }) => (
  <Text as="span" fontWeight="bold">
    {children}
  </Text>
);

export { BoldText };
