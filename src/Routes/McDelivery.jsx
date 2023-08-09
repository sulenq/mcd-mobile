import React, { useState } from 'react';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

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
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  Badge,
  Button,
} from '@chakra-ui/react';

import { Nav } from '../myComponents';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ mm, m, mmIndex }) => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [kustomisasi, setKustomisasi] = useState({
    ayam: '',
    rice: '',
    drink: '',
  });
  const cAyam = [
    { img: 'ayam/1.png', name: 'Reguler Chicken' },
    { img: 'ayam/2.png', name: 'Large Chicken' },
  ];
  const cRice = [
    { img: 'rice/nasi.png', name: 'Medium Rice' },
    { img: 'rice/nasi.png', name: 'Large Rice', additional: '+Rp.5.000' },
  ];
  const cDrink = [
    { img: 'drink/1.png', name: 'Fruit Tea Lemon', additional: '+Rp.0' },
    { img: 'drink/2.png', name: 'Coca-Cola® Large', additional: '+Rp.0' },
    { img: 'drink/3.png', name: 'Fanta® Large', additional: '+Rp.0' },
  ];

  return (
    <>
      <HStack
        cursor={'pointer'}
        onClick={onOpen}
        justifyContent={'space-between'}
        py={4}
        borderBottom={mmIndex !== m.menus?.length - 1 && '1px solid var(--gl)'}
      >
        <Box>
          <HStack>
            {mm?.type?.map((t, tIndex) => {
              return (
                <HStack key={tIndex} gap={1}>
                  <Image
                    w={t?.icon === 'spicy.png' ? '20px' : '16px'}
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

          <Text className="tw" fontWeight={700} fontSize={'18px'} mb={4}>
            {mm?.name}
          </Text>

          <Text fontSize={'14px'}>{mm?.price}</Text>
        </Box>

        <Image w={'100px'} src={'./asset/menu/' + mm?.img} />
      </HStack>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size={'full'}
        scrollBehavior="inside"
        motionPreset="slideInRight"
      >
        <ModalContent>
          <ModalBody className="modalProps" px={0}>
            <Box p={4}>
              <IconButton
                onClick={onClose}
                color={'black'}
                icon={<Icon as={ArrowBackIcon} />}
                borderRadius={'100%'}
                colorScheme="pa"
              />
            </Box>
            <Image px={4} w={'100%'} src={'./asset/menu/' + mm?.img} />

            <HStack px={8} justifyContent={'space-between'} mb={4}>
              <Text
                className="tw"
                lineHeight={1.3}
                fontWeight={700}
                fontSize={'36px'}
                w={'50%'}
                noOfLines={2}
              >
                {mm?.name}
              </Text>

              <VStack alignItems={'flex-end'} gap={0}>
                <HStack>
                  {mm?.type?.map((t, tIndex) => {
                    return (
                      <HStack key={tIndex} gap={1}>
                        <Image
                          w={t?.icon === 'spicy.png' ? '20px' : '16px'}
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

                <Text fontSize={'18px'} fontWeight={700}>
                  {mm?.price}
                </Text>
              </VStack>
            </HStack>

            <Text
              px={8}
              fontSize={'12px'}
              pb={4}
              mb={4}
              borderBottom={'1px solid var(--gl)'}
            >
              Ayam Goreng khas McDonald's dengan nasi hangat dan tambahan
              scrambled egg serta minuman FruitTea lemon yang menyegarkan.
              Tersedia dalam pilihan Ayam Krispy atau Spicy
            </Text>

            {/* CHICKEN */}
            <HStack
              px={8}
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              mb={2}
            >
              <Box>
                <Text
                  className="tw"
                  lineHeight={1}
                  fontSize={'14px'}
                  fontWeight={700}
                >
                  Chicken
                </Text>
                <Text color={'pa.500'} fontSize={'14px'} fontWeight={700}>
                  SELECT ONE
                </Text>
              </Box>

              <Badge colorScheme="blue" borderRadius={8} px={2}>
                1 REQUIRED
              </Badge>
            </HStack>

            <HStack pt={1} px={8} alignItems={'flex-start'} gap={4} mb={4}>
              {cAyam?.map((c, index) => {
                return (
                  <VStack
                    cursor={'pointer'}
                    key={index}
                    onClick={() => {
                      setKustomisasi(ps => ({ ...ps, ayam: c?.name }));
                    }}
                    className="bs"
                    borderRadius={10}
                    w={'132px'}
                    h={'200px'}
                    overflow={'hidden'}
                    bg={kustomisasi?.ayam === c?.name && 'pa.500'}
                  >
                    <Box
                      boxShadow={
                        kustomisasi?.ayam === c?.name && '0 0 5px var(--gray)'
                      }
                      p={'10px'}
                      w={'100%'}
                      h={'124px'}
                      borderRadius={10}
                      bg={'white'}
                      flexShrink={0}
                    >
                      <Image
                        h={'94px'}
                        mx={'auto'}
                        src={'./asset/menu/kustomisasi/' + c?.img}
                      />
                    </Box>

                    <Box p={'10px'} w={'100%'} h={'100%'}>
                      <Text fontSize={'14px'} fontWeight={600}>
                        {c?.name}
                      </Text>
                    </Box>
                  </VStack>
                );
              })}
            </HStack>

            {/* RICE */}
            <HStack
              px={8}
              opacity={!kustomisasi?.ayam && 0.3}
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              mb={2}
            >
              <Box>
                <Text
                  className="tw"
                  lineHeight={1}
                  fontSize={'14px'}
                  fontWeight={700}
                >
                  Rice
                </Text>
                <Text color={'pa.500'} fontSize={'14px'} fontWeight={700}>
                  SELECT ONE
                </Text>
              </Box>

              <Badge colorScheme="blue" borderRadius={8} px={2}>
                1 REQUIRED
              </Badge>
            </HStack>

            <HStack
              px={8}
              opacity={!kustomisasi?.ayam && 0.3}
              pointerEvents={!kustomisasi?.ayam && 'none'}
              alignItems={'flex-start'}
              gap={4}
              mb={4}
              pt={1}
            >
              {cRice?.map((c, index) => {
                return (
                  <VStack
                    cursor={'pointer'}
                    key={index}
                    onClick={() => {
                      setKustomisasi(ps => ({ ...ps, rice: c?.name }));
                    }}
                    className="bs"
                    borderRadius={10}
                    w={'132px'}
                    h={'200px'}
                    overflow={'hidden'}
                    bg={kustomisasi?.rice === c?.name && 'pa.500'}
                  >
                    <Box
                      boxShadow={
                        kustomisasi?.rice === c?.name && '0 0 5px var(--gray)'
                      }
                      p={'10px'}
                      w={'100%'}
                      h={'124px'}
                      borderRadius={10}
                      bg={'white'}
                      flexShrink={0}
                    >
                      <Image
                        h={'94px'}
                        mx={'auto'}
                        src={'./asset/menu/kustomisasi/' + c?.img}
                      />
                    </Box>

                    <Box p={'10px'} w={'100%'} h={'100%'}>
                      <Text fontSize={'14px'} fontWeight={600}>
                        {c?.name}
                      </Text>
                      <Text fontSize={'14px'} mt={2} fontWeight={600}>
                        {c?.additional}
                      </Text>
                    </Box>
                  </VStack>
                );
              })}
            </HStack>

            {/* DRINK */}
            <HStack
              px={8}
              opacity={!kustomisasi?.rice && 0.3}
              justifyContent={'space-between'}
              alignItems={'flex-start'}
              mb={2}
            >
              <Box>
                <Text
                  className="tw"
                  lineHeight={1}
                  fontSize={'14px'}
                  fontWeight={700}
                >
                  Drink
                </Text>
                <Text color={'pa.500'} fontSize={'14px'} fontWeight={700}>
                  SELECT ONE
                </Text>
              </Box>

              <Badge colorScheme="blue" borderRadius={8} px={2}>
                1 REQUIRED
              </Badge>
            </HStack>

            <Box px={8} overflow={'auto'}>
              <HStack
                opacity={!kustomisasi?.rice && 0.3}
                pointerEvents={!kustomisasi?.rice && 'none'}
                alignItems={'flex-start'}
                gap={4}
                pb={4}
                pt={1}
                mb={4}
                w={'max-content'}
              >
                {cDrink?.map((c, index) => {
                  return (
                    <VStack
                      cursor={'pointer'}
                      key={index}
                      onClick={() => {
                        setKustomisasi(ps => ({ ...ps, drink: c?.name }));
                      }}
                      className="bs"
                      borderRadius={10}
                      w={'132px'}
                      h={'224px'}
                      overflow={'hidden'}
                      bg={kustomisasi?.drink === c?.name && 'pa.500'}
                    >
                      <Box
                        boxShadow={
                          kustomisasi?.drink === c?.name &&
                          '0 0 5px var(--gray)'
                        }
                        p={'10px'}
                        w={'100%'}
                        h={'114px'}
                        borderRadius={10}
                        bg={'white'}
                        flexShrink={0}
                      >
                        <Image
                          h={'84px'}
                          mx={'auto'}
                          src={'./asset/menu/kustomisasi/' + c?.img}
                        />
                      </Box>

                      <VStack
                        justifyContent={'space-between'}
                        p={'10px'}
                        w={'100%'}
                        h={'100%'}
                      >
                        <Text noOfLines={2} fontSize={'14px'} fontWeight={600}>
                          {c?.name}
                        </Text>
                        <Text fontSize={'14px'} mt={2} fontWeight={600}>
                          {c?.additional}
                        </Text>
                      </VStack>
                    </VStack>
                  );
                })}
              </HStack>
            </Box>

            {/* FOOTER */}
            <HStack
              px={8}
              py={4}
              opacity={!kustomisasi?.drink && 0.3}
              pointerEvents={!kustomisasi?.drink && 'none'}
            >
              <HStack mr={4}>
                <IconButton
                  size={'xs'}
                  borderRadius={'100%'}
                  colorScheme="pr"
                  variant={'outline'}
                  border={'2px'}
                  icon={<Icon fontSize={'16px'} as={RemoveIcon} />}
                />
                <Text>1</Text>
                <IconButton
                  size={'xs'}
                  borderRadius={'100%'}
                  colorScheme="pr"
                  icon={<Icon fontSize={'16px'} as={AddIcon} />}
                />
              </HStack>

              <Button
                onClick={() => {
                  navigate('/checkout');
                }}
                colorScheme="pa"
                color={'black'}
                w={'100%'}
              >
                {`ADD TO CART Rp.${kustomisasi?.drink ? '51.000' : '0'}`}
              </Button>
            </HStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

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
          img: 'mains/10.png',
          price: 'Mulai Rp.190.000',
        },
        {
          type: [
            { icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' },
            { icon: 'chicken.png', name: 'EGG', color: '#f19839' },
          ],
          name: 'Double McSpicy®',
          img: 'mains/11.png',
          price: 'Mulai Rp.39.500',
        },
        {
          type: [{ icon: 'beef.png', name: 'BEEF', color: '#997752' }],
          name: 'Big Mac®',
          img: 'mains/12.png',
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
          img: 'breakfast/1.png',
          price: 'Mulai Rp.19.780',
        },
        {
          type: [{ icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' }],
          name: 'Chicken Muffin',
          img: 'breakfast/2.png',
          price: 'Mulai Rp.15.800',
        },
        {
          type: [{ icon: 'beef.png', name: 'BEEF', color: '#997752' }],
          name: 'Sausage Muffin',
          img: 'breakfast/3.png',
          price: 'Mulai Rp.17.950',
        },
        {
          type: [{ icon: 'beef.png', name: 'BEEF', color: '#997752' }],
          name: 'Sausage Wrap',
          img: 'breakfast/4.png',
          price: 'Mulai Rp.15.550',
        },
        {
          type: [
            { icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' },
            { icon: 'chicken.png', name: 'EGG', color: '#f19839' },
          ],
          name: 'Big Breakfast',
          img: 'breakfast/5.png',
          price: 'Mulai Rp.31.364',
        },
        {
          type: [
            { icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' },
            { icon: 'chicken.png', name: 'EGG', color: '#f19839' },
          ],
          name: 'Nasi Uduk McD',
          img: 'breakfast/6.png',
          price: 'Mulai Rp.21.500',
        },
        {
          type: [{ icon: 'chicken.png', name: 'CHICKEN', color: '#f19839' }],
          name: 'Bubur Ayam McD',
          img: 'breakfast/7.png',
          price: 'Mulai Rp.21.500',
        },
      ],
    },
    { img: '3.png', name: ['HAPPY MEALS'] },
    { img: '4.png', name: ['DESSERTS'] },
    { img: '5.png', name: ['BEVERAGES'] },
  ];

  return (
    <Box id={'appContainer'} pb={'72px'} position={'relative'}>
      <Image
        position={'absolute'}
        w={'100%'}
        zIndex={-1}
        top={'220px'}
        left={0}
        src="./asset/bgKuning.png"
      />

      <Image
        position={'fixed'}
        w={'100%'}
        // h={'100%'}
        zIndex={-2}
        top={0}
        left={0}
        src={'./asset/bg1.png'}
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

          <HStack bg={'white'} p={'8px'} className={'bs'} borderRadius={'10px'}>
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

      {/* TOP ITEMS */}
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
                bg={'white'}
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
                    {i?.name}
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
                borderRadius={'16px 16px 0 0'}
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
                      <MenuItem key={mmIndex} mm={mm} m={m} mmIndex={mmIndex} />
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
