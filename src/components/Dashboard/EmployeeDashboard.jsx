import React from 'react'
import Header from '../section/Header'
import TaskListnum from '../section/TaskListnum'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = ({data}) => {
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header data={data}/>
            <TaskListnum data={data}/>
            <Tasklist data={data}/>
        </div>
    </div>
  )
}

export default EmployeeDashboard