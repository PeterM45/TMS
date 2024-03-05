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
  Box
} from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function CustomerShipmentReport() {
  const [customer, setCustomer] = useState('');
  const [service, setService] = useState('');
  const [dateCreatedFrom, setDateCreatedFrom] = useState(new Date());
  const [dateCreatedTo, setDateCreatedTo] = useState(new Date());

  const handleBuildReport = () => {
    // Logic to build or fetch the customer shipment report
    console.log('Building Customer Shipment Report with:', {
      customer,
      service,
      dateCreatedFrom,
      dateCreatedTo,
    });
  };

  return (
    <Flex direction="column" pt={{ sm: '125px', lg: '75px' }}>
      <Box maxW="2xl" mx="auto" px={{ base: '6', md: '8' }} py={{ base: '6', md: '8' }} borderWidth="1px" borderRadius="lg">
        <Heading size="lg" mb="6">Customer Shipment Report</Heading>
        <VStack spacing="6">
          <FormControl id="customer-select">
            <FormLabel>Customer</FormLabel>
            <Select placeholder="- Select Customer -" onChange={(e) => setCustomer(e.target.value)}>
              {/* Populate with actual customer options */}
            </Select>
          </FormControl>
          <FormControl id="service-select">
            <FormLabel>Service</FormLabel>
            <Select placeholder="- Select Service -" onChange={(e) => setService(e.target.value)}>
              {/* Populate with actual service options */}
            </Select>
          </FormControl>
          <Flex gap="4">
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
          </Flex>
          <Button colorScheme="blue" onClick={handleBuildReport}>Build Report</Button>
        </VStack>
      </Box>
    </Flex>
  );
}

