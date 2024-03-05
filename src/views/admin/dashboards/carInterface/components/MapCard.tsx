import {
  Box,
  Button,
  Icon,
  Flex,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
// Custom components
import Card from 'components/card/Card';
import { SearchBar } from 'components/navbar/searchBar/SearchBar';
import Map from 'react-map-gl';

// Assets
import 'mapbox-gl/dist/mapbox-gl.css';
import { MdLocationOn } from 'react-icons/md';
import { IoPaperPlane } from 'react-icons/io5';

const MAPBOX_TOKEN =
  'pk.eyJ1Ijoic2ltbW1wbGUiLCJhIjoiY2wxeG1hd24xMDEzYzNrbWs5emFkdm16ZiJ9.q9s0sSKQFFaT9fyrC-7--g'; // Set your mapbox token her
