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

export default function ShipmentReport() {
  const [shipmentStatus, setShipmentStatus] = useState('');
  const [invoiceStatus, setInvoiceStatus] = useState('');
  const [pickupFrom, setPickupFrom] = useState(new Date());
  const [pickupTo, setPickupTo] = useState(new Date());
  const [deliveryFrom, setDeliveryFrom] = useState(new Date());
  const [deliveryTo, setDeliveryTo] = useState(new Date());

  const handleBuildReport = () => {
    // Logic to build or fetch the shipment report
    console.log('Building Shipment Report with:', {
      shipmentStatus,
      invoiceStatus,
      pickupFrom,
      pickupTo,
      deliveryFrom,
      deliveryTo,
    });
  };

  return (
    <Flex direction="column" pt={{ sm: '125px', lg: '75px' }}>
      <Box maxW="2xl" mx="auto" px={{ base: '6', md: '8' }} py={{ base: '6', md: '8' }} borderWidth="1px" borderRadius="lg">
        <Heading size="lg" mb="6" mr="20">Shipment Report</Heading>
        <VStack spacing="6">
          <FormControl id="shipment-status">
            <FormLabel>Shipment Status</FormLabel>
            <Select placeholder="- Select -" onChange={(e) => setShipmentStatus(e.target.value)}>
              {/* Populate with actual shipment status options */}
            </Select>
          </FormControl>
          <FormControl id="invoice-status">
            <FormLabel>Invoice Status</FormLabel>
            <Select placeholder="- Any -" onChange={(e) => setInvoiceStatus(e.target.value)}>
              {/* Populate with actual invoice status options */}
            </Select>
          </FormControl>
          <FormControl id="pickup-from">
            <FormLabel>Pickup From</FormLabel>
            <DatePicker
              selected={pickupFrom}
              onChange={(date) => setPickupFrom(date)}
              dateFormat="MM/dd/yyyy"
              customInput={<Input />}
            />
          </FormControl>
          <FormControl id="pickup-to">
            <FormLabel>Pickup To</FormLabel>
            <DatePicker
              selected={pickupTo}
              onChange={(date) => setPickupTo(date)}
              dateFormat="MM/dd/yyyy"
              customInput={<Input />}
            />
          </FormControl>
          <FormControl id="delivery-from">
            <FormLabel>Delivery From</FormLabel>
            <DatePicker
              selected={deliveryFrom}
              onChange={(date) => setDeliveryFrom(date)}
              dateFormat="MM/dd/yyyy"
              customInput={<Input />}
            />
          </FormControl>
          <FormControl id="delivery-to">
            <FormLabel>Delivery To</FormLabel>
            <DatePicker
              selected={deliveryTo}
              onChange={(date) => setDeliveryTo(date)}
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
