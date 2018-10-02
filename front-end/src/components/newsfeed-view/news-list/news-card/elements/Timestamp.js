import React from 'react';
import { getTimeDelta } from 'utils/utils';

const Timestamp = ({time}) => (
    <h5>{getTimeDelta(time)}</h5>
 );

 export default Timestamp;