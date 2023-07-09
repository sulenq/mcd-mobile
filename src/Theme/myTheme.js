import { extendTheme } from '@chakra-ui/react';

export const myTheme = extendTheme({
  colors: {
    yellow: '#FFC836',
    red: '#BD0017',
    pr: {
      50: '#FBD5C9',
      100: '#FBD5C9',
      200: '#EB665E',
      300: '#EB665E',
      400: '#D7353A',
      500: '#BD0017',
      600: '#A20022',
      700: '#880029',
      800: '#6D002B',
      900: '#5A002C',
    },
    pa: {
      50: '#FFF8F6',
      100: '#FFF8D6',
      200: '#FFEFAE',
      300: '#FFE486',
      400: '#FFDA68',
      500: '#FFC836',
      600: '#DBA527',
      700: '#B7831B',
      800: '#936511',
      900: '#7A4F0A',
    },
  },
  styles: {
    global: props => ({
      body: {
        bg: props.colorMode === 'dark' ? '#18191b' : 'white',
      },
    }),
  },
});
