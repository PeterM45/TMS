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
import { Flex, Grid, useColorModeValue } from '@chakra-ui/react';
// Custom components
import Balance from 'views/admin/dashboards/default/components/Balance';
import DailyTraffic from 'views/admin/dashboards/default/components/DailyTraffic';
import { VSeparator } from 'components/separator/Separator';
import OverallRevenue from 'views/admin/dashboards/default/components/OverallRevenue';
import ProfitEstimation from 'views/admin/dashboards/default/components/ProfitEstimation';
import ProjectStatus from 'views/admin/dashboards/default/components/ProjectStatus';
import YourCard from 'views/admin/dashboards/default/components/YourCard';
import tableDataMostVisited from 'views/admin/dashboards/default/variables/tableDataMostVisited';

export default function Default() {
  // Chakra Color Mode
  const paleGray = useColorModeValue('#DFE6F6', 'whiteAlpha.100');
  return (
    <Flex
      direction={{ base: 'column', xl: 'row' }}
      pt={{ base: '130px', md: '80px', xl: '80px' }}
      w="100%" // Ensuring the Flex container takes up the full width
    >
      {/* Grid for the 2x2 components, taking 2/3 of the width */}
      <Grid
        gridTemplateColumns="repeat(2, 1fr)"
        gap="20px"
        mb="20px"
        w="66%" // Two-thirds of the width
      >
        {/* 2x2 Grid Components */}
        <Flex>
          <OverallRevenue />
        </Flex>
        <Flex>
          <Balance />
        </Flex>
        <Flex>
          <DailyTraffic />
        </Flex>
        <Flex>
          <ProfitEstimation />
        </Flex>
      </Grid>

      {/* YourCard (Shipments) Component, taking 1/3 of the width */}
      <YourCard
        maxW="33%" // One-third of the width
        maxH={{ base: '100%', xl: '1170px', '2xl': '100%' }}
      />
    </Flex>
  );
}
