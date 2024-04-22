import Navbar from '../ui/Navbar'
import SearchFunction  from '../ui_components/SearchFunction'
import InfoCards  from '../ui_components/InfoCards'
import CourseInfo from '../ui_components/CourseInfo';
import { Search } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { UserPlus } from 'lucide-react';


function ProgramsAndSchools() {
  return (
    <div>
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col mx-4">
            <Navbar />
            <SearchFunction />
            <div className='grid grid-cols-2 gap-4'>
                <InfoCards />
                <CourseInfo />
            </div>
        </div> 
        <div className="drawer-side rounded-md">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-full min-h-full bg-base-200 text-base-content">
          <a className="btn btn-ghost text-xl"> 
                <div className="w-8 rounded">
                    <img src="/Wynim-removebg-preview.png" alt="Wynim-Logo" />
                </div>
                WYNIM CRM System </a>
          <div className='divider'></div>
            <li className='mb-2'><a href='/dashboard'> <LayoutDashboard /> Dashboard </a></li>
            <li className='mb-2'>
                <details>
                    <summary> <TrendingUp /> Statuses </summary>
                    <ul className="p-2">
                        <li><a> Accepted </a></li>
                        <li><a> Rejected </a></li>
                        <li><a> Pending </a></li>
                    </ul>
                </details>
            </li>
                <li className='mb-2'> <a href='/programsandschools'> <Search /> Programs and Schools </a> </li>
                <li  className='mb-2'><a> <UserPlus/> Add an Admin  </a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ProgramsAndSchools