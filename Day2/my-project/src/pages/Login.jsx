import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui';
import { Eye, EyeOff } from 'lucide-react';
const Login = () => {
  const navigate = useNavigate();
  const[formData,setFormData] = useState({
    email:'',
    password:''
  })
  const[error,setError] = useState('');
  const [showPassword,setShowPassword] = useState(false);
  const handleChange = (e) =>{
    setFormData({
        ...formData,
        [e.target.name]:e.target.value
    })
    if(error) setError('');
  }
  cons handleSubmit =(e) =>{
    e.preventDefault();
    const existingUsers = JSON.parse(localStorage.getItem('users') || '[]')
    const user = existingUsers.find(u => u.email === formData.email && u.password === formData.password);

    if(user){
        localStorage.setItem('currentUser',JSON.stringify(user));
        window.dispatchEvent(newEvent('auth-change'))
        navigate('/')
    }else{
        setError('INvalisemail or password try again')
    }
}
    return (
            <div className="min-h-screen flex items-center justify-center bg-black pt-20">
            <div className="bg-gray-900 p-8 rounded-lg shadow-lg w-full max-w-md border border-gray-800">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">Welcome Back</h2>
      
    {error && (
         <div className="bg-red-500/10 border border-red-500 text-red-500 p-3 rounded mb-4 text-sm">
                        {error}
                    </div>
    )}
    <form onSubmit={handleSubmit} className='space-y-6'>
       <div >
        <label className='block text-gray-400'></label>

       </div>

    </form>
    
    
    </div>
        </div>

  )
}

export default Login
