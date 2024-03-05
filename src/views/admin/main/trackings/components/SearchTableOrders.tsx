/* eslint-disable */

import {
  Badge,
  Button,
  Flex,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useColorModeValue,
  Icon,
  Stack,
  Input,
  Select,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
//import { Column } from 'react-table';
// Custom components
import {
  MdChevronRight,
  MdChevronLeft,
  MdAdd,
  MdRefresh,
  MdFormatListBulleted,
  MdBorderColor,
  MdEdit,
} from 'react-icons/md';
import * as React from 'react';
// Assets
import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import TextCellModal from 'views/admin/main/trackings/components/TextCellModal';

import {
  PaginationState,
  createColumnHelper,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import CreateTracking from './CreateTracking';
import ImportShipmentModal from '../../quotes/components/ImportQuoteModal';
import EventsModal from '../events/index';
import { useState } from 'react';

type RowObj = {
  trackingNumber: string;
  loadNumber: string;
  status: string;
  eventName: string;
  service: string;
  carrier: string;
  originalCity: string;
  originalProvince: string;
  destinationCity: string;
  destinationProvince: string;
  createdOn: string;
  updatedOn: string;
  actions: string;
};

export default function SearchTableOrders(props: { tableData: any }) {
  const { tableData } = props;
  const textColor = useColorModeValue('navy.700', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const brandColor = useColorModeValue('brand.500', 'brand.400');

  // Define a mapping from service types to color schemes
  const serviceColorScheme: { [key: string]: string } = {
    AirSkipECO: 'green',
    Ground: 'orange',
    'AirSkip+': 'purple',
    'ZoneSkip+': 'blue',
  };

  const [isEventsModalOpen, setIsEventsModalOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const handleEventButtonClick = (trackingNumber: string) => {
    setSelectedRow(trackingNumber); // Assuming you use trackingNumber to identify rows
    setIsEventsModalOpen(true);
  };

  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  let defaultData = tableData;
  const [globalFilter, setGlobalFilter] = React.useState('');
  const columnHelper = createColumnHelper<RowObj>();
  const columns = [
    columnHelper.accessor('trackingNumber', {
      id: 'trackingNumber',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          TRACKING NUMBER
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="xs" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('loadNumber', {
      id: 'loadNumber',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          LOAD NUMBER
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="xs" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('status', {
      id: 'status',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          STATUS
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="xs" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('eventName', {
      id: 'eventName',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          EVENT NAME
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="xs" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('service', {
      id: 'service',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          SERVICE
        </Text>
      ),
      cell: (info) => {
        const serviceValue = info.getValue();
        // Get the color scheme for the service, default to 'gray' if not found
        const colorScheme = serviceColorScheme[serviceValue] || 'gray';

        return (
          <Badge
            textTransform="none"
            colorScheme={colorScheme}
            fontSize="xs"
            fontWeight="500"
          >
            {serviceValue}
          </Badge>
        );
      },
    }),
    columnHelper.accessor('carrier', {
      id: 'carrier',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          CARRIER
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="xs" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('originalCity', {
      id: 'originalCity',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          ORIGINAL CITY
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="xs" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('originalProvince', {
      id: 'originalProvince',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          ORIGINAL PROVINCE
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="xs" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('destinationCity', {
      id: 'destinationCity',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          DESTINATION CITY
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="xs" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),
    columnHelper.accessor('destinationProvince', {
      id: 'destinationProvince',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          DESTINATION PROVINCE
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="xs" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),

    columnHelper.accessor('createdOn', {
      id: 'createdOn',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          CREATED ON
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="xs" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),

    columnHelper.accessor('updatedOn', {
      id: 'updatedOn',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          UPDATED ON
        </Text>
      ),
      cell: (info) => (
        <Text color={textColor} fontSize="xs" fontWeight="500">
          {info.getValue()}
        </Text>
      ),
    }),

    columnHelper.accessor('actions', {
      id: 'actions',
      header: () => (
        <Text
          justifyContent="space-between"
          align="center"
          fontSize={{ sm: '8px', lg: '10px' }}
          color="gray.400"
        >
          ACTIONS
        </Text>
      ),
      cell: (info) => (
        <Flex gap="2">
          <Button
            size="xs"
            colorScheme="blue"
            leftIcon={
              <span>
                <MdFormatListBulleted />
              </span>
            }
            onClick={() =>
              handleEventButtonClick(info.row.original.trackingNumber)
            }
          >
            Events
          </Button>
          {isEventsModalOpen && selectedRow && (
            <EventsModal
              isOpen={isEventsModalOpen}
              onClose={() => setIsEventsModalOpen(false)}
              trackingNumber={selectedRow} // Pass the tracking number or any identifier to the modal
            />
          )}

          <Button
            size="xs"
            colorScheme="green"
            leftIcon={
              <span>
                <MdEdit />
              </span>
            }
            onClick={() => {
              /* Handle Shipment click */
            }}
          >
            Shipment
          </Button>
        </Flex>
      ),
    }),
  ];
  const [data, setData] = React.useState(() => [...defaultData]);
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 6,
    });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      globalFilter,
      pagination,
    },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });
  const createPages = (count: number) => {
    let arrPageCount = [];

    for (let i = 1; i <= count; i++) {
      arrPageCount.push(i);
    }

    return arrPageCount;
  };

  React.useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'fullName') {
      if (table.getState().sorting[0]?.id !== 'fullName') {
        table.setSorting([{ id: 'fullName', desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);

  return (
    <Flex
      direction="column"
      w="100%"
      overflowX={{ sm: 'scroll', lg: 'scroll' }}
    >
      <Flex
        align={{ sm: 'flex-start', lg: 'flex-start' }}
        justify={{ sm: 'flex-start', lg: 'flex-start' }}
        w="100%"
        px="22px"
        mb="36px"
      >
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={(value) => setGlobalFilter(String(value))}
          className="p-2 font-lg shadow border border-block"
          placeholder="Search..."
        />
      </Flex>
      <Table variant="simple" color="gray.500" mb="24px">
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th
                    pe="10px"
                    borderColor={borderColor}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    {header.isPlaceholder ? null : (
                      <Flex
                        {...{
                          className: header.column.getCanSort()
                            ? 'cursor-pointer select-none'
                            : '',
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                        justify="space-between"
                        align="center"
                        fontSize={{ sm: '10px', lg: '12px' }}
                        color="gray.400"
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: '',
                          desc: '',
                        }[header.column.getIsSorted() as string] ?? null}
                      </Flex>
                    )}
                  </Th>
                );
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Tr px="20px" key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td
                      key={cell.id}
                      fontSize={{ sm: '14px' }}
                      minW={{ sm: '150px', md: '200px', lg: 'auto' }}
                      borderColor={borderColor}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Flex w="100%" justify="space-between" px="20px" pt="10px" pb="5px">
        {/* SET ROW NUMBER */}
        <Text
          fontSize="sm"
          color="gray.500"
          fontWeight="normal"
          mb={{ sm: '24px', md: '0px' }}
        >
          Showing {pageSize * pageIndex + 1} to{' '}
          {pageSize * (pageIndex + 1) <= tableData.length
            ? pageSize * (pageIndex + 1)
            : tableData.length}{' '}
          of {tableData.length} entries
        </Text>
        {/* PAGINATION BUTTONS */}
        <div className="flex items-center gap-2">
          <Stack direction="row" alignSelf="flex-end" spacing="4px" ms="auto">
            <Button
              variant="no-effects"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="50%"
              bg="transparent"
              border="1px solid"
              borderColor={useColorModeValue('gray.200', 'white')}
              display={
                pageSize === 5
                  ? 'none'
                  : table.getCanPreviousPage()
                  ? 'flex'
                  : 'none'
              }
              _hover={{
                bg: 'whiteAlpha.100',
                opacity: '0.7',
              }}
            >
              <Icon as={MdChevronLeft} w="16px" h="16px" color={textColor} />
            </Button>
            {createPages(table.getPageCount()).map((pageNumber, index) => {
              return (
                <Button
                  variant="no-effects"
                  transition="all .5s ease"
                  onClick={() => table.setPageIndex(pageNumber - 1)}
                  w="40px"
                  h="40px"
                  borderRadius="50%"
                  bg={pageNumber === pageIndex + 1 ? brandColor : 'transparent'}
                  border={
                    pageNumber === pageIndex + 1
                      ? 'none'
                      : '1px solid lightgray'
                  }
                  _hover={
                    pageNumber === pageIndex + 1
                      ? {
                          opacity: '0.7',
                        }
                      : {
                          bg: 'whiteAlpha.100',
                        }
                  }
                  key={index}
                >
                  <Text
                    fontSize="sm"
                    color={pageNumber === pageIndex + 1 ? '#fff' : textColor}
                  >
                    {pageNumber}
                  </Text>
                </Button>
              );
            })}
            <Button
              variant="no-effects"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              transition="all .5s ease"
              w="40px"
              h="40px"
              borderRadius="50%"
              bg="transparent"
              border="1px solid"
              borderColor={useColorModeValue('gray.200', 'white')}
              display={
                pageSize === 5
                  ? 'none'
                  : table.getCanNextPage()
                  ? 'flex'
                  : 'none'
              }
              _hover={{
                bg: 'whiteAlpha.100',
                opacity: '0.7',
              }}
            >
              <Icon as={MdChevronRight} w="16px" h="16px" color={textColor} />
            </Button>
          </Stack>
        </div>
      </Flex>
    </Flex>
  );
}
// A debounced input react component
function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}: {
  value: string | number;
  onChange: (value: string | number) => void;
  debounce?: number;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
  const [value, setValue] = React.useState(initialValue);

  React.useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const buttonBg = useColorModeValue('transparent', 'navy.800');
  const hoverButton = useColorModeValue(
    { bg: 'gray.100' },
    { bg: 'whiteAlpha.100' },
  );
  const activeButton = useColorModeValue(
    { bg: 'gray.200' },
    { bg: 'whiteAlpha.200' },
  );

  const [isCreateTrackingOpen, setIsCreateTrackingOpen] = React.useState(false);

  const openCreateTrackingModal = () => {
    setIsCreateTrackingOpen(true);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();

  const toast = useToast();

  const handleFileUpload = (file: any) => {
    // Here you can process the file or send it to your server
    // For now, we'll just log it to the console
    console.log('File to upload:', file);
    toast({
      title: 'File uploaded.',
      description: "We've uploaded your file.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <Flex w="100%">
      <SearchBar mr={4} />
      <Button
        mr={4}
        variant="brand"
        onClick={openCreateTrackingModal}
        leftIcon={<MdAdd />}
      >
        Create
      </Button>
      {isCreateTrackingOpen && (
        <CreateTracking onClose={() => setIsCreateTrackingOpen(false)} />
      )}

      <Button mr={4} variant="brand" leftIcon={<MdRefresh />}>
        Refresh
      </Button>

      <Button variant="brand" leftIcon={<MdAdd />} onClick={onOpen}>
        Import
      </Button>
      <ImportShipmentModal
        isOpen={isOpen}
        onClose={onClose}
        onFileUpload={handleFileUpload}
      />
    </Flex>
  );
}
