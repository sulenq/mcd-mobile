import React from 'react';

import {
  VStack,
  Heading,
  Text,
  Input,
  HStack,
  Checkbox,
} from '@chakra-ui/react';

export default function LandingPage() {
  return (
    <VStack id={'appContainer'}>
      <VStack
        gap={null}
        alignItems={'flex-start'}
        w={'calc(100% - 64px)'}
        p={'24px'}
      >
        <Heading fontSize={'24px'}>WELCOME TO</Heading>
        <Heading fontSize={'36px'}>MCDONNALD'S</Heading>
        <Text opacity={0.5} mb={'32px'}>
          Sign in To Continue
        </Text>
        <Text fontSize={'14px'} fontWeight={'bold'} mb={'16px'}>
          LOGIN WITH EMAIL
        </Text>
        <Input className={'input'} placeholder={'Email Address'} mb={'16px'} />
        <Input className={'input'} placeholder={'Email Address'} mb={'16px'} />
        <HStack>
          <Checkbox defaultChecked>Remember Me</Checkbox>
          <Text>Forget Password</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}
