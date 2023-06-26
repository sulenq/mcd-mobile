import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  VStack,
  Heading,
  Text,
  Input,
  HStack,
  Checkbox,
  Button,
  Image,
} from '@chakra-ui/react';

export default function LandingPage() {
  // Utils
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // Functions
  function handlerLogin() {
    setLoading(true);
    setTimeout(() => {
      navigate('/verification');
      setLoading(false);
    }, 1000);
  }

  return (
    <VStack id={'appContainer'} position={'relative'}>
      <Image
        w={'100%'}
        src={'./asset/bgMerahKuning.png'}
        position={'absolute'}
        zIndex={'-1'}
      />
      <Image
        src={'./asset/logo.png'}
        position={'absolute'}
        top={'24px'}
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
        <Text opacity={0.5} mb={'32px'}>
          Sign in To Continue
        </Text>
        <Text fontSize={'14px'} fontWeight={'bold'} mb={'16px'}>
          LOGIN WITH EMAIL
        </Text>
        <Input className={'input'} placeholder={'Email Address'} mb={'16px'} />
        <Input
          className={'input'}
          type={'password'}
          placeholder={'Password'}
          mb={'16px'}
        />
        <HStack w={'100%'} justifyContent={'space-between'}>
          <Checkbox defaultChecked>Remember Me</Checkbox>
          <Text color={'red'} textDecoration={'1px solid underline'}>
            Forget Password
          </Text>
        </HStack>
        <Button
          className={'yellowBtn'}
          w={'100%'}
          h={'52px'}
          my={'32px'}
          fontSize={'20px'}
          onClick={handlerLogin}
          isLoading={loading}
        >
          LOGIN
        </Button>
        <HStack w={'100%'} justifyContent={'space-between'}>
          <Text>Don't have an account yet?</Text>
          <Button className={'btn'}>SIGN UP</Button>
        </HStack>
      </VStack>
    </VStack>
  );
}
