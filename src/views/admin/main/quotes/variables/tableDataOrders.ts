type RowObj = {
  quoteLoadNumber: string;
  quoteStatus: string;
  quoteCustomer: string;
  quoteService: string;
  quotePickup: string;
  quoteFrom: string;
  quoteDeliver: string;
  quoteTo: string;
};
// DUMMY DATA FOR NOW
const tableDataOrders: RowObj[] = [
  {
    quoteLoadNumber: 'LZ203-00001',
    quoteStatus: 'Completed',
    quoteCustomer: 'Test Customer',
    quoteService: 'Armed Secure Air',
    quotePickup: '02/17/2024 06:30 AM',
    quoteFrom: 'String',
    quoteDeliver: '02/18/2024 12:30 PM',
    quoteTo: 'String',
  },
];

export default tableDataOrders;
