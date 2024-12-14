import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    const [userData,setUserData] = useContext(AuthContext)

  return (
    <div id='tasks' className=' bg-[#1c1c1c] p-5 rounded mt-5 '>
        <div className='bg-cyan-400 mb-2 py-2 px-4 flex justify-between rounded h-14 items-center'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5  '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5  '>Active Task</h5>   
            <h5 className='text-lg font-medium w-1/5 '>Completed</h5>   
            <h5 className='text-lg font-medium w-1/5 '>Failed</h5>   
        </div>
        <div className=' '>
        {userData.map(function(elem,idx){
                return <div key={idx} className=' border-2 border-cyan-700 mb-2 py-2 px-4 flex justify-between rounded'>
                            <h2 className='text-lg font-medium w-1/5 text-white'>{elem.firstname}</h2>
                            <h3 className='text-lg font-medium w-1/5 text-orange-700'>{elem.taskNumbers.newTask}</h3>
                            <h5 className='text-lg font-medium w-1/5 text-yellow-400'>{elem.taskNumbers.active}</h5>   
                            <h5 className='text-lg font-medium w-1/5 text-green-700'>{elem.taskNumbers.completed}</h5>   
                            <h5 className='text-lg font-medium w-1/5 text-red-700'>{elem.taskNumbers.failed}</h5>   
                        </div>
        })}
        </div>
    </div>
  )
}

export default AllTask