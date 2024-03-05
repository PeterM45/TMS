/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   ____  ____   ___  
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| |  _ \|  _ \ / _ \ 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || |  | |_) | |_) | | | |
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |  |  __/|  _ <| |_| |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___| |_|   |_| \_\\___/ 
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI Dashboard PRO - v1.0.0
=========================================================

* Product Page: https://www.horizon-ui.com/pro/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useColorModeValue,
  SimpleGrid,
  Select,
} from '@chakra-ui/react';

// Custom components
import Banner from 'views/admin/nfts/collection/components/Banner';
import ClientCard from 'components/card/ClientCard';
import { SearchBar } from 'views/admin/nfts/collection/components/Search';

// Assets
import imgClientOne from 'assets/img/account/InvoiceBg.png';
import NftBanner2 from 'assets/img/nfts/NftBanner2.png';

import { MdDashboard, MdApps } from 'react-icons/md';
export default function Collection() {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const buttonBg = useColorModeValue('transparent', 'navy.800');
  const hoverButton = useColorModeValue(
    { bg: 'gray.100' },
    { bg: 'whiteAlpha.100' },
  );
  const activeButton = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.200' },
  );
  // Chakra Color Mode
  return (
    <Box pt={{ base: '180px', md: '80px', xl: '80px' }}>
      <Flex w="100%">
        <SearchBar />
        <Select
          fontSize="sm"
          id="edit_product"
          variant="main"
          h="44px"
          maxH="44px"
          me={{ base: '10px', md: '20px' }}
        >
          <option value="single">Single Items</option>
          <option value="multiple">Multiple Items</option>
        </Select>
        <Select
          fontSize="sm"
          variant="main"
          h="44px"
          maxH="44px"
          me={{ base: '10px', md: '20px' }}
        >
          <option value="low_to_high">Low to high</option>
          <option value="high_to_low">High to low</option>
        </Select>
        <Button
          me={{ base: '10px', md: '20px' }}
          bg={buttonBg}
          border="1px solid"
          color="secondaryGray.600"
          borderColor={useColorModeValue('secondaryGray.100', 'whiteAlpha.100')}
          borderRadius="16px"
          _placeholder={{ color: 'secondaryGray.600' }}
          _hover={hoverButton}
          _active={activeButton}
          _focus={activeButton}
        >
          <Icon color={textColor} as={MdDashboard} />
        </Button>
        <Button
          bg={buttonBg}
          border="1px solid"
          color="secondaryGray.600"
          borderColor={useColorModeValue('secondaryGray.100', 'whiteAlpha.100')}
          borderRadius="16px"
          _placeholder={{ color: 'secondaryGray.600' }}
          _hover={hoverButton}
          _active={activeButton}
          _focus={activeButton}
        >
          <Icon color={textColor} as={MdApps} />
        </Button>
      </Flex>
      <Text
        mt="25px"
        mb="36px"
        color={textColor}
        fontSize="2xl"
        ms="24px"
        fontWeight="700"
      >
        Number of Clients (14)
      </Text>
      <SimpleGrid columns={{ base: 1, md: 2, xl: 4 }} gap="20px">
        <ClientCard
          name="Company"
          author="Company Canada"
          image={imgClientOne}
          currentbid="Added 2 weeks ago"
          download="#"
        />
        <ClientCard
          name="Company"
          author="Company Canada"
          image={imgClientOne}
          currentbid="Added 2 weeks ago"
          download="#"
        />
        <ClientCard
          name="Company"
          author="Company Canada"
          image={imgClientOne}
          currentbid="Added 2 weeks ago"
          download="#"
        />
        <ClientCard
          name="Company"
          author="Company Canada"
          image={imgClientOne}
          currentbid="Added 2 weeks ago"
          download="#"
        />
        <ClientCard
          name="Company"
          author="Company Canada"
          image={imgClientOne}
          currentbid="Added 2 weeks ago"
          download="#"
        />
        <ClientCard
          name="Company"
          author="Company Canada"
          image={imgClientOne}
          currentbid="Added 2 weeks ago"
          download="#"
        />
        <ClientCard
          name="Company"
          author="Company Canada"
          image={imgClientOne}
          currentbid="Added 2 weeks ago"
          download="#"
        />
        <ClientCard
          name="Company"
          author="Company Canada"
          image={imgClientOne}
          currentbid="Added 2 weeks ago"
          download="#"
        />
      </SimpleGrid>

      {/* Delete Product */}
    </Box>
  );
}
