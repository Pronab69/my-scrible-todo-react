import React from 'react';
import Showapi from './Showapi';




const Api = ({api,bookmark,showmarkasread}) => {
    return (
        <div>
<h1>TOTAL:{api.length}</h1>
<div className='grid grid-cols-2'>{api.map(a=><Showapi showmarkasread={showmarkasread} bookmark={bookmark} key={a.id}  a={a}></Showapi>)}</div>
           

        </div>
    );
};

export default Api;