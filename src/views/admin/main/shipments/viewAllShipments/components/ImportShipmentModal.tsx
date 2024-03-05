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
  } from '@chakra-ui/react';
  
  import { useRef, useState } from 'react';

  interface ImportShipmentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onFileUpload: (file: File) => void;
  }
  
  function ImportShipmentModal({ isOpen, onClose, onFileUpload }: ImportShipmentModalProps) {
    const [file, setFile] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);
  
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
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Shipments - Import</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormLabel>Customer</FormLabel>
            <Select mb={4} placeholder="Select Customer"/>
            <Input
              type="file"
              ref={fileInputRef}
              accept=".xlsx,.xls"
              p={1}
            />
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

  export default ImportShipmentModal;