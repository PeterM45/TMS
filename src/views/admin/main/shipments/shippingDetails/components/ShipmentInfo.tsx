// Chakra imports
import {
  Button,
  Flex,
  FormControl,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

import Card from 'components/card/Card';
import InputField from 'components/fields/InputField';
import TextField from 'components/fields/TextField';

export default function ShipmentDetails() {
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue('secondaryGray.900', 'white');
  const textColorSecondary = 'secondaryGray.600';
  return (
    // add in the purple header card from Receipt.tsx

    <FormControl>
      <Card>
        <Flex direction="column" mb="40px" ms="10px">
          <Text fontSize="xl" color={textColorPrimary} fontWeight="bold">
            Shipment Information
          </Text>
          <Text fontSize="md" color={textColorSecondary}>
            Edit info by overwriting a cell, and press save changes. Shipment info will be updated in the database.
          </Text>
        </Flex>

        <SimpleGrid
          columns={{ sm: 1, md: 3 }}
          spacing={{ base: '20px', xl: '20px' }}
        >
          <InputField
            mb="25px"  // margin bottom
            id="weight"
            label="Shipment Weight"
            placeholder="15lbs" // will data be written to here??
          />
          <InputField
            mb="25px"
            id="length"
            label="Shipment Length"
            placeholder="30cm"
          />
          <InputField
            mb="25px"
            id="width"
            label="Shipment Width"
            placeholder="12cm"
          />
          <InputField
            mb="25px"
            id="address"
            label="Shipping Address"
            placeholder="123 Imaginary Street"
          />
          <InputField
            mb="25px"
            id="postal"
            label="Address Postal Code"
            placeholder="L9E 1V7"
          />
          <InputField
            mb="25px"
            id="carrier"
            label="Shipment Carrier"
            placeholder="WS"
          />
          <InputField
            mb="25px"
            id="original_terminal"
            label="Shipment Original Terminal"
            placeholder="YOWSB"
          />
          <InputField
            mb="25px"
            id="dest_terminal"
            label="Shipment Destination Terminal"
            placeholder="YEG"
          />
          <InputField
            mb="25px"
            id="shipment_status"
            label="Shipment Status"
            placeholder="Arrived"
          />
          <InputField
            mb="25px"
            id="client"
            label="Client"
            placeholder="Canada Goose"
          />
          <InputField
            mb="25px"
            id="tracking_number"
            label="Shipment Tracking Number"
            placeholder="UPS239489438"
          />
          <InputField
            mb="25px"
            id="invoice_status"
            label="Shipment Invoice Status"
            placeholder="Invoiced"
          />
        </SimpleGrid>

        <Button
          variant="brand"
          minW="183px"
          fontSize="sm"
          fontWeight="500"
          ms="auto"
        >
          Save changes
        </Button>
      </Card>
    </FormControl>
  );
}
