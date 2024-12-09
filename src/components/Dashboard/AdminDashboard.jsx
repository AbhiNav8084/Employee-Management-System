import React from 'react'
import Header from '../section/Header'
import CreateTask from '../section/CreateTask'
import AllTask from '../section/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
        <Header />
        <CreateTask />
        <AllTask />
    </div>
  )
}

export default AdminDashboard