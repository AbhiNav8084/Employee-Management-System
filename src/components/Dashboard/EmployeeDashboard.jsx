import React from 'react'
import Header from '../others/Header'
import TaskListnum from '../others/TaskListnum'
import Tasklist from '../TaskList/Tasklist'

const EmployeeDashboard = (props) => {
  return (
    <div>
        <div className='p-10 bg-[#1C1C1C] h-screen'>
            <Header changeUser={props.changeUser} data={props.data}/>
            <TaskListnum data={props.data}/>
            <Tasklist data={props.data}/>
        </div>
    </div>
  )
}

export default EmployeeDashboard