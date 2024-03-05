import React, { useState } from 'react';
import {
  Flex,
  FormControl,
  FormLabel,
  Select,
  Input,
  Button,
  VStack,
  Heading,
  Box,
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CarrierShipmentReport() {
  const [carrier, setCarrier] = useState('');
  const [dateCreatedFrom, setDateCreatedFrom] = useState(new Date());
  const [dateCreatedTo, setDateCreatedTo] = useState(new Date());

  // Function to handle the report generation
  const handleBuildReport = () => {
    console.log('Building report with:', { carrier, dateCreatedFrom, dateCreatedTo });
    // Here you would implement the logic to build or fetch the report
  };

  return (
    <Flex direction="column" pt={{ sm: '125px', lg: '75px' }}>
      <Box maxW="2xl" mx="auto" px={{ base: '6', md: '8' }} py={{ base: '6', md: '8' }} borderWidth="1px" borderRadius="lg">
        <Heading size="lg" mb="6">Carrier Shipment Report</Heading>
        <VStack spacing="6">
          <FormControl id="carrier-select">
            <FormLabel>Carrier</FormLabel>
            <Select placeholder="- Select Carrier -" onChange={(e) => setCarrier(e.target.value)}>
              {/* Populate this with actual carrier options */}
            </Select>
          </FormControl>
          <FormControl id="date-created-from">
            <FormLabel>Date Created From</FormLabel>
            <DatePicker
              selected={dateCreatedFrom}
              onChange={(date) => setDateCreatedFrom(date)}
              dateFormat="MM/dd/yyyy"
              customInput={<Input />}
            />
          </FormControl>
          <FormControl id="date-created-to">
            <FormLabel>Date Created To</FormLabel>
            <DatePicker
              selected={dateCreatedTo}
              onChange={(date) => setDateCreatedTo(date)}
              dateFormat="MM/dd/yyyy"
              customInput={<Input />}
            />
          </FormControl>
          <Button colorScheme="blue" onClick={handleBuildReport}>Build Report</Button>
        </VStack>
      </Box>
    </Flex>
  );
}