import { extendTheme } from '@chakra-ui/react';

export const myTheme = extendTheme({
  colors: {
    yellow: '#FFC836',
    red: '#BD0017',
    pr: {
      50: '#fdf6f5',
      100: '#f5dad9',
      200: '#ecb9b7',
      300: '#e2908d',
      400: '#db7874',
      500: '#d2534f',
      600: '#c72d28',
      700: '#ad0500',
      800: '#930500',
      900: '#6d0300',
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
