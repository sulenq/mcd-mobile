import React from 'react';

import { VStack, Heading, Text, Image } from '@chakra-ui/react';

export default function McdMobile() {
  return (
    <VStack id={'appContainer'} position={'relative'}>
      <Image
        src={'./asset/logo.png'}
        position={'absolute'}
        top={'24px'}
        zIndex={'-1'}
      />
      <Image
        w={'100%'}
        src={'./asset/bgMerahKuning.png'}
        position={'absolute'}
        zIndex={'-1'}
      />
      <VStack
        gap={null}
        alignItems={'flex-start'}
        maxW={'500px'}
        w={'calc(100% - 64px)'}
        p={'24px'}
        border={'1px solid var(--gray)'}
        borderRadius={'10px'}
        bg={'white'}
      >
        <Heading fontSize={'24px'} lineHeight={'24px'}>
          WELCOME TO
        </Heading>
        <Heading fontSize={'36px'} lineHeight={'36px'}>
          MCDONNALD'S
        </Heading>
        <Text opacity={0.5}>Sign in To Continue</Text>
      </VStack>
    </VStack>
  );
}
