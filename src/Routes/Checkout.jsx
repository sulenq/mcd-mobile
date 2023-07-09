import React, { useState } from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MopedIcon from '@mui/icons-material/Moped';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';

import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  VStack,
  Button,
  Checkbox,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

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

      <Center w={'100%'} h={'100vh'} zIndex={2} position={'fixed'}>
        <HStack
          w={'360px'}
          bg={'white'}
          borderRadius={'10px'}
          justifyContent={'center'}
          p={'16px'}
          zIndex={1}
          position={'fixed'}
        >
          <Image src={'./asset/logo.png'} />
          <Text>Payment Proccessing...</Text>
        </HStack>
      </Center>
    </>
  );
};

export default function Checkout() {
  const navigate = useNavigate();
  const addons = [
    { name: 'McFlurry® with OREO', price: 'Rp. 13.000', img: '1.png' },
    { name: 'Strawberry Sundae', price: 'Rp. 12.000', img: '2.png' },
    { name: 'Hot Caramel Sundae', price: 'Rp. 12.000', img: '3.png' },
  ];

  const pm = [
    { img: '1.png', name: '**** **** **** 1454', exp: 'Expires 01/04' },
    { img: '2.png', name: '**** **** **** 8816', exp: 'Expires 30/08' },
    { img: '', name: 'Cash on Delivery', exp: '' },
  ];

  const [paying, setPaying] = useState(false);

  function confirmOrder() {
    setPaying(true);
    setTimeout(() => {
      navigate('/orderend');
    }, 3000);
  }

  return (
    <VStack gap={0}>
      {paying && <Loader />}

      <HStack p={8} pb={4} w={'100%'}>
        <IconButton
          icon={<Icon as={ArrowBackIcon} />}
          borderRadius={'100%'}
          colorScheme="pa"
          size={'sm'}
          color={'black'}
        />
        <Text ml={2} className="tw" fontSize={'24px'} fontWeight={700}>
          CHECK OUT
        </Text>
      </HStack>

      <Box w={'100%'} px={8}>
        <HStack
          alignItems={'flex-start'}
          p={2}
          className="bs"
          borderRadius={10}
        >
          <Image w={'32px'} src="./asset/place.png" />
          <Box>
            <Text fontSize={'12px'} mb={2}>
              Delivering From
            </Text>
            <Text fontSize={'14px'} fontWeight={700} mb={2}>
              MCDONALD'S ADA SWALAYAN SEMARANG
            </Text>
            <Text fontSize={'12px'} mb={2}>
              Jl. Setiabudi No. 221 - 225
            </Text>
            <HStack gap={1} opacity={0.6} fontSize={'12px'}>
              <Icon fontSize={'20px'} as={MopedIcon} />
              <Text>1.6 km, 31 mins</Text>
            </HStack>
          </Box>
        </HStack>
      </Box>

      <Center
        my={2}
        bg={'gray.100'}
        w={'36px'}
        h={'36px'}
        borderRadius={'100%'}
      >
        <Icon as={ArrowDownwardIcon} />
      </Center>

      <Box px={8} w={'100%'} mb={8}>
        <HStack
          bgImage={'./asset/bgKuningLurus.png'}
          bgSize={'cover'}
          //   bg={'pa.500'}
          alignItems={'flex-start'}
          p={2}
          className="bs"
          borderRadius={10}
        >
          <Image w={'32px'} src="./asset/home.png" />
          <Box>
            <Text color={'pr.500'} fontSize={'12px'} mb={2}>
              Delivering To
            </Text>
            <Text fontSize={'14px'} fontWeight={700} mb={2}>
              HOME
            </Text>
            <Text fontSize={'12px'} mb={2}>
              Perumahan Villa Durian Banyumanik. Kav 21
            </Text>
            <HStack gap={1} opacity={0.6} fontSize={'12px'}>
              <Text>ETA: 30 Minutes</Text>
            </HStack>
          </Box>
        </HStack>
      </Box>

      <HStack w={'100%'} px={8} justifyContent={'space-between'} mb={4}>
        <Text className="tw" fontSize={'18px'} fontWeight={700}>
          Order Summary
        </Text>
        <Button
          size={'sm'}
          colorScheme="pa"
          color={'black'}
          rightIcon={<Icon fontSize={'20px'} as={EditIcon} />}
          pr={3}
        >
          Edit
        </Button>
      </HStack>

      <HStack w={'100%'} px={8}>
        <HStack
          w={'100%'}
          pb={6}
          fontSize={'12px'}
          opacity={0.5}
          borderBottom={'1px solid var(--gl)'}
        >
          <Text w={'40px'} flexShrink={0}>
            Qty
          </Text>
          <Text>Item</Text>
          <Text
            justifySelf={'flex-end !important'}
            textAlign={'right'}
            w={'100px'}
            ml={'auto'}
            flexShrink={0}
          >
            Price
          </Text>
        </HStack>
      </HStack>

      <HStack w={'100%'} mt={8} px={8} mb={6}>
        <HStack
          w={'100%'}
          pb={8}
          fontSize={'12px'}
          borderBottom={'1px solid var(--gl)'}
          alignItems={'flex-start'}
        >
          <Box w={'40px'}>
            <Center
              p={0}
              h={'24px'}
              w={'24px'}
              borderRadius={5}
              border={'2px solid green'}
            >
              <Text fontSize={'14px'} color={'green'} flexShrink={0}>
                1
              </Text>
            </Center>
          </Box>

          <Box>
            <Text
              className="tw"
              lineHeight={1}
              mb={1}
              fontWeight={700}
              fontSize={'18px'}
            >
              PaNas Spesial
            </Text>
            <Text>Upsized Extra Value Meal</Text>
            <Text>French Fries (L) </Text>
            <Text>Coca-Cola® No Sugar (M)</Text>
          </Box>
          <Text
            fontWeight={700}
            fontSize={'18px'}
            textAlign={'right'}
            w={'100px'}
            flexShrink={0}
            ml={'auto'}
          >
            Rp51,000
          </Text>
        </HStack>
      </HStack>

      <Box
        w={'100%'}
        py={6}
        bgImage={'./asset/bgKuningLurus.png'}
        bgSize={'cover'}
      >
        <Text
          px={8}
          lineHeight={1}
          className="tw"
          fontSize={'18px'}
          fontWeight={700}
        >
          Add-Ons
        </Text>
        <Text px={8} mb={2}>
          Complete your meal
        </Text>
        <Box scrollSnapType={'x mandatory'} px={8} overflow={'auto'}>
          <HStack w={'max-content'} py={1}>
            {addons?.map((a, index) => {
              return (
                <HStack
                  key={index}
                  className="bs"
                  scrollSnapAlign={'center'}
                  h={'120px'}
                  p={4}
                  borderRadius={10}
                  bg={'white'}
                >
                  <Box>
                    <Text
                      lineHeight={1}
                      fontWeight={700}
                      fontSize={'18px'}
                      className="tw"
                      noOfLines={2}
                      mb={2}
                    >
                      {a?.name}
                    </Text>
                    <Text mb={2}>{a?.price}</Text>
                    <HStack lineHeight={1} color={'pr.500'}>
                      <Center bg={'pr.500'} borderRadius={'100%'}>
                        <Icon color={'white'} as={AddIcon} />
                      </Center>
                      <Text>Add to Order</Text>
                    </HStack>
                  </Box>
                  <Image w={'80px'} src={'./asset/addons/' + a?.img} />
                </HStack>
              );
            })}
          </HStack>
        </Box>
      </Box>

      <Box w={'100%'} p={'24px 32px'}>
        <HStack justifyContent={'space-between'} mb={4}>
          <Text>Subtotal:</Text>
          <Text fontWeight={700} fontSize={'18px'} className="tw">
            Rp.51,000
          </Text>
        </HStack>

        <HStack justifyContent={'space-between'} mb={4}>
          <Text>Delivery Charge:</Text>
          <Text fontWeight={700} fontSize={'18px'} className="tw">
            Rp.19,000
          </Text>
        </HStack>

        <HStack justifyContent={'space-between'} mb={4}>
          <Text>Total:</Text>
          <Text fontWeight={700} fontSize={'18px'} className="tw">
            Rp.70,000
          </Text>
        </HStack>

        <Text fontSize={'12px'}>
          Deals are automatically applied when applicable
        </Text>
      </Box>

      <Box w={'100%'} bg={'gray.100'}>
        <Text
          px={'32px'}
          pt={'24px'}
          fontWeight={700}
          fontSize={'18px'}
          className="tw"
        >
          Payment Method
        </Text>

        <Box scrollSnapType={'x mandatory'} w={'100%'} overflow={'auto'}>
          <HStack px={'32px'} w={'max-content'} pt={4} pb={1}>
            {pm?.map((p, index) => {
              return (
                <HStack
                  key={index}
                  scrollSnapAlign={'center'}
                  bg={'white'}
                  className="bs"
                  p={4}
                  borderRadius={10}
                >
                  <Center
                    bg={p?.name === 'Cash on Delivery' && 'green.500'}
                    p={'4px 12px'}
                    h={'35px'}
                    w={'56px'}
                    border={'1px solid var(--gray)'}
                    borderRadius={5}
                  >
                    {p?.name === 'Cash on Delivery' ? (
                      <Text
                        fontStyle={'italic'}
                        fontWeight={700}
                        color={'white'}
                        pr={1}
                      >
                        Cash
                      </Text>
                    ) : (
                      <Image w={'30px'} src={'./asset/pm/' + p?.img} />
                    )}
                  </Center>

                  <Box>
                    <Text fontSize={'12px'}>{p?.name}</Text>
                    <Text fontSize={'12px'}>{p?.exp}</Text>
                  </Box>

                  <Checkbox size={'lg'} ml={3} colorScheme="green" />

                  <Box h={'30px'} bg={'var(--gl)'} mx={3} w={'1px'}></Box>

                  <Text fontSize={'14px'} fontWeight={700} color={'pa.500'}>
                    EDIT
                  </Text>
                </HStack>
              );
            })}
          </HStack>
        </Box>

        <Box w={'100%'} px={8}>
          <Box pb={4} borderBottom={'1px solid var(--gl)'}>
            <Button rightIcon={<Icon as={AddIcon} />} colorScheme="pr">
              ADD PAYMENT METHOD
            </Button>
          </Box>
        </Box>

        <Box px={8} pt={10}>
          <HStack justifyContent={'space-between'} color={'pr.500'} pb={4}>
            <Text fontSize={'24px'} fontWeight={700} className="tw">
              TOTAL
            </Text>
            <Text fontSize={'24px'} fontWeight={700} className="tw">
              RP70.000
            </Text>
          </HStack>

          <Button
            className="bs tw"
            onClick={confirmOrder}
            fontSize={'20px'}
            w={'100%'}
            h={'54px'}
            colorScheme="pa"
            color={'black'}
            mb={8}
          >
            CONFIRM ORDER
          </Button>
        </Box>
      </Box>
    </VStack>
  );
}
