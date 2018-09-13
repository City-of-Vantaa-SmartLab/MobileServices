import React from 'react';
import { getDate, formatDate } from '../../utils/utils';

const Header = props => (
    <div>
        <h3>{formatDate(getDate())}</h3>
        <h2>TODAY IN VANTAA</h2>
    </div>
 );

 export default Header;