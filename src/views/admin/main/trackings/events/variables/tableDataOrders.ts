type RowObj = {
  type: string;
  category: string;
  name: string;
  date: string;
  actions: string;
};
// DUMMY DATA FOR NOW
const tableDataOrders: RowObj[] = [
  {
    type: 'Info',
    category: 'Created',
    name: 'Label Created',
    date: new Date().toISOString().split('T')[0],
    actions: '',
  },
  {
    type: 'Info',
    category: 'Generic',
    name: 'MANIFESTED_INBOUND',
    date: new Date().toISOString().split('T')[0],
    actions: '',
  },
];

export default tableDataOrders;
