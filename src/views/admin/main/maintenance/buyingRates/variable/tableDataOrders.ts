type RowObj = {
  service: string;
  carrier: string;
  originalTerminal: string;
  destinationTerminal: string;
  costPerLb: string;
  customerId: string;
  adminAmount: string;
  carrierActions: string;
};
// DUMMY DATA FOR NOW
const tableDataOrders: RowObj[] = [
  {
    service: 'AirSkipECO',
    carrier: 'WS',
    originalTerminal: 'YOWSB',
    destinationTerminal: 'YEG',
    costPerLb: '$0.97',
    customerId: '0000',
    adminAmount: '$3.86',
    carrierActions: 'Edit rates',
  },
  {
    service: 'Ground',
    carrier: 'WS',
    originalTerminal: 'YOWSB',
    destinationTerminal: 'YHZ',
    costPerLb: '$1.11',
    customerId: '0001',
    adminAmount: '$4.11',
    carrierActions: 'Edit rates',
  },
  {
    service: 'AirSkip+',
    carrier: 'WS',
    originalTerminal: 'YOWSB',
    destinationTerminal: 'YQM',
    costPerLb: '$1.11',
    customerId: '0002',
    adminAmount: '$4.35',
    carrierActions: 'Edit rates',
  },
  {
    service: 'ZoneSkip+',
    carrier: 'WS',
    originalTerminal: 'YOWSB',
    destinationTerminal: 'YQR',
    costPerLb: '$0.93',
    customerId: '0003',
    adminAmount: '$4.60',
    carrierActions: 'Edit rates',
  },
  {
    service: 'AirSkip+',
    carrier: 'WS',
    originalTerminal: 'YOWSB',
    destinationTerminal: 'YUL',
    costPerLb: '$0.86',
    customerId: '0004',
    adminAmount: '$4.73',
    carrierActions: 'Edit rates',
  },
  {
    service: 'AirSkip+',
    carrier: 'WS',
    originalTerminal: 'YOWSB',
    destinationTerminal: 'YVR',
    costPerLb: '$1.02',
    customerId: '0005',
    adminAmount: '$5.12',
    carrierActions: 'Edit rates',
  },
  //   {
  //     name: 'Venus Dashboard Builder PRO',
  //     email: 'vlad@',
  //     price: '$59.90',
  //     date: 'Oct 24, 2022',
  //     status: 'Completed',
  //     actions: 'Actions',
  //   },
  //   {
  //     name: 'Venus Design System PRO',
  //     email: 'fredy@',
  //     price: '$149.90',
  //     date: 'Nov 17, 2019',
  //     status: 'Completed',
  //     actions: 'Actions',
  //   },
  //   {
  //     name: 'Vision UI Dashboard Chakra PRO',
  //     email: 'mark@yahoo.com',
  //     price: '$69.00',
  //     date: 'Jan 30, 2021',
  //     status: 'Completed',
  //     actions: 'Actions',
  //   },
  //   {
  //     name: 'Purity UI Dashboard PRO',
  //     email: 'markus.a@gmail.com',
  //     price: '$69.00',
  //     date: 'Aug 02, 2021',
  //     status: 'Completed',
  //     actions: 'Actions',
  //   },
  //   {
  //     name: 'Argon Dashboard Chakra PRO',
  //     email: 'lorentz@gmail.com',
  //     price: '$129.90',
  //     date: 'Apr 19, 2021',
  //     status: 'Completed',
  //     actions: 'Actions',
  //   },
  //   {
  //     name: 'Vision UI Dashboard MUI PRO',
  //     email: 'wilson.tim@msn.com',
  //     price: '$349.90',
  //     date: 'Sep 12, 2021',
  //     status: 'Completed',
  //     actions: 'Actions',
  //   },
  //   {
  //     name: 'Purity UI Dashboard PRO',
  //     email: 'markus.a@gmail.com',
  //     price: '$69.00',
  //     date: 'Aug 02, 2021',
  //     status: 'In Progress',
  //     actions: 'Actions',
  //   },
  //   {
  //     name: 'Argon Dashboard Chakra PRO',
  //     email: 'lorentz@gmail.com',
  //     price: '$129.90',
  //     date: 'Apr 19, 2021',
  //     status: 'Completed',
  //     actions: 'Actions',
  //   },
  //   {
  //     name: 'Vision UI Dashboard MUI PRO',
  //     email: 'wilson.tim@msn.com',
  //     price: '$349.90',
  //     date: 'Sep 12, 2021',
  //     status: 'Completed',
  //     actions: 'Actions',
  //   },
];

export default tableDataOrders;
