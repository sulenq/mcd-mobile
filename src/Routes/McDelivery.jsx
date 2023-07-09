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
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
} from '@chakra-ui/react';

import { Nav } from '../myComponents';

export default function McDelivery() {
  const featuredImgSrc = [
    './asset/featured/f1.png',
    './asset/featured/f2.png',
    './asset/featured/f3.png',
  ];
  const topItems = [
    {
      img: '1.png',
      type: [{ icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' }],
      name: 'PaNas 2 With Rice',
      price: 'Rp.50.000',
    },
    {
      img: '2.png',
      type: [
        { icon: 'spicy.png', name: 'SPICY', color: '#ec672e' },
        { icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' },
      ],
      name: 'PaNas Spesial Ayam Gulai',
      price: 'Rp.49.000',
    },
    {
      img: '3.png',
      type: [
        { icon: 'spicy.png', name: 'SPICY', color: '#ec672e' },
        { icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' },
      ],
      name: 'Double McSpicy®',
      price: 'Rp.39.500',
    },
    {
      img: '4.png',
      type: [{ icon: 'beef.png', name: 'BEEF', color: '#997752' }],
      name: 'Big Mac®',
      price: 'Rp.41.500',
    },
    {
      img: '5.png',
      type: [{ icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' }],
      name: 'McNuggets® 9pcs',
      price: 'Rp.43.500',
    },
  ];
  const menu = [
    {
      img: '1.png',
      name: ['MAINS'],
      sub: 'Greater selection. Greater satisfaction.',
      menus: [
        {
          type: [{ icon: 'chicken.png', name: 'EGG', color: '#f19839' }],
          name: 'PaNas 1 Medium',
          img: 'mains/1.png',
          price: 'Mulai Rp.38.000',
        },
        {
          type: [{ icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' }],
          name: 'PaNas 2 Medium',
          img: 'mains/2.png',
          price: 'Mulai Rp.50.000',
        },
        {
          type: [{ icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' }],
          name: 'PaNas Spesial Medium',
          img: 'mains/3.png',
          price: 'Mulai Rp.46.000',
        },
        {
          type: [{ icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' }],
          name: 'PaMer 5 Krispy Medium',
          img: 'mains/4.png',
          price: 'Mulai Rp.125.000',
        },
        {
          type: [{ icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' }],
          name: 'PaMer 7 Krispy Medium',
          img: 'mains/5.png',
          price: 'Mulai Rp.180.000',
        },
        {
          type: [
            { icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' },
            { icon: 'chicken.png', name: 'EGG', color: '#f19839' },
          ],
          name: 'PaNas 1 Ayam McD Gulai',
          img: 'mains/6.png',
          price: 'Mulai Rp.53.000',
        },
        {
          type: [
            { icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' },
            { icon: 'chicken.png', name: 'EGG', color: '#f19839' },
          ],
          name: 'PaNas 2 Ayam McD Gulai',
          img: 'mains/7.png',
          price: 'Mulai Rp.53.000',
        },
        {
          type: [
            { icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' },
            { icon: 'chicken.png', name: 'EGG', color: '#f19839' },
          ],
          name: 'PaNas Spesial Ayam Gulai',
          img: 'mains/8.png',
          price: 'Mulai Rp.49.000',
        },
        {
          type: [
            { icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' },
            { icon: 'chicken.png', name: 'EGG', color: '#f19839' },
          ],
          name: 'PaMer 5 Ayam McD Gulai',
          img: 'mains/9.png',
          price: 'Mulai Rp.135.000',
        },
        {
          type: [
            { icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' },
            { icon: 'chicken.png', name: 'EGG', color: '#f19839' },
          ],
          name: 'PaMer 7 Ayam McD Gulai',
          img: 'mains/9.png',
          price: 'Mulai Rp.190.000',
        },
        {
          type: [
            { icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' },
            { icon: 'chicken.png', name: 'EGG', color: '#f19839' },
          ],
          name: 'Double McSpicy®',
          img: 'mains/9.png',
          price: 'Mulai Rp.39.500',
        },
        {
          type: [{ icon: 'beef.png', name: 'BEEF', color: '#997752' }],
          name: 'Big Mac®',
          img: 'mains/9.png',
          price: 'Mulai Rp.41.000',
        },
      ],
    },
    {
      img: '2.png',
      name: ['BREAKFAST', '(7AM - 11AM)'],
      sub: 'Enjoy your morning with the best choice.',
      menus: [
        {
          type: [{ icon: 'chicken.png', name: 'EGG', color: '#f19839' }],
          name: 'Egg and Cheese Muffin',
          img: '1.png',
          price: 'Mulai Rp.19.780',
        },
        {
          type: [{ icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' }],
          name: 'Chicken Muffin',
          img: '2.png',
          price: 'Mulai Rp.15.800',
        },
      ],
    },
    { img: '3.png', name: ['HAPPY MEALS'] },
    { img: '4.png', name: ['DESSERTS'] },
    { img: '5.png', name: ['BEVERAGES'] },
  ];

  return (
    <Box id={'appContainer'} pb={'72px'} position={'relative'}>
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
          <HStack p={'8px'} className={'bs'} borderRadius={'10px'}>
            <Text fontSize={'12px'}>
              Perumaham Villa Durian Banyumanik. Kav 21
            </Text>
            <Icon as={KeyboardArrowDownIcon} />
          </HStack>
        </VStack>

        <VStack gap={'4px'} alignItems={'flex-start'} mb={'24px'}>
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

      <Box
        scrollSnapType={'x mandatory'}
        w={'100%'}
        overflow={'auto'}
        pb={'14px'}
      >
        <HStack w={'max-content'} px={'32px'}>
          {featuredImgSrc?.map((i, index) => {
            return (
              <Box borderRadius={8} key={index} scrollSnapAlign={'center'}>
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

      <Text
        className={'tw'}
        px={'32px'}
        fontWeight={'bold'}
        fontSize={'18px'}
        mb={'8px'}
      >
        Top Items
      </Text>

      <Box
        scrollSnapType={'x mandatory'}
        w={'100%'}
        overflow={'auto'}
        pb={'14px'}
      >
        <HStack w={'max-content'} px={'32px'}>
          {topItems?.map((i, index) => {
            return (
              <Box
                key={index}
                scrollSnapAlign={'center'}
                borderRadius={'10px'}
                className={'bs'}
              >
                <Image
                  src={'./asset/topItems/' + i?.img}
                  w={'256px'}
                  objectFit={'cover'}
                  borderRadius={'10px 10px 0 0'}
                />
                <Box w={'100%'} p={'8px'}>
                  <HStack>
                    {i?.type?.map((t, tIndex) => {
                      return (
                        <HStack key={tIndex} gap={1}>
                          <Image
                            w={t?.icon === 'spicy.png' ? '20px' : '16px'}
                            src={'./asset/icon/' + t?.icon}
                          />
                          <Text
                            className={'tw'}
                            fontWeight={'bold'}
                            fontSize={'14px'}
                            color={t?.color}
                          >
                            {t?.name}
                          </Text>
                        </HStack>
                      );
                    })}
                  </HStack>
                  <Text
                    className={'tw'}
                    px={'4px'}
                    fontWeight={'bold'}
                    fontSize={'18px'}
                  >
                    PaNas 2 With Rice
                  </Text>
                  <Text className={'tw'} px={'4px'} fontSize={'14px'}>
                    From Rp.50.000
                  </Text>
                </Box>
              </Box>
            );
          })}
        </HStack>
      </Box>

      <Text
        className={'tw'}
        lineHeight={1}
        px={'32px'}
        fontWeight={'bold'}
        fontSize={'18px'}
      >
        Menu
      </Text>
      <Text px={8} mb={'8px'}>
        Something for everyone
      </Text>

      <Tabs colorScheme="pr">
        <TabList
          scrollSnapType={'x mandatory'}
          overflow={'auto'}
          h={'198px'}
          px={8}
          gap={4}
          borderBottom={0}
        >
          {menu?.map((m, index) => {
            return (
              <Tab
                scrollSnapAlign={'center'}
                key={index}
                p={0}
                flexShrink={0}
                h={'max-content'}
              >
                <VStack h={'178px'} gap={0}>
                  <Image
                    w={'140px'}
                    h={'128px'}
                    flexShrink={0}
                    src={'./asset/menu/' + m?.img}
                  />
                  <VStack
                    justifyContent={'center'}
                    h={'100%'}
                    gap={0}
                    lineHeight={'130%'}
                    fontSize={'14px'}
                    fontWeight={700}
                  >
                    {m?.name?.map((n, mIndex) => {
                      return (
                        <Text key={mIndex} color={'black'} opacity={0.8}>
                          {n}
                        </Text>
                      );
                    })}
                  </VStack>
                </VStack>
              </Tab>
            );
          })}
        </TabList>

        <TabPanels px={8}>
          {menu?.map((m, index) => {
            return (
              <TabPanel key={index} p={0} pt={4}>
                <HStack alignItems={'flex-end'}>
                  {m?.name?.map((n, nIndex) => {
                    return (
                      <Text
                        key={nIndex}
                        className="tw"
                        lineHeight={1}
                        fontWeight={700}
                        fontSize={nIndex === 0 ? '36px' : '16px'}
                      >
                        {n}
                      </Text>
                    );
                  })}
                </HStack>
                <Text>{m?.sub}</Text>

                <Box pt={2}>
                  {m?.menus?.map((mm, mmIndex) => {
                    return (
                      <HStack
                        key={mmIndex}
                        justifyContent={'space-between'}
                        py={4}
                        borderBottom={
                          mmIndex !== m.menus?.length - 1 &&
                          '1px solid var(--gl)'
                        }
                      >
                        <Box>
                          <HStack>
                            {mm?.type?.map((t, tIndex) => {
                              return (
                                <HStack key={tIndex} gap={1}>
                                  <Image
                                    w={
                                      t?.icon === 'spicy.png' ? '20px' : '16px'
                                    }
                                    src={'./asset/icon/' + t?.icon}
                                  />
                                  <Text
                                    className="tw"
                                    fontSize={'14px'}
                                    fontWeight={'bold'}
                                    color={t?.color}
                                  >
                                    {t?.name}
                                  </Text>
                                </HStack>
                              );
                            })}
                          </HStack>

                          <Text
                            className="tw"
                            fontWeight={700}
                            fontSize={'18px'}
                            mb={4}
                          >
                            {mm?.name}
                          </Text>

                          <Text fontSize={'14px'}>{mm?.price}</Text>
                        </Box>

                        <Image w={'100px'} src={'./asset/menu/' + mm?.img} />
                      </HStack>
                    );
                  })}
                </Box>
              </TabPanel>
            );
          })}
        </TabPanels>
      </Tabs>
    </Box>
  );
}
