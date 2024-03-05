import { Icon } from '@chakra-ui/react';
import {
  MdDashboard,
  MdHome,
  MdLock,
  MdOutlineLocalShipping,
  MdOutlineDirectionsBoat,
  MdOutlineReport,
  MdOutlineMessage,
  MdOutlineNewspaper,
} from 'react-icons/md';

// Admin Imports
import DashboardsDefault from 'views/admin/dashboards/default';
import DashboardsRTLDefault from 'views/admin/dashboards/rtl';
import DashboardsCarInterface from 'views/admin/dashboards/carInterface';
import DashboardsSmartHome from 'views/admin/dashboards/smartHome';

// // NFT Imports
import NFTPage from 'views/admin/nfts/page';
import NFTCollection from 'views/admin/nfts/collection';
import NFTProfile from 'views/admin/nfts/profile';

// Main Imports
import AccountBilling from 'views/admin/main/account/billing';
import AccountApplications from 'views/admin/main/account/application';
import AccountInvoice from 'views/admin/main/account/invoice';
import AccountSettings from 'views/admin/main/account/settings';
import AccountAllCourses from 'views/admin/main/account/courses';
import AccountCoursePage from 'views/admin/main/account/coursePage';

import UserNew from 'views/admin/main/users/newUser';
import UsersOverview from 'views/admin/main/users/overview';
import UsersReports from 'views/admin/main/users/reports';

import ProfileSettings from 'views/admin/main/profile/settings';
import ProfileOverview from 'views/admin/main/profile/overview';
import ProfileNewsfeed from 'views/admin/main/profile/newsfeed';

import ApplicationsKanban from 'views/admin/main/applications/kanban';
import ApplicationsDataTables from 'views/admin/main/applications/dataTables';
import ApplicationsCalendar from 'views/admin/main/applications/calendar';

import EcommerceNewProduct from 'views/admin/main/ecommerce/newProduct';
import EcommerceProductOverview from 'views/admin/main/ecommerce/overviewProduct';
import EcommerceProductSettings from 'views/admin/main/ecommerce/settingsProduct';
import EcommerceProductPage from 'views/admin/main/ecommerce/pageProduct';
import EcommerceOrderList from 'views/admin/main/maintenance/buyingRates';
import EcommerceReferrals from 'views/admin/main/ecommerce/referrals';

// Others
import OthersNotifications from 'views/admin/main/others/notifications';
import OthersPricing from 'views/admin/main/others/pricing';
import OthersError from 'views/admin/main/others/404';
import Messages from 'views/admin/main/others/messages';

// Auth Imports
import ForgotPasswordCentered from 'views/auth/forgotPassword/ForgotPasswordCentered';
import ForgotPasswordDefault from 'views/auth/forgotPassword/ForgotPasswordDefault';
import LockCentered from 'views/auth/lock/LockCentered';
import LockDefault from 'views/auth/lock/LockDefault';
import SignInCentered from 'views/auth/logIn/SignInCentered';
import SignInDefault from 'views/auth/logIn/LogInDefault';
import SignUpCentered from 'views/auth/signUp/SignUpCentered';
import SignUpDefault from 'views/auth/signUp/SignUpDefault';
import VerificationCentered from 'views/auth/verification/VerificationCentered';
import VerificationDefault from 'views/auth/verification/VerificationDefault';

/* NEW IMPORTS */
// SHIPMENTS
import ViewAllShipments from 'views/admin/main/shipments/viewAllShipments';
import SearchShipmentClient from 'views/admin/main/shipments/searchShipmentClient';
// QUOTES
import ViewQuotes from 'views/admin/main/quotes';
// TRACKING
import Trackings from 'views/admin/main/trackings';
// MAINTENANCE
import BuyingRates from 'views/admin/main/maintenance/buyingRates';
// REPORTS
import ShipmentReport from 'views/admin/main/reports/shipmentReport';
import CarrierShipmentReport from 'views/admin/main/reports/carrierShipmentReport';
import CustomerShipmentReport from 'views/admin/main/reports/customerShipmentReport';
// MANIFEST
// ADMIN
import LogInDefault from 'views/auth/logIn/LogInDefault';

const routes = [
  // --- Dashboards ---
  {
    name: 'Main Dashboard',
    layout: '/admin',
    path: '/dashboard',
    component: <DashboardsDefault />,
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    collapse: false,
  },
  // --- Dashboards ---
  {
    name: 'Quotes',
    layout: '/admin',
    path: '/quotes',
    component: <ViewQuotes />,
    icon: (
      <Icon as={MdOutlineMessage} width="20px" height="20px" color="inherit" />
    ),
    collapse: false,
  },
  // // --- Shipments ---
  {
    name: 'Shipments',
    path: '/nfts',
    icon: (
      <Icon
        as={MdOutlineDirectionsBoat}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    collapse: true,
    items: [
      {
        name: 'Search Shipment by Client',
        layout: '/admin',
        path: '/shipments/search-client',
        component: <SearchShipmentClient />,
        secondary: true,
      },
      {
        name: 'View All Shipments',
        layout: '/admin',
        path: '/shipments/view-shipments',
        component: <ViewAllShipments />,
        secondary: true,
      },
    ],
  },
  // --- Trackings ---
  {
    name: 'Trackings',
    layout: '/admin',
    path: '/trackings',
    component: <Trackings />,

    icon: (
      <Icon
        as={MdOutlineLocalShipping}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    collapse: false,
  },

  // --- Manifest ---
  {
    name: 'Manifest',
    layout: '/admin',
    path: '/manifest',
    component: <OthersError />,
    icon: (
      <Icon
        as={MdOutlineNewspaper}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    collapse: false,
  },

  // --- Reports ---
  {
    name: 'Reports',
    path: '/reports',
    icon: (
      <Icon as={MdOutlineReport} width="20px" height="20px" color="inherit" />
    ),
    collapse: true,
    items: [
      {
        name: 'Shipment Report',
        layout: '/admin',
        path: '/shipments/shipment-report',
        component: <ShipmentReport />,
        secondary: true,
      },
      {
        name: 'Carrier Shipment Report',
        layout: '/admin',
        path: '/shipments/carrier-shipment-report',
        component: <CarrierShipmentReport />,
        secondary: true,
      },
      {
        name: 'Customer Shipment Report',
        layout: '/admin',
        path: '/shipments/customer-shipment-report',
        component: <CustomerShipmentReport />,
        secondary: true,
      },
    ],
  },

  // --- Maintenance ---
  {
    name: 'Maintenance',
    path: '/maintenance',
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Accessorials',
        layout: '/admin',
        path: '/maintenance/accessorials',
        component: <BuyingRates />,
        secondary: true,
      },
      {
        name: 'Buying Rates',
        layout: '/admin',
        path: '/maintenance/buying-rates',
        component: <BuyingRates />,
        secondary: true,
      },
      {
        name: 'Carriers',
        layout: '/admin',
        path: '/maintenance/carriers',
        component: <BuyingRates />,
        secondary: true,
      },
      {
        name: 'Customers',
        layout: '/admin',
        path: '/maintenance/customers',
        component: <BuyingRates />,
        secondary: true,
      },
      {
        name: 'Delivery Zones',
        layout: '/admin',
        path: '/maintenance/delivery-zones',
        component: <BuyingRates />,
        secondary: true,
      },
      {
        name: 'Outbound Manifest',
        layout: '/admin',
        path: '/maintenance/outbound-manifest',
        component: <BuyingRates />,
        secondary: true,
      },
      {
        name: 'Piece Types',
        layout: '/admin',
        path: '/maintenance/piece-types',
        component: <BuyingRates />,
        secondary: true,
      },
      {
        name: 'Places',
        layout: '/admin',
        path: '/maintenance/places',
        component: <BuyingRates />,
        secondary: true,
      },
      {
        name: 'Services',
        layout: '/admin',
        path: '/maintenance/services',
        component: <BuyingRates />,
        secondary: true,
      },
      {
        name: 'Sortation Providers',
        layout: '/admin',
        path: '/maintenance/sortation-providers',
        component: <BuyingRates />,
        secondary: true,
      },
      {
        name: 'Terminals',
        layout: '/admin',
        path: '/maintenance/terminals',
        component: <BuyingRates />,
        secondary: true,
      },
    ],
  },
  // --- Authentication ---
  {
    name: 'Admin Panel',
    path: '/auth',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      // --- Log In ---
      // {
      //   name: 'Log In',
      //   layout: '/auth',
      //   path: '/log-in',
      //   component: <LogInDefault />,
      //   secondary: true,
      // },
      // // --- Sign Up ---
      // {
      //   name: 'Sign Up',
      //   path: '/sign-up',
      //   collapse: true,
      //   items: [
      //     {
      //       name: 'Default',
      //       layout: '/auth',
      //       path: '/sign-up/default',
      //       component: <SignUpDefault />,
      //     },
      //     {
      //       name: 'Centered',
      //       layout: '/auth',
      //       path: '/sign-up/centered',
      //       component: <SignUpCentered />,
      //     },
      //   ],
      // },
      // // --- Verification ---
      // {
      //   name: 'Verification',
      //   path: '/verification',
      //   collapse: true,
      //   items: [
      //     {
      //       name: 'Default',
      //       layout: '/auth',
      //       path: '/verification/default',
      //       component: <VerificationDefault />,
      //     },
      //     {
      //       name: 'Centered',
      //       layout: '/auth',
      //       path: '/verification/centered',
      //       component: <VerificationCentered />,
      //     },
      //   ],
      // },
      // // --- Lock ---
      // {
      //   name: 'Lock',
      //   path: '/lock',
      //   collapse: true,
      //   items: [
      //     {
      //       name: 'Default',
      //       layout: '/auth',
      //       path: '/lock/default',
      //       component: <LockDefault />,
      //     },
      //     {
      //       name: 'Centered',
      //       layout: '/auth',
      //       path: '/lock/centered',
      //       component: <LockCentered />,
      //     },
      //   ],
      // },
      // // --- Forgot Password ---
      // {
      //   name: 'Forgot Password',
      //   path: '/forgot-password',
      //   collapse: true,
      //   items: [
      //     {
      //       name: 'Default',
      //       layout: '/auth',
      //       path: '/forgot-password/default',
      //       component: <ForgotPasswordDefault />,
      //     },
      //     {
      //       name: 'Centered',
      //       layout: '/auth',
      //       path: '/forgot-password/centered',
      //       component: <ForgotPasswordCentered />,
      //     },
      //   ],
      // },
    ],
  },
];

export default routes;
