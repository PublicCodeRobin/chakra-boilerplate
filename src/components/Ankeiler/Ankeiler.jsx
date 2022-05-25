import { Badge, Box, Image, Text } from '@chakra-ui/react';
import * as React from 'react';
import { StarIcon } from '@chakra-ui/icons';

export const Ankeiler = ({ children, img, name, badges }) => {
  return (
    <Box
      bg="whitesmoke"
      borderRadius="lg"
      width="sm"
      minHeight="sm"
      border="1px solid lightgrey"
      overflow="hidden"
    >
      <Image
        {...img}
        width="100%"
        height="auto"
        minHeight="245px"
      />
      <Box p={5} pb={8}>
        <Box
          display="flex"
          justifyContent="flex-start"
          alignItems="flex-start"
          mb={1}
          flexDirection="row"
        >
          {
            badges?.map((badge, i) => {
              return (
                <Badge
                  key={i}
                >
                  {badge.text}
                </Badge>
              );
            })
          }

          <Text color="gray.500" fontSize="xs">
            3 BEDS • 2 BATHS
          </Text>
        </Box>
        <Text fontWeight="bold" fontSize="xl">
          Modern home in city center
        </Text>
        <Text fontSize="sm" mb={3}>
          $119/night
        </Text>
        <Box
          height={'150px'}
          display="flex"
          alignItems="center"
          flexDirection="row"
          justifyContent="flex-start"
        >
          <StarIcon color="yellow.300" mr={1}/>
          <Text fontWeight="bold" mr={1}>
            4.84
          </Text>
          <Text fontSize="sm">(190)</Text>
        </Box>
      </Box>
    </Box>
  );
};
