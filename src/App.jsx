import * as React from 'react';
import {
  ChakraProvider,
  Text,
  VStack,
} from '@chakra-ui/react';

import { ColorModeSwitcher } from './ColorModeSwitcher';
import theme from './theme/theme';

import { useEffect, useState } from 'react';
import { Ankeiler } from './components/Ankeiler/Ankeiler';
import { PUBLIC_URL } from './consts';
import Examples from './components/Examples/Examples';

export const App = () => {
  const [homes, setHomes] = useState([]);


  const getHomes = () => {
    fetch(`${PUBLIC_URL}/homes.json`
      , {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      })
      .then(res => res.json())
      .then((homeData) => {
        setHomes(homeData.homes);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getHomes();
  }, []);

  if (!homes?.length) {
    return (
      <Text>
        Loading...
      </Text>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <VStack>
        <ColorModeSwitcher justifySelf="flex-end"/>
        <Examples homes={homes}/>
        {
          homes?.map?.((home, i) => {
            return (
              <Ankeiler
                key={i}
                {...home}
              >
              </Ankeiler>
            );
          })}
        <p>hello</p>

      </VStack>
    </ChakraProvider>
  );
};
