import { UserRoundPlus } from 'lucide-react';
import { CourseSelect } from '../ui_components/CourseSelect'
import { SchoolSelect } from '../ui_components/SchoolSelection'
import { TextInput } from '@tremor/react';
import { EducationSelect } from '../ui_components/EducationSelect'

function Heading() {
  
  return (
    <div>
      <div className='flex justify-between items-center px-12 mx-auto py-8 max-w-full my-4'>
          <h1 className='text-4xl font-bold'> Dashboard </h1>
          
          <div className='flex justify-between'>
            <button className="btn btn-primary text-base-100" onClick={() => (document.getElementById('addStudentModal') as HTMLDialogElement).showModal()}> Add Student <UserRoundPlus /> </button>
              <dialog id="addStudentModal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl p-8">
                  <div className='justify-start mt-4 mb-6 gap-4'>
                      <h1 className='text-4xl font-bold'> Add Student </h1> 
                      <p className='mt-4'> Fill out the necessary student details </p>
                  </div>
                  <form method="">
                    <div className="flex w-full gap-12 mb-8">
                        <div className="grid h-20 flex-grow place-items-center">
                            <h2 className='text-base font-bold m-2'> First Name </h2>
                            <TextInput placeholder='Type here..' type='text' id="fname" className='text-base p-2' />
                        </div>
                        <div className="grid h-20 flex-grow place-items-center">
                            <h2 className='text-base font-bold m-2'> Middle Name </h2>
                            <TextInput placeholder='Type here..' type='text' id="mname" className='text-base p-2' />
                        </div>
                    </div>
                        <div className='mt-8'>
                            <h2 className='text-base font-bold m-2'> Last Name </h2>
                            <TextInput placeholder='Type here..' type='text' id="lname" className='text-base p-2' />
                        </div>
                        <div className='mt-8'>
                            <h2 className='text-base font-bold m-2'> Nationality </h2>
                            <TextInput placeholder='Type here..' type='text' id="nationality" className='text-base p-2' />
                        </div>
                        <div className='mt-8'>
                            <EducationSelect />
                        </div>
                        <div className='mt-8'>
                            <h2 className='text-base font-bold m-2'> Email </h2>
                            <TextInput placeholder='Type here..' type='email' id="email" className='text-base p-2' />
                        </div>
                        <div className='mt-8 mb-5' id='genderselect'>
                            <h2 className='text-base font-bold m-2 text-center'> Select Gender </h2>
                                <div className='flex justify-center items-center gap-12 mt-4 mb-6'>
                                    <label className="label cursor-pointer gap-4">
                                        <span className="label-text"> Female </span> 
                                        <input type="radio" id='female' name="radio-10" className="radio checked:bg-red-500" checked />
                                    </label>
                                    <label className="label cursor-pointer gap-4">
                                        <span className="label-text"> Male </span> 
                                        <input type="radio" id='male' name="radio-10" className="radio checked:bg-blue-500" checked />
                                    </label>
                                </div>
                        </div>
                        <div className='grid grid-cols-2 gap-12 justify-between items-center'>
                            <SchoolSelect />
                            <CourseSelect />
                        </div>
                        <div className='items-center justify-center mt-8 mb-5'>
                            <h2 className='text-base font-bold m-6'> Upload Passport/Visa </h2>
                            <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                        </div>
                        <div className='mt-24 mb-2'>
                            <button className="btn btn-wide btn-primary text-base"> Save information </button>
                            <button className="btn btn-md btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </div>
                  </form>
                </div>
            </dialog>
          </div>
      </div>
    </div>
  )
}

export default Heading