import React from 'react';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

import {
  SimpleGrid,
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

export default function Deals() {
  const featuredImgSrc = [
    './asset/featured/f1.png',
    './asset/featured/f2.png',
    './asset/featured/f3.png',
  ];
  const dealsItems = [
    {
      name: 'Nikmati 2 Fanta McFloat dengan Harga Murah',
      price: '20.000',
      imgSrc: [
        { type: 'sm', src: './asset/fantaFloat.png' },
        { type: 'sm', src: './asset/fantaFloat.png' },
      ],
    },
    {
      name: 'Promo Spesial Untuk Kamu',
      price: '20.000',
      imgSrc: [
        { type: 'sm', src: './asset/icf.png' },
        { type: 'sm', src: './asset/icf2.png' },
      ],
    },
    {
      name: 'Ceriakan Moodmu dengan yang Spesial',
      price: '36.000',
      imgSrc: [
        { type: 'lg', src: './asset/mcChickenBurger.png' },
        { type: 'md', src: './asset/mcFlurryOreo.png' },
      ],
    },
    {
      name: 'French Fries dan Iced Coffee Hanya dengan 16rb an!',
      price: '16.500',
      imgSrc: [
        { type: 'sm', src: './asset/icf.png' },
        { type: 'md', src: './asset/ff.png' },
      ],
    },
    {
      name: 'Promo Ngemil Spesial Kamu',
      price: '17.500',
      imgSrc: [
        { type: 'md', src: './asset/ff.png' },
        { type: 'md', src: './asset/mcFlurryOreo.png' },
      ],
    },
    {
      name: 'Nikmatin Mcflurry Combo',
      price: '17.500',
      imgSrc: [
        { type: 'md', src: './asset/mcFlurryOreo.png' },
        { type: 'md', src: './asset/mcFlurryChoco.png' },
      ],
    },
    {
      name: 'French Fries Combo Hanya 24rb aja!',
      price: '24.540',
      imgSrc: [
        { type: 'sm', src: './asset/ff.png' },
        { type: 'md', src: './asset/ff.png' },
        { type: 'sm', src: './asset/ff.png' },
      ],
    },
    {
      name: 'Combo Nikmat Enak Hanya 12rb an aja!',
      price: '12.540',
      imgSrc: [
        { type: 'sm', src: './asset/iceCreamCone.png' },
        { type: 'md', src: './asset/ff.png' },
      ],
    },
    {
      name: 'Beli 2 Dapat 1, Harga Spesial',
      price: '20.350',
      imgSrc: [
        { type: 'xs', src: './asset/iceCreamCone.png' },
        { type: 'sm', src: './asset/iceCreamCone.png' },
        { type: 'xs', src: './asset/iceCreamCone.png' },
      ],
    },
    {
      name: 'Segarkan Dahaga dengan 11rb an aja!',
      price: '11.450',
      imgSrc: [
        { type: 'sm', src: './asset/ft.png' },
        { type: 'sm', src: './asset/ft.png' },
      ],
    },
    {
      name: 'Nikmatikn Paket Hemat Hanya 46 ribuan!',
      price: '46.364',
      imgSrc: [
        { type: 'lg', src: './asset/bm.png' },
        { type: 'sm', src: './asset/fantaFloat.png' },
      ],
    },
    {
      name: 'Harga Spesial 2x PaNas 1',
      price: '59.500',
      imgSrc: [
        { type: 'lg', src: './asset/p1.png' },
        { type: 'lg', src: './asset/p1.png' },
      ],
    },
  ];

  return (
    <Box id={'appContainer'} bgImage={''} pb={'72px'} position={'relative'}>
      <Image
        position={'absolute'}
        w={'100%'}
        zIndex={-1}
        top={'220px'}
        left={0}
        transform={'scaleX(-1)'}
        src="./asset/bgKuning.png"
      />
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
            DEALS
          </Text>
        </Box>
      </Box>
      <Box p={'20px 32px'}>
        <Heading className={'tw'} fontSize={'36px'}>
          HI, <span style={{ color: 'var(--yellow)' }}>PENG</span>
        </Heading>
      </Box>
      <Box
        scrollSnapType={'x mandatory'}
        w={'100%'}
        overflow={'auto'}
        pb={'14px'}
      >
        <HStack w={'max-content'} px={'32px'}>
          {featuredImgSrc?.map((i, index) => {
            return (
              <Box key={index} scrollSnapAlign={'center'}>
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

      <SimpleGrid pt={'10px'} pb={4} columns={[2, 3]} gap={'16px'} px={'32px'}>
        {dealsItems?.map((d, index) => {
          return (
            <VStack
              key={index}
              // overflow={'hidden'}
              borderRadius={'0 0 10px 10px'}
              bg={'white'}
              mt={'10px'}
              pt={'30px'}
              pb={'24px'}
              px={'12px'}
              gap={null}
              position={'relative'}
              boxShadow={'0px 0px 5px var(--gl) '}
              justifyContent={'space-between'}
              bgImage={'./asset/cardBg.png'}
              bgSize={'contain'}
              bgPosition={'bottom'}
              bgRepeat={'no-repeat'}
            >
              <Image
                src="./asset/cardTop.png"
                position={'absolute'}
                top={'-10px'}
                w={'100%'}
                h={'10px'}
              />

              {/* <Image
                position={'absolute'}
                bottom={'0'}
                left={'0'}
                zIndex={0}
                src={'./asset/cardBg.png'}
                // opacity={0.8}
              /> */}

              <HStack
                zIndex={2}
                fontWeight={'bold'}
                gap={null}
                alignSelf={'flex-start'}
                alignItems={'flex-end'}
                mb={'8px'}
              >
                <Text fontSize={'10px'}>Rp.</Text>
                <Text lineHeight={'20px'} fontSize={'20px'}>
                  {d?.price}
                </Text>
              </HStack>

              <HStack
                zIndex={2}
                h={'100px'}
                alignSelf={'flex-end'}
                alignItems={'flex-end'}
                gap={null}
              >
                {d?.imgSrc?.map((i, iIndex) => {
                  return (
                    <Image
                      key={iIndex}
                      w={
                        i?.type === 'sm'
                          ? '46px'
                          : i?.type === 'md'
                          ? '64px'
                          : i?.type === 'xs'
                          ? '32px'
                          : '80px'
                      }
                      src={i?.src}
                    />
                  );
                })}
              </HStack>

              <VStack zIndex={2} gap={null} justifyContent={'space-between'}>
                <Text
                  fontSize={'14px'}
                  noOfLines={3}
                  fontWeight={'bold'}
                  mt={'8px'}
                >
                  {d?.name}
                </Text>
                <VStack gap={null}>
                  <Text
                    opacity={0.5}
                    fontSize={'12px'}
                    py={'8px'}
                    w={'100%'}
                    borderBottom={'1px solid white'}
                    alignSelf={'flex-start'}
                  >
                    Expires 20/06/2023
                  </Text>
                  <HStack gap={'4px'} mt={'8px'}>
                    <Icon
                      fontSize={'16px !important'}
                      mt={'-1px'}
                      as={AccessTimeIcon}
                    />
                    <Text fontSize={'12px'}>11:00 am - 5:00 pm</Text>
                  </HStack>
                </VStack>
              </VStack>
            </VStack>
          );
        })}
      </SimpleGrid>
    </Box>
  );
}
