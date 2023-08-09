import React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MopedIcon from '@mui/icons-material/Moped';
import ChatIcon from '@mui/icons-material/Chat';

import {
  Box,
  HStack,
  Icon,
  IconButton,
  Image,
  Text,
  Button,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Orderend() {
  const navigate = useNavigate();

  return (
    <Box>
      <HStack p={8} pb={6} w={'100%'}>
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

      <Text px={8} fontWeight={700} className="tw" fontSize={'36px'}>
        ORDER CONFIRMED
      </Text>
      <Text px={8} mb={8}>
        Your McDelivery is on it’s way!
      </Text>

      <Image w={'180px'} mx={'auto'} src="./asset/orderend.png" mb={8} />

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

      <Box px={8} mb={4}>
        <Text fontSize={'12px'}>Order Reference No.</Text>
        <Text fontSize={'14px'} fontWeight={700}>
          VH-DD/MM/YYYY-##
        </Text>
      </Box>

      <Box px={8} mb={8}>
        <Text fontSize={'12px'}>Total</Text>
        <Text fontSize={'24px'} lineHeight={1} fontWeight={700}>
          RP. 30.000,00
        </Text>
      </Box>

      <Box px={8} py={3} bgImage={'./asset/bgKuningLurus.png'}>
        <Text fontSize={'14px'} fontWeight={700} mb={3}>
          NEED HELP WITH YOUR ORDER?
        </Text>

        <Button
          className="bs tw"
          rightIcon={<Icon ml={4} as={ChatIcon} />}
          fontSize={'20px'}
          w={'100%'}
          h={'54px'}
          bg={'white'}
          color={'black'}
          mb={4}
        >
          CONFIRM ORDER
        </Button>

        <Button
          className="bs tw"
          rightIcon={<Icon ml={4} as={MopedIcon} />}
          onClick={() => {
            navigate('/deals');
          }}
          colorScheme="pr"
          fontSize={'20px'}
          w={'100%'}
          h={'54px'}
          mb={8}
          color={'white'}
        >
          MCDELIVERY HOME
        </Button>
      </Box>
    </Box>
  );
}
