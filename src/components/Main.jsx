import React from 'react'
import AvatarCard from './AvatarCard'
import TaskSection from './TaskSection'
import img from '../assets/avatar.jpg'
import './Main.css'

const Main = () => {
  return (
    <main className='container'>
        <h2 className='realTitle'>My tasks</h2>
        <AvatarCard name={'Iago Siccardi'} img={img}/>
        <TaskSection/>
    </main>
  )
}

export default Main