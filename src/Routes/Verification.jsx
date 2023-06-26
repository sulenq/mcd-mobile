import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import {
  VStack,
  Heading,
  Text,
  HStack,
  Image,
  PinInput,
  PinInputField,
  IconButton,
  Box,
} from '@chakra-ui/react';

export default function Verification() {
  // Utils
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  // Functions
  function handleNext() {
    setLoading(true);
  }
  function handleBack() {
    navigate('/');
  }

  // Functions
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setDone(true);
        setTimeout(() => {
          setLoading(false);
          navigate('/mcd-mobile');
        }, 1500);
      }, 1500);
    }
  }, [loading, navigate]);

  // Components
  const Loader = props => {
    return (
      <>
        <Box
          w={'100%'}
          h={'100vh'}
          position={'fixed'}
          bg={'black'}
          opacity={0.5}
          zIndex={1}
        ></Box>
        <HStack
          w={'calc(100% - 64px)'}
          bg={'white'}
          borderRadius={'10px'}
          justifyContent={'space-between'}
          p={'16px'}
          zIndex={1}
          position={'fixed'}
        >
          <Image src={'./asset/logo.png'} />
          <Text w={'100%'} textAlign={'center'} fontSize={'14px'}>
            {done ? 'Done!' : 'Verifying your account, please wait.'}
          </Text>
        </HStack>
      </>
    );
  };

  return (
    <VStack id={'appContainer'} position={'relative'}>
      {loading && <Loader />}
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
        <Text fontSize={'14px'} fontWeight={'bold'}>
          ENTER THE 6-DIGIT CODE SENT TO EMAIL THAT YOU USED
        </Text>
        <HStack w={'100%'} my={'16px'} justifyContent={'center'}>
          <PinInput otp>
            <PinInputField w={'100%'} className={'input'} />
            <PinInputField w={'100%'} className={'input'} />
            <PinInputField w={'100%'} className={'input'} />
            <PinInputField w={'100%'} className={'input'} />
            <PinInputField w={'100%'} className={'input'} />
            <PinInputField w={'100%'} className={'input'} />
          </PinInput>
        </HStack>
        <Text fontSize={'12px'} mb={'32px'}>
          Request a new code 00:30
        </Text>
        <HStack w={'100%'} justifyContent={'space-between'}>
          <IconButton
            className={'roundBtn redBtn'}
            onClick={handleBack}
            icon={<ArrowBackIcon />}
          />
          <IconButton
            className={'roundBtn redBtn'}
            onClick={handleNext}
            icon={<ArrowForwardIcon />}
          />
        </HStack>
      </VStack>
    </VStack>
  );
}
