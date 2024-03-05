import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  Button,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  GridItem,
  SimpleGrid,
  HStack,
  Checkbox,
} from '@chakra-ui/react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdAdd, MdCancel } from 'react-icons/md';

interface CreateQuoteProps {
  onClose: () => void;
}

const CreateQuote: React.FC<CreateQuoteProps> = ({ onClose }) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    onClose(); // Close the modal after form submission
  };
  const [selectedDate, setSelectedDate] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => setIsChecked(!isChecked);

  return (
    <Modal isOpen={true} onClose={onClose} size="6xl">
      <ModalOverlay />
      <ModalContent maxW="80rem">
        <ModalHeader>Quotes - Create</ModalHeader>
        <ModalCloseButton />
        <ModalBody as="form">
          <VStack spacing={4} align="stretch">
            <SimpleGrid columns={6} spacing={4}>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel>Load Number</FormLabel>
                  <Input placeholder="LDR-23132889" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel>Status</FormLabel>
                  <Input placeholder="Status" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel>Buying Rate</FormLabel>
                  <Input placeholder="Buying Rate" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel>Service</FormLabel>
                  <Select placeholder="Select Service">
                    {/* Populate with actual options */}
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel>Agent</FormLabel>
                  <Select placeholder="Agent">
                    {/* Populate with actual options */}
                  </Select>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel>Selling Rate</FormLabel>
                  <Input placeholder="Selling Rate" />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl isRequired>
                  <FormLabel>Customer</FormLabel>
                  <Select placeholder="Select Customer">
                    {/* Populate with actual options */}
                  </Select>
                </FormControl>
              </GridItem>
              <FormControl display="flex" alignItems="center">
                <VStack spacing={2} align="start">
                <HStack>
                  <Checkbox id="needs-work" isChecked={isChecked} onChange={handleCheckboxChange} />
                  <FormLabel htmlFor="needs-work" mb="0" mr={2}>
                    Needs Work
                  </FormLabel>
                </HStack>
                <Textarea 
                id="needs-work-text"
                placeholder="Internal Comment"
                size="sm"
                width="800px"
                height="100%"
                />
                </VStack>
              </FormControl>
            </SimpleGrid>

            <SimpleGrid columns={6} spacing={4}>
              <GridItem colSpan={3}>
                <FormControl>
                  <FormLabel>Reference 1</FormLabel>
                  <Input />
                  <FormLabel>Reference 2</FormLabel>
                  <Input />
                  <FormLabel>Reference 3</FormLabel>
                  <Input />
                  <FormLabel>Reference 4</FormLabel>
                  <Input />
                </FormControl>
              </GridItem>
              {/* Internal Comment */}
              <GridItem colSpan={3}>
                <FormControl>
                  <FormLabel>External Comment</FormLabel>
                  <Textarea 
                  id="external-comment-text"
                  size="sm"
                  width="100%"
                  height="250px"/>
                </FormControl>
              </GridItem>
            </SimpleGrid>

            {/* Route and Cargo Sections */}
            <HStack spacing={10} align="start">
              {/* Route Section */}
              <Box flex="1" borderWidth="1px" borderRadius="lg" p={4}>
                <FormLabel fontWeight="semibold">Route</FormLabel>
                <VStack spacing={4}>
                  <FormControl>
                    <FormLabel>Point 1 (Pickup)</FormLabel>
                    <Input placeholder="Place" />
                    <br></br><br></br>
                    <Select placeholder="Pickup Accessories">
                      {/* Populate with actual options */}
                    </Select>
                    <br></br>
                    <Input placeholder="Master BOL" />
                    <br></br><br></br>
                    <Input placeholder="Reference" />
                    <br></br><br></br>
                    <Textarea placeholder="Comment" />
                    <br></br><br></br>
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="MM/dd/yyyy"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Point 2 (Delivery)</FormLabel>
                    <Input placeholder="Place" />
                    <br></br><br></br>
                    <Select placeholder="Delivery Accessories">
                      {/* Populate with actual options */}
                    </Select>
                    <br></br>
                    <Textarea placeholder="Comment" />
                    <DatePicker
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="MM/dd/yyyy"
                    />
                  </FormControl>
                </VStack>
              </Box>

              {/* Cargo Section */}
              <Box flex="1" borderWidth="1px" borderRadius="lg" p={4}>
                <FormLabel fontWeight="semibold">Cargo</FormLabel>
                <VStack spacing={4}>
                  <FormControl>
                    <FormLabel>Cargo 1</FormLabel>
                    <Input placeholder="Description" />
                    <br></br><br></br>
                    <HStack>
                      <Select placeholder="Size">
                        {/* Populate with actual options */}
                      </Select>
                      <Select placeholder="Weight">
                        {/* Populate with actual options */}
                      </Select>
                    </HStack>
                    <br></br>
                    <HStack>
                      <Select placeholder="Temp From">
                        {/* Populate with actual options */}
                      </Select>
                      <Select placeholder="Temp To">
                        {/* Populate with actual options */}
                      </Select>
                    </HStack>
                    <br></br>
                    <Select placeholder="Select Insurance">
                      {/* Populate with actual options */}
                    </Select>
                    <br></br>
                    <Input placeholder="Declared Value" />
                    <br></br><br></br>
                    <Textarea placeholder="Customer's Comment" />
                    {/* Other fields as required */}
                  </FormControl>
                </VStack>
              </Box>
            </HStack>

            {/* Action Buttons */}
            <HStack spacing={4}>
              <Button leftIcon={<MdAdd />} colorScheme="blue">
                Add Cargo
              </Button>
              <Button leftIcon={<MdAdd />} colorScheme="blue">
                Add Route
              </Button>
              <Button
                rightIcon={<MdCancel />}
                colorScheme="red"
                onClick={onClose}
              >
                Cancel
              </Button>
            </HStack>

            {/* Save Button */}
            <Button colorScheme="blue" type="submit" mt={4}>
              Save
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CreateQuote;
