import { CourseSelect } from './CourseSelect'
import { SchoolSelect } from './SchoolSelection'
import { TextInput } from '@tremor/react';
import { EducationSelect } from './EducationSelect';

function StudentForm() {
  return (
    <div>
        <div className='mt-12 pt-12 h-screen px-72 place-items-start w-full'>
            <form action="">
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
                        <input type="file" className="file-input file-input-bordered w-full max-w-xs" />
                    </div>
                    <div className='mt-24 mb-8'>
                        <button className="btn btn-wide btn-primary text-base"> Save information </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default StudentForm