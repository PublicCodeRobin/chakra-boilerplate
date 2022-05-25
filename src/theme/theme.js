import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
  },
  colors: {
    brandMain: {
      200: '#f47321',
    },
    brandSecond: {
      200: '#0fcb6b',
    },
  },
  components: {
    Badge: {
      defaultProps: {
        variant: 'subtle',
        borderRadius: 'lg',
        colorScheme: 'teal',
      },
    },
    HeaderBox: {
      baseStyle: ({ colorMode }) => ({
        bg: colorMode === 'dark' ? 'green.300' : 'green.500',
      }),
    },
    Button: {
      baseStyle: {
        fontWeight: 500,
      },

      defaultProps: {
        variant: 'outline',
        size: 'md',
      },
    },
    Heading: {
      baseStyle: {
        fontWeight: 500,
        textTransform: 'uppercase',
      },
    },
  },
});
export default theme;
