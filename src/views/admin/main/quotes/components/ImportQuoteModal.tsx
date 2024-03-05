import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Button,
  FormLabel,
  Select,
  SimpleGrid,
  GridItem,
  VStack,
  HStack,
  } from '@chakra-ui/react';
  
  import DatePicker from 'react-datepicker'; // Assuming you're using react-datepicker
  import 'react-datepicker/dist/react-datepicker.css';
  import { useRef, useState } from 'react';

  interface ImportQuoteModalProps {
    isOpen: boolean;
    onClose: () => void;
    onFileUpload: (file: File) => void;
  }
  
  function ImportQuoteModal({ isOpen, onClose, onFileUpload }: ImportQuoteModalProps) {
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);

    const [pickupDate, setPickupDate] = useState(new Date());
    const [deliveryDate, setDeliveryDate] = useState(new Date());
  
    const handleFileChange = (event: { target: { files: any[]; }; }) => {
      const file = event.target.files[0];
      if (file) {
        setFile(file);
      }
    };
  
    const handleFileUpload = async () => {
      if (!file) {
        alert('Please select a file first.');
        return;
      }
      setIsLoading(true);
      try {
        // Here you would handle the file upload process, e.g., sending it to a backend server
        await onFileUpload(file);
  
        setIsLoading(false);
        onClose(); // Close the modal after successful upload
      } catch (error) {
        console.error('Error uploading file:', error);
        setIsLoading(false);
      }
    };
  
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Quotes - Import</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing={4}>
            <SimpleGrid columns={3} spacing={4}>
              <GridItem colSpan={1}>
                <FormLabel>Pickup Address</FormLabel>
                <Input placeholder="Pickup Address" />
              </GridItem>
              <GridItem colSpan={1}>
                <FormLabel>Delivery Date</FormLabel>
                {/* Assuming you're using react-datepicker */}
                <DatePicker
                  selected={deliveryDate}
                  onChange={(date) => setDeliveryDate(date)}
                  dateFormat="MM/dd/yyyy"
                  customInput={<Input />}
                />
              </GridItem>
              <GridItem colSpan={1}>
                <FormLabel>Master BOL</FormLabel>
                <Input placeholder="Master BOL" />
              </GridItem>
            </SimpleGrid>
            <SimpleGrid columns={3} spacing={4}>
              <GridItem colSpan={1}>
                <FormLabel>Pickup Date</FormLabel>
                {/* Assuming you're using react-datepicker */}
                <DatePicker
                  selected={pickupDate}
                  onChange={(date) => setPickupDate(date)}
                  dateFormat="MM/dd/yyyy"
                  customInput={<Input />}
                />
              </GridItem>
              <GridItem colSpan={1}>
                <FormLabel>Pickup Carrier</FormLabel>
                <Select placeholder="Select Pickup Carrier">
                  {/* Populate with actual options */}
                </Select>
              </GridItem>
              <GridItem colSpan={1}>
                <FormLabel>Pieces Type</FormLabel>
                <Select placeholder="Select Pieces Type">
                  {/* Populate with actual options */}
                </Select>
              </GridItem>
            </SimpleGrid>
            <SimpleGrid columns={3} spacing={4}>
              <GridItem colSpan={1}>
                <FormLabel>Size Type</FormLabel>
                <Select placeholder="Select Size Type">
                  {/* Populate with actual options */}
                </Select>
              </GridItem>
              <GridItem colSpan={1}>
                <FormLabel>Weight Type</FormLabel>
                <Select placeholder="Select Weight Type">
                  {/* Populate with actual options */}
                </Select>
              </GridItem>
            </SimpleGrid>
            <Input
              type="file"
              ref={fileInputRef}
              accept=".xlsx,.xls"
              p={1}
            />
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={handleFileUpload} isLoading={isLoading}>
            Import
          </Button>
          <Button variant="ghost" onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    );
  }

  export default ImportQuoteModal;