type RowObj = {
  shipmentLoadNumber: string;
  shipmentStatus: string;
  shipmentInvoice: string;
  shipmentCustomer: string;
  shipmentService: string;
  shipmentPickup: string;
  shipmentFrom: string;
  shipmentTo: string;
  shipmentDeliver: string;
  shipmentNeedsWork: string;
};
// DUMMY DATA FOR NOW
const tableDataOrders: RowObj[] = [
  {
    shipmentLoadNumber: 'LZ203-00001',
    shipmentStatus: 'New',
    shipmentInvoice: 'None',
    shipmentCustomer: 'Test Customer',
    shipmentService: 'Secure Air',
    shipmentPickup: '03/13/2023 04:36 PM',
    shipmentFrom: 'Test Pickup Place',
    shipmentTo: 'Test Drop-off Place',
    shipmentDeliver: 'Toronto',
    shipmentNeedsWork: 'No'
  },
];

export default tableDataOrders;
