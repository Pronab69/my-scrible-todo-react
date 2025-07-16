
import { useEffect, useState } from 'react'
import './App.css'
import Nab from './components/navbar/Nab'
import Api from './components/show api/Api'


function App() {

  const [api,setapi]=useState([])

  useEffect(()=>{
fetch("data.json")
.then(res=>res.json())
.then(data=>setapi(data))

  },[])

  const [bookmarkd,setBookmarkd]=useState([])

   const bookmark=(a)=>{

      const newbook = [...bookmarkd,a]
      setBookmarkd(newbook)
     
 
    }


const [count,setCount]=useState(0)

    const showmarkasread=(time,id)=>{

setCount(count+time)


setBookmarkd(bookmarkd.filter(mark=>mark.id!==id))



    }






   
  return (
    <>
<Nab></Nab>
<div className='flex'>
  <div className='w-[70%]'>  <Api showmarkasread={showmarkasread} bookmark={bookmark} api={api}></Api></div>



<div className='w-[30%]'>
 <h2>Reading Time:{count}</h2>  
          <h2>Bookmark count:{bookmarkd.length}</h2>
          <div>{bookmarkd.map(mark=><p className='bg-red-400'>{mark.title}</p>)}</div>


</div>
</div>


    </>
  )
}

export default App
