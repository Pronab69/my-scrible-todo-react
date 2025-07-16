import React from 'react';
import { CiBookmark } from "react-icons/ci";

const Showapi = ({a,bookmark,showmarkasread}) => {

    return (
        <div>
        <div className="card bg-base-100 w-96 h-[500px] shadow-sm border border-amber-800 mb-5">
 
    <img className='w-full h-96'
      src={a.cover}
      alt="Shoes" />
 
  <div className="card-body">
    <h2 className="card-title">{a.title}</h2>
  <div><img className='w-10 h-10 rounded-full' src={a.author_img} alt="" />
  <p>{a.author}</p></div>
  <p>{a.hashtags.join(" | ")}</p>
  <button onClick={()=>bookmark(a)}><CiBookmark size={25} className='cursor-pointer' /></button>


    <div className="card-actions justify-end">
      <button onClick={()=>showmarkasread(a.reading_time,a.id)} className="btn btn-primary">mark as read</button>
    </div>
  </div>
</div>

        </div>
    );
};

export default Showapi;