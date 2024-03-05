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

const tableDataOrders: RowObj[] = [
  {
    trackingNumber: 'TN100001',
    loadNumber: 'LN10001',
    status: 'In Transit',
    eventName: 'Pickup',
    service: 'AirSkipECO',
    carrier: 'Carrier A',
    originalCity: 'New York',
    originalProvince: 'NY',
    destinationCity: 'Los Angeles',
    destinationProvince: 'CA',
    createdOn: '2024-02-01',
    updatedOn: '2024-02-05',
    actions: '', // Intended for dynamic UI actions, will be populated as needed
  },
  {
    trackingNumber: 'TN100002',
    loadNumber: 'LN10002',
    status: 'Delivered',
    eventName: 'Delivery',
    service: 'Ground',
    carrier: 'Carrier B',
    originalCity: 'Chicago',
    originalProvince: 'IL',
    destinationCity: 'Houston',
    destinationProvince: 'TX',
    createdOn: '2024-01-25',
    updatedOn: '2024-02-02',
    actions: '', // Intended for dynamic UI actions, will be populated as needed
  },
  {
    trackingNumber: 'TN100003',
    loadNumber: 'LN10003',
    status: 'Pending',
    eventName: 'Dispatched',
    service: 'AirSkip+',
    carrier: 'Carrier C',
    originalCity: 'San Francisco',
    originalProvince: 'CA',
    destinationCity: 'Seattle',
    destinationProvince: 'WA',
    createdOn: '2024-02-10',
    updatedOn: '2024-02-12',
    actions: '', // Intended for dynamic UI actions, will be populated as needed
  },
  {
    trackingNumber: 'TN100004',
    loadNumber: 'LN10004',
    status: 'Cancelled',
    eventName: 'Cancellation',
    service: 'ZoneSkip+',
    carrier: 'Carrier D',
    originalCity: 'Miami',
    originalProvince: 'FL',
    destinationCity: 'Boston',
    destinationProvince: 'MA',
    createdOn: '2024-02-07',
    updatedOn: '2024-02-09',
    actions: '', // Intended for dynamic UI actions, will be populated as needed
  },
];

export default tableDataOrders;
