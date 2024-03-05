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
import { Flex } from '@chakra-ui/react';
import Card from 'components/card/Card';

import SearchTableOrders from 'views/admin/main/trackings/components/SearchTableOrders';
import tableDataOrders from 'views/admin/main/trackings/variable/tableDataOrders';

export default function SearchUser() {
  return (
    <Flex
      direction="column"
      overflowX="auto"
      maxWidth="100%"
      pt={{ sm: '125px', lg: '75px' }}
    >
      <Card px="0px" maxWidth="100%">
        <SearchTableOrders tableData={tableDataOrders} />
      </Card>
    </Flex>
  );
}
