import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import HeadingSecondary from '../atoms/HeadingSecondary'

interface LoginFormInputs {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
})

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: LoginFormInputs) => {
    console.log(data)
  }

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='relative w-full max-w-md p-8 bg-white rounded shadow-md'>
        <HeadingSecondary value='Login' />
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='mb-4'>
            <label className='block text-gray-700'>Email</label>
            <input
              {...register('email')}
              type='email'
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>}
          </div>
          <div className='mb-6'>
            <label className='block text-gray-700'>Password</label>
            <input
              {...register('password')}
              type='password'
              className={`w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            />
            {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password.message}</p>}
          </div>
          <button
            type='submit'
            className='w-full px-4 py-2 bg-[#ece4de] rounded-md hover:bg-[#d9c4bc] focus:outline-none focus:bg-[#d9c4bc]'
          >
            Login
          </button>
        </form>
        <span className='  text-sm cursor-pointer'>forgot password?</span>
        <br />
        <Link className='  text-sm cursor-pointer' to='/register'>
          Don't have an account? <span className='text-blue-950'>signup</span>
        </Link>
      </div>
    </div>
  )
}

export default Login
