import React, { useState } from 'react'
import '../App.css';
import { useNavigate } from 'react-router-dom';
 
const Home = () => {

  const [name,setName]=useState("")
    const [allData,setAllData]=useState([])
    const [show,setShow]=useState(false)
    const [editIndex,setEditIndex]=useState()
const navigate = useNavigate()
    const userName = JSON.parse(localStorage.getItem("user"));
    const handleLogout=()=>{
       localStorage.removeItem('loggedin');
       navigate('/login')
    };
  

    const handleAdd=()=>{
        if(name.length!==0){
        setAllData(newData=>[...newData,name])
        setName("")
        }
    }

    const handleDelete=(index)=>{
        allData.splice(index,1)
        setAllData([...allData])
    }

    const handleEdit=(i)=>{
        setName(allData[i])
        setShow(true)
        setEditIndex(i)
    }
    const handleUpdate=()=>{
        allData.splice(editIndex,1,name)
        setAllData([...allData])
        setShow(false)
        setName("")
    }



  return (
    <>
    <div>

<p className='text-center'>Welcome-{userName.name}</p>

    </div>
    <div class="mt-5">
            <button type="submit"
            onClick={handleLogout}
            
            class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-44 rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Logout</button>

        </div>
         
{/* create deleete update */}
<div>
            <h1>Create ,Delete And Update the Post</h1>
            <input value={name} onChange={(e)=>setName(e.target.value)} class="hjo"/>
            {!show?<button onClick={handleAdd}>Add</button>:
            <button onClick={handleUpdate}>Update</button>}

            {
                allData.map((val,i)=>
                <div>
                    <h1>{val}</h1>
                    <button className="edit" onClick={()=>handleEdit(i)} >Edit</button>
                    <button className="delete" onClick={()=>handleDelete(i)}>Delete</button>
                </div>
                )
            }
        </div>

        
    </>
  )
}

export default Home