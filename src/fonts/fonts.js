import { createGlobalStyle } from "styled-components";

import QuicksandRegular from './Quicksand-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Quicksand';
        src: local('Quicksand');
        url(${QuicksandRegular}) format('ttf');
    }
`;