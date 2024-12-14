import React from 'react'
import { setLocalStorage } from '../../utils/LocalStorage'

const Header = (props) => {

  // const [username, setuserName] = useState('')

  // if(!data){
  //   setuserName('Admin')
  // }else{
  //   setuserName(data.firstname)
  // }

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl'>Hello <br /> <span className='text-3xl font-semibold'>username 😎</span> </h1>
        <button onClick={logOutUser} className='bg-cyan-700 text-lg font-medium text-white px-5 py-2 rounded-md'>Log Out</button>
    </div>
  )
}

export default Header