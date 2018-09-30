import React from 'react';

const Meta = ({thumbnail, author}) => (
    <div className="author">
        <img src = {thumbnail} />
        <p>{author}</p>
    </div>
 );

 export default Meta;