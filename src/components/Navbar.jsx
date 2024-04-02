import React from 'react'

export const Navbar = () => {
  return (
    <nav className='flex justify-between bg-slate-700 text-white py-4'>
        <div className="logo">
            
                <span className='font-bold text-x1 mx-8 my-2'>iTask</span>
           
        </div>
        <ul className='flex gap-8 mx-9'>
            <li className='cursor-pointer  hover:text-red-600 hover:font-bold transition-all duration-200'>Home</li>
            <li className='cursor-pointer hover:text-red-600 hover:font-bold transition-all duration-200' >Your Tasks</li>
        </ul>

    </nav>
  )
}
