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
import { Box, Grid, useColorModeValue } from '@chakra-ui/react';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

import ShipmentNumber from 'views/admin/main/shipments/shippingDetails/components/ShipmentNumber';
import ShipmentDetails from 'views/admin/main/shipments/shippingDetails/components/ShipmentInfo';

export default function Invoice() {
  const textColor = useColorModeValue('gray.700', 'white');
  const bgButton = 'rgba(255,255,255,0.12)';
  const bgHover = { bg: 'whiteAlpha.50' };
  const bgFocus = { bg: 'rgba(255,255,255,0.12)' };

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Box>
      <Grid
        mb="20px"
        templateRows={{ base: '2.4fr 1fr', lg: '250px 600px' }} // this is very finiky (using px). might need to find a fix
        flexDirection="row"
        pt={{ base: '130px', md: '80px', xl: '80px' }}
      >
        <ShipmentNumber
          me="20px"
          gridArea={{ base: '1 / 1 / 2 / 3', lg: '1 / 1 / 2 / 2' }}
          ref={componentRef}
          handlePrint={handlePrint}
          textColor={textColor}
          bgButton={bgButton}
          bgHover={bgHover}
          bgFocus={bgFocus}
        />
        <ShipmentDetails />
      </Grid>
    </Box>
  );
}
