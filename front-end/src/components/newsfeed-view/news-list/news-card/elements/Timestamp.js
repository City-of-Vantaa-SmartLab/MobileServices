import React from 'react';
import { getTimeDelta } from 'utils/utils';

const Timestamp = ({time}) => (
    <span className="timestamp">{getTimeDelta(time)}</span>
 );

 export default Timestamp;