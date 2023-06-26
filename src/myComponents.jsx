import { useLocation } from 'react-router-dom';

import StarBorderIcon from '@mui/icons-material/StarBorder';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

import { HStack, Icon, Link, VStack, Text } from '@chakra-ui/react';

const Nav = props => {
  const navItems = [
    { name: 'Deals', icon: StarBorderIcon, link: '/deals' },
    {
      name: 'McDelivery',
      icon: DeliveryDiningOutlinedIcon,
      link: '/mcdelivery',
    },
    { name: 'Location', icon: FmdGoodOutlinedIcon, link: '' },
    { name: 'More', icon: MoreHorizOutlinedIcon, link: '' },
  ];
  const location = useLocation();
  const activeNav = location.pathname;

  return (
    <HStack className={'nav'} gap={null}>
      {navItems?.map((n, index) => {
        return (
          <Link
            textDecoration={'none !important'}
            key={index}
            href={n?.link && n?.link}
          >
            <VStack
              className={activeNav === n?.link && 'selectedNav'}
              h={'100%'}
              p={'16px 32px'}
              gap={null}
            >
              <Icon as={n?.icon} />
              <Text className={'tw'} fontSize={'12px'}>
                {n?.name}
              </Text>
            </VStack>
          </Link>
        );
      })}
    </HStack>
  );
};

export { Nav };
