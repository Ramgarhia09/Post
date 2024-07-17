import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate =useNavigate();
    const[input,setInput] =useState({
         email:"",
        password:''
 
   
     });

  const handleLogin =(e) =>{

    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"))

    if(input.email === loggeduser.email && input.password === loggeduser.password
    ){
        navigate("/home")
    }
    else{
        alert("wrong INfo")
    }
  };

  const handleReg=()=>{
   
    navigate('/register')
 }
  return (
    <div class="flex justify-center items-center h-[70vh] bg-indigo-300">
    <div class="w-96 p-6 shadow-lg bg-white rounded-md">
        <h1 class="text-3xl block text-center font-semibold"><i class="fa-solid fa-user"></i>Login</h1>
       < hr class="mt-3"/>
       <form onSubmit={handleLogin}>
       <div class="mt-3">
            <label for="email" class="block text-base mb-2">Email</label>
            <input type="email"
             name='email'
             value={input.email}
             onChange={(e)=> setInput
                 ({...input,
                    [e.target.name]: e.target.value})
             }
            
            
            id="email" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Email..." />
        </div>
          
        <div class="mt-3">
            <label for="password" class="block text-base mb-2">Password</label>
            <input type="text" 
             name='password'
             value={input.password}
             onChange={(e)=> setInput
                 ({...input,[e.target.name]: e.target.value})
             }
            
            id="password" class="border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600" placeholder="Enter Password..." />
        </div>
       
       
        
       
        <div class="mt-5">
            <button type="submit" class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp;Login</button>
        </div>
        <div class="mt-5">
            <button type="submit"
            onClick={handleReg}
            class="border-2 border-indigo-700 bg-indigo-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-indigo-700 font-semibold"><i class="fa-solid fa-right-to-bracket"></i>&nbsp;&nbsp; New Register</button>
            

        </div>
        </form>
    </div>
</div>
  )
}

export default Login