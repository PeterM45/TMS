// src/components/TextCellModal.tsx
import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
} from '@chakra-ui/react';

interface TextCellModalProps {
  brandColor: string;
  info: any; // Adjust the type according to your actual data structure
}

const TextCellModal: React.FC<TextCellModalProps> = ({ brandColor, info }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Text
        cursor="pointer"
        color={brandColor}
        textDecoration="underline"
        fontSize="md"
        fontWeight="500"
        onClick={onOpen}
        id={info.getValue()}
      >
        Edit order
      </Text>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit Order</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <FormControl>
                <FormLabel htmlFor="orderName">Order Name</FormLabel>
                <Input id="orderName" placeholder="Order Name" />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="orderAmount">Order Amount</FormLabel>
                <Input
                  id="orderAmount"
                  placeholder="Order Amount"
                  type="number"
                />
              </FormControl>
              {/* Add more form controls as needed */}
              <Button mt={4} colorScheme="blue" type="submit">
                Submit
              </Button>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Save Changes</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default TextCellModal;
