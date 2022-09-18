import React, { useState } from 'react'
import Input from '../../components/Input/Input'

const Login = () => {

  const [login, setLogin] = useState("");
  const [register, setRegister] = useState("");

  const updateLogin = (value: any) => {
    setLogin(value)
  }
  
  const updateRegister = (value: any) => {
    setRegister(value)
  }

  return (
    <div className='bg-red-400'>
      <div className='w-2/4 mx-auto py-5'>
        <h2 className='text-3xl font-medium text-center mb-5'>Авторизация</h2>
        <form action="#" className=''>
          <label className='w-2/3 flex flex-col mx-auto'>
            <Input updateVal={updateLogin} />
          </label>
          <label className='w-2/3 flex flex-col mx-auto'>
            <Input updateVal={updateRegister} />
          </label>
        </form>
      </div>
    </div>
  )
}

export default Login