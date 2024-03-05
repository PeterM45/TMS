// Chakra imports
import {
  Flex,
  Icon,
  Text,
  useColorModeValue,
  IconButton,
} from '@chakra-ui/react';

// Assets
import {
  MdMessage,
  MdDirectionsBoat,
  MdAirplaneTicket,
  MdBookOnline,
} from 'react-icons/md';

import { GoPackageDependents } from 'react-icons/go';

// Custom components
import Card from 'components/card/Card';

// Assets

export default function OverallRevenue(props: { [x: string]: any }) {
  const { ...rest } = props;
  //eslint-disable-next-line
  // Chakra Color Mode
  const iconColor = useColorModeValue('brand.500', 'white');
  const greenIcon = useColorModeValue('green.500', 'white');
  const redIcon = useColorModeValue('red.500', 'white');
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
  const boxBg = useColorModeValue('secondaryGray.300', 'whiteAlpha.100');
  const shadow = useColorModeValue(
    '18px 17px 40px 4px rgba(112, 144, 176, 0.1)',
    'unset',
  );

  // Chakra Color Mode
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  return (
    <Card
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      w="100%"
      mb={{ base: '20px', lg: '0px' }}
      {...rest}
    >
      <Flex justify="space-between" px="20px" pt="5px" w="100%">
        <Flex align="center" w="100%">
          <Flex flexDirection="column" me="20px">
            <Text
              color={textColor}
              fontSize="20px"
              fontWeight="700"
              lineHeight="100%"
              marginBottom="30px"
            >
              Transport Management System
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        direction="column"
        bg={boxBg}
        p="16px 20px"
        borderRadius="14px"
        mb="38px"
      >
        <Text fontSize="sm" fontWeight="700" color={textColor}>
          Current Version v1.0.0: New Main Dashboard
        </Text>
        <Text fontSize="sm" fontWeight="500" color="secondaryGray.600">
          This refreshed look makes it easier for admins to see all of their
          information through a sleek and modern design.
        </Text>
      </Flex>
      <Flex mx="auto" mb="40px" maxW="100%">
        <Flex
          direction="column"
          align="center"
          me={{ base: '22px', md: '40px', '2xl': '36px' }}
        >
          <a href="/admin/quotes">
            <IconButton
              aria-label="Transfer"
              borderRadius="50%"
              bg={bgIconButton}
              _hover={bgIconHover}
              _active={bgIconFocus}
              _focus={bgIconFocus}
              w="56px"
              h="56px"
              mb="5px"
              boxShadow={shadow}
              icon={<Icon as={MdMessage} color={iconColor} w="24px" h="24px" />}
            />
          </a>
          <Text fontSize="sm" fontWeight="500" color={textColor}>
            Quotes
          </Text>
        </Flex>
        <Flex
          direction="column"
          align="center"
          me={{ base: '22px', md: '40px', '2xl': '36px' }}
        >
          <a href="/admin/shipments/view-shipments">
            <IconButton
              aria-label="Top"
              borderRadius="50%"
              bg={bgIconButton}
              _hover={bgIconHover}
              _active={bgIconFocus}
              _focus={bgIconFocus}
              w="56px"
              h="56px"
              mb="5px"
              boxShadow={shadow}
              icon={
                <Icon
                  as={MdDirectionsBoat}
                  color={yellowIcon}
                  w="24px"
                  h="24px"
                />
              }
            />
          </a>
          <Text fontSize="sm" fontWeight="500" color={textColor}>
            Shipments
          </Text>
        </Flex>
        <Flex
          direction="column"
          align="center"
          me={{ base: '22px', md: '40px', '2xl': '36px' }}
        >
          <a href="admin/trackings">
            <IconButton
              aria-label="Bills"
              borderRadius="50%"
              bg={bgIconButton}
              _hover={bgIconHover}
              _active={bgIconFocus}
              _focus={bgIconFocus}
              w="56px"
              h="56px"
              mb="5px"
              boxShadow={shadow}
              icon={
                <Icon
                  as={MdAirplaneTicket}
                  color={greenIcon}
                  w="24px"
                  h="24px"
                />
              }
            />
          </a>
          <Text fontSize="sm" fontWeight="500" color={textColor}>
            Trackings
          </Text>
        </Flex>
        <Flex direction="column" align="center">
          <a href="admin/manifest">
            <IconButton
              aria-label="More"
              borderRadius="50%"
              bg={bgIconButton}
              _hover={bgIconHover}
              _active={bgIconFocus}
              _focus={bgIconFocus}
              w="56px"
              h="56px"
              mb="5px"
              boxShadow={shadow}
              icon={
                <Icon as={MdBookOnline} color={redIcon} w="24px" h="24px" />
              }
            />
          </a>
          <Text fontSize="sm" fontWeight="500" color={textColor}>
            Manifest
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
