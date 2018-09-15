import React from 'react';
import { getDate, formatDate } from '../../utils/utils';
import "../../assets/stylesheets/Header.css";

const Header = props => (
    <div className="header">
        <h3>{formatDate(getDate())}</h3>
        <h2>TODAY IN VANTAA</h2>
    </div>
 );

 export default Header;