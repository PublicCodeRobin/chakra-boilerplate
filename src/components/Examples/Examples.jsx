import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Heading, HStack, IconButton, Image, Text, VStack } from '@chakra-ui/react';
import Tailwind from './Tailwind/Tailwind';
import Chakra from './Chakra/Chakra';
import { BiCart, BiHeart } from 'react-icons/all';

let timeoutId;

const Examples = ({ homes }) => {
  const [loading, setLoading] = useState(null);
  const [clicked, setClicked]  = useState({
    first: true,
    second: false,
  });

  const fakeLoad = (delay, value) => new Promise(resolve => setTimeout(resolve, delay, value));

  useEffect(() => {
    const clickedItem = Object.entries(clicked).map((clickedItem) => {
      return clicked?.forEach?.(([key, val]) => {

      });
    })[0]

    console.log(clickedItem);

    if (clickedItem) {
      setLoading(clickedItem);
      fakeLoad(500, null)
        .then((res) => {
          setLoading(res);
        });
    }

    return () => setLoading(false);
  }, [clicked]);

  return (
    <VStack>
      {/* <Chakra homes={homes}/> */}
      {/* <Tailwind homes={homes}/> */}
      <VStack
        border={'teal 2px solid'}
        py={[5, 20]}
        px={[6, 20]}
        borderRadius={'lg'}
        align={'left'}

      >
        <Heading
          as={'h2'}
          size={['md', 'lg']}
        >
          Product
        </Heading>
        <Text>
          This is the new Macbook Pro
        </Text>
        <Image
          borderRadius={'2xl'}
          src={'https://th.bing.com/th/id/OIP.UN4KmRlofTUAiYnsM-lI5wHaEJ?pid=ImgDet&rs=1'}
        >

        </Image>
        <HStack >


          <Button
            rightIcon={<BiCart/>}
            isLoading={loading === 'first'}
            w={['2xs', 'md']}
            variant={'solid'}
            isActive={clicked.first}
            aria-label="put in basket"
            onClick={() => setClicked(prevClicked => ({
              ...prevClicked,
              first: !prevClicked.first,
            }))}
          >
          In mandje

          </Button>
          <IconButton
            isLoading={loading === 'second'}
            isRound={true}
            variant={'solid'}
            colorScheme={clicked ? 'teal' : 'orange'}
            aria-label="put in basket"
            onClick={() => setClicked(prevClicked => ({
              ...prevClicked,
              second: !prevClicked.second,
            }))}
          >
            <BiHeart/>
          </IconButton>
        </HStack>
      </VStack>

      <button className={'py-12'} onClick={() => {}}>

      </button>
    </VStack>
  );
};
export default Examples;
