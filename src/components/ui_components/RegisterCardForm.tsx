import { TextInput } from '@tremor/react';
import { useNavigate } from 'react-router-dom';

function RegisterCardForm() {

  const history = useNavigate();

  const handleSignup = () => {
    history('/admin');
  }

  return (
    <div>
      <div className='flex items-center justify-center text-center mt-12'>
        <form action="">
          <div className="mx-auto max-w-sm space-y-6">
            <div className='m-6'>
              <h1 className="text-3xl font-bold mb-4"> Add an Admin </h1>
              <p className="text-md font-bold" > Fill out the necessary details needed </p>
            </div>
            <div >
              <h2 className='text-base my-4 font-bold'> First Name </h2>
              <TextInput placeholder='e.g Juan' type='text' className='text-base p-2' id='fname' />
            </div>
            <div>
              <h2 className='text-base my-2 font-bold'> Last Name </h2>
              <TextInput placeholder='e.g Dela Cruz' type='text' className='text-base p-2' id='lname' />
            </div>
            <div>
              <h2 className='text-base my-2 font-bold'> Email </h2>
              <TextInput placeholder='Email' type='email' className='text-base p-2' id='email' />
            </div>
            <div>
              <h2 className='text-base my-2 font-bold'> Password </h2>
              <TextInput placeholder='Superawesomepassword' type="password" className='text-base p-2' id='password' />
            </div>
            <div>
              <h2 className='text-base my-2 font-bold'> Confirm Password </h2>
              <TextInput placeholder='Superawesomepassword' type="password" className='text-base p-2' id='password' />
            </div>
          </div>
          <div className="mt-12 mb-2 flex justify-center w-full">
            <button className="btn btn-primary text-base btn-wide" onClick={handleSignup}> Save information </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterCardForm