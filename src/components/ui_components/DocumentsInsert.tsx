import { TextInput } from '@tremor/react';

function DocumentsInsert() {
    return (
        <div>
            <div className='justify-start mt-4 mb-6 gap-4'>
                <h1 className='text-4xl font-bold text-center items-center'> Upload Documents </h1>
            </div>
            <form method="">
                <div className="grid h-20 flex-grow">
                    <h2 className='text-base font-bold mb-2'> Full Name </h2>
                    <TextInput placeholder='Type here..' type='text' id="fullname" className='text-base p-2' />
                </div>
                <div className='my-4'>
                    <h2 className='text-base font-bold mb-2'> Resume </h2>
                    <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                    <span>Filename should be Lastname_Resume </span>
                </div>
                <div className='my-4'>
                    <h2 className='text-base font-bold mb-2'> Transcript of Records </h2>
                    <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                    <span>Filename should be Lastname_Passport/Visa </span>
                </div>
                <div className='my-4'>
                    <h2 className='text-base font-bold mb-2'> Diploma </h2>
                    <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                    <span>Filename should be Lastname_Diploma </span>
                </div>
                <div className='my-4'>
                    <h2 className='text-base font-bold mb-2'> Passport </h2>
                    <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                    <span>Filename should be Lastname_Passport </span>
                </div>
                <div className='my-4'>
                    <h2 className='text-base font-bold mb-2'> English Proficiency Test Result </h2>
                    <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                    <span>Filename should be Lastname_EnglishProficiencyTestResult </span>
                </div>
                <div className='my-4'>
                    <h2 className='text-base font-bold mb-2'> School Application Fee Receipt </h2>
                    <input type="file" className="file-input file-input-bordered w-full max-w-full" />
                    <span>Filename should be Lastname_SchoolApplicationFeeReceipt </span>
                </div>
                <div className='mt-8 mb-2 flex justify-center'>
                    <button className="btn btn-wide btn-primary text-base"> Save </button>
                </div>
            </form>
        </div>
    )
}

export default DocumentsInsert