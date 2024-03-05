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
  Flex,
} from '@chakra-ui/react';
import Card from 'components/card/Card';
import SearchTableOrders from '../events/components/SearchTableOrders';
import tableDataOrders from '../events/variables/tableDataOrders';

interface EventsModalProps {
  isOpen: boolean;
  onClose: () => void;
  trackingNumber: string;
}

const EventsModal: React.FC<EventsModalProps> = ({
  isOpen,
  onClose,
  trackingNumber,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minWidth="75%">
        <ModalHeader>Events</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text fontSize="md">Tracking Number: {trackingNumber}</Text>
          <Flex
            direction="column"
            overflowX="auto"
            maxWidth="100%"
            pt={{ sm: '20px', lg: '15px' }}
          >
            <Card px="0px" maxWidth="100%">
              <SearchTableOrders tableData={tableDataOrders} />
            </Card>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
          {/* Additional buttons or actions can be added here */}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EventsModal;
