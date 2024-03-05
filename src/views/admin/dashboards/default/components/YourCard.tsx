import React, { useState } from 'react';

// Chakra imports
import {
  Flex,
  Box,
  Button,
  IconButton,
  Icon,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
} from '@chakra-ui/react';

// Custom components
import Card from 'components/card/Card';
import Mastercard from 'components/card/Mastercard';
import Transaction from 'components/dataDisplay/Transaction';

// Assets
import {
  MdOutlineShoppingBasket,
  MdAddCircle,
  MdOutlineDirectionsBus,
  MdOutlineSubscriptions,
  MdLocalBar,
  MdOutlineWeekend,
  MdCached,
  MdAdd,
  MdAttachMoney,
  MdMoreHoriz,
} from 'react-icons/md';
import { RiNetflixFill } from 'react-icons/ri';

export default function YourCard(props: { [x: string]: any }) {
  const { ...rest } = props;

  let [tabState, setTabState] = useState('card1');

  // Chakra Color Mode
  const iconColor = useColorModeValue('brand.500', 'white');
  const greenIcon = useColorModeValue('green.500', 'white');
  const redIcon = useColorModeValue('red.500', 'white');
  const blueIcon = useColorModeValue('blue.500', 'white');
  const yellowIcon = useColorModeValue('yellow.500', 'white');
  const bgIconButton = useColorModeValue('white', 'whiteAlpha.100');
  const bgIconHover = useColorModeValue(
    { bg: 'gray.100' },
    { bg: 'whiteAlpha.50' },
  );
  const bgIconFocus = useColorModeValue(
    { bg: 'grey.100' },
    { bg: 'whiteAlpha.100' },
  );
  const bgButton = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const bgHover = useColorModeValue(
    { bg: 'secondaryGray.400' },
    { bg: 'whiteAlpha.50' },
  );
  const bgFocus = useColorModeValue(
    { bg: 'secondaryGray.400' },
    { bg: 'whiteAlpha.100' },
  );
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const shadow = useColorModeValue(
    '18px 17px 40px 4px rgba(112, 144, 176, 0.1)',
    'unset',
  );
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card {...rest}>
      <Text fontSize="xl" color={textColor} fontWeight="700" mb="34px">
        Shipments
      </Text>
      <Transaction
        mb="26px"
        name="10009475434"
        date="Out for Delivery"
        sum="01/29/24"
        icon={
          <Icon
            as={MdOutlineDirectionsBus}
            color={iconColor}
            w="20px"
            h="18px"
          />
        }
      />
      <Transaction
        mb="26px"
        name="10009475435"
        date="Dispatched"
        sum="01/29/24"
        icon={
          <Icon
            as={MdOutlineDirectionsBus}
            color={iconColor}
            w="20px"
            h="18px"
          />
        }
      />
      <Transaction
        mb="26px"
        name="10009475436"
        date="Order Created"
        sum="01/29/24"
        icon={
          <Icon
            as={MdOutlineDirectionsBus}
            color={iconColor}
            w="20px"
            h="18px"
          />
        }
      />
      <Transaction
        mb="26px"
        name="10009475437"
        date="Delivery Exception"
        sum="01/29/24"
        icon={
          <Icon
            as={MdOutlineDirectionsBus}
            color={iconColor}
            w="20px"
            h="18px"
          />
        }
      />
      <Transaction
        mb="26px"
        name="10009475438"
        date="Delivered"
        sum="01/29/24"
        icon={
          <Icon
            as={MdOutlineDirectionsBus}
            color={iconColor}
            w="20px"
            h="18px"
          />
        }
      />
      <Transaction
        mb="26px"
        name="10009475439"
        date="Delivered"
        sum="01/29/24"
        icon={
          <Icon
            as={MdOutlineDirectionsBus}
            color={iconColor}
            w="20px"
            h="18px"
          />
        }
      />
      <Transaction
        name="10009475440"
        date="Order Created"
        sum="01/29/24"
        icon={
          <Icon
            as={MdOutlineDirectionsBus}
            color={iconColor}
            w="20px"
            h="18px"
          />
        }
      />
    </Card>
  );
}
