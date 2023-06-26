import React from 'react';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {
  Heading,
  Text,
  Image,
  HStack,
  IconButton,
  Box,
  Icon,
  VStack,
} from '@chakra-ui/react';

import { Nav } from '../myComponents';

export default function McDelivery() {
  const featuredImgSrc = ['./asset/f1.jpg', './asset/f2.jpg', './asset/f3.jpg'];

  return (
    <Box id={'appContainer'} pb={'94px'} position={'relative'}>
      <Nav />
      <Box p={'32px'} pb={0}>
        <Box w={'100%'} borderBottom={'2px solid red'}>
          <HStack w={'100%'} justifyContent={'space-between'}>
            <Image w={'37px'} src={'./asset/logo.png'} />
            <IconButton
              className={'roundBtn'}
              variant={'ghost'}
              icon={<NotificationsNoneOutlinedIcon />}
            />
          </HStack>
          <Text
            mt={'24px'}
            fontSize={'14px'}
            fontWeight={'bold'}
            textAlign={'center'}
            py={'8px'}
          >
            MCDELIVERY
          </Text>
        </Box>
      </Box>
      <Box p={'20px 32px'} pb={'4px'}>
        <Heading className={'tw'} fontSize={'36px'}>
          HI, <span style={{ color: 'var(--yellow)' }}>PENG</span>
        </Heading>
      </Box>
      <HStack px={'32px'} alignItems={'flex-start'}>
        <VStack gap={'4px'} alignItems={'flex-start'} mb={'24px'}>
          <HStack gap={'4px'}>
            <Text className={'tw'} fontWeight={'bold'} fontSize={'18px'}>
              Address
            </Text>
            <Icon color={'red'} fontSize={'18px'} as={FmdGoodIcon} />
          </HStack>
          <HStack
            alignItems={'flex-start'}
            w={'240px'}
            p={'8px'}
            className={'bs'}
            borderRadius={'10px'}
          >
            <Text fontSize={'12px'}>
              Perumaham Villa Durian Banyumanik. Kav 21
            </Text>
            <Icon as={KeyboardArrowDownIcon} />
          </HStack>
        </VStack>
        <VStack w={'100%'} gap={'4px'} alignItems={'flex-start'} mb={'24px'}>
          <HStack gap={'4px'}>
            <Text className={'tw'} fontWeight={'bold'} fontSize={'18px'}>
              Time
            </Text>
            <Icon color={'red'} fontSize={'18px'} as={AccessTimeFilledIcon} />
          </HStack>
          <HStack
            justifyContent={'space-between'}
            p={'8px'}
            w={'100%'}
            className={'bs'}
            borderRadius={'10px'}
            bg={'yellow'}
          >
            <Text fontSize={'12px'}>Now</Text>
            <Icon as={KeyboardArrowDownIcon} />
          </HStack>
        </VStack>
      </HStack>
      <Box w={'100%'} overflow={'auto'} mb={'24px'}>
        <HStack w={'max-content'} px={'32px'}>
          {featuredImgSrc?.map((i, index) => {
            return (
              <Box key={index}>
                <Image
                  src={i}
                  w={'326px'}
                  h={'245px'}
                  objectFit={'cover'}
                  borderRadius={'10px'}
                />
              </Box>
            );
          })}
        </HStack>
      </Box>
      <Box px={'32px'}>
        <Text className={'tw'} fontWeight={'bold'} fontSize={'18px'}>
          Top Items
        </Text>
      </Box>
    </Box>
  );
}
