import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Login = () => {
  const [email, SetEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alerta, setAlerta] = useState('')

  const { user, logIn } = UserAuth()
  console.log(user)

  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setAlerta('')
    try {
      await logIn(email, password)
      navigate('/')
    } catch (error) {
      console.log(error)
      setAlerta(error.message)
      
    }


  }


  return (
    <>
      <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/3d6cf7c4-ad17-457a-b6cf-ea952926ba74/03a74468-e07b-4a3a-9e40-0546b0879925/ES-es-20230206-popsignuptwoweeks-perspective_alpha_website_small.jpg' alt='/' />
        <div className='fixed top-0 bg-black/60 left-0 w-full h-screen'></div>
        <div className='fixed w-full px-4 py-24 z-50'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-bold'>Sing In</h1>
              {alerta ? <p className='p-3 bg-red-400 my-2'>{alerta}</p> : null}
              <form onSubmit={handleSubmit} className='w-full flex flex-col py-4'>
                <input
                  onChange={(e) => SetEmail(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded hover:bg-white hover:text-black'
                  type="email"
                  placeholder='Email'
                  autoComplete='email'

                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className='p-3 my-2 bg-gray-700 rounded hover:bg-white hover:text-black'
                  type="password"
                  placeholder="Password"
                  autoComplete='current-password'
                />
                <button className='bg-red-600 py-3 my-6 rounded font-bold'>Sing In</button>
                <div className='flex justify-between items-center text-sm text-gray-600'>
                  <p><input className='mr-2' type="checkbox" />Remember me</p>
                  <p>Need Help?</p>
                </div>
                <p className='py-8'><span className='text-gray-600'>New to Neflix?</span>{' '}
                  <Link to="/signup">Sign Up</Link></p>

              </form>


            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default Login