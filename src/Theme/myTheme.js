import { extendTheme } from '@chakra-ui/react';

export const myTheme = extendTheme({
  colors: {
    yellow: '#FFC836',
    red: '#BD0017',
  },
  styles: {
    global: props => ({
      body: {
        bg: props.colorMode === 'dark' ? '#18191b' : 'white',
      },
    }),
  },
});
