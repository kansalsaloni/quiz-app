import React from 'react'
import LeftNavbarItem from './LeftNavbarItem'
import '../style/LeftNavbarStyle.css'
import  '../App.css';

function LeftNavbar({ selectedPage, setSelectedPage }) {
  const onClickLeftNavbar= (value) => () => {
    setSelectedPage(value)
  }
  return (
    <div className='left-navbar-container'>
       <h1 className='title'>QUIZZIE</h1>
      <div className='left-navbar'>
      <LeftNavbarItem text='Dashboard' isActive={selectedPage === 'dashboard'} action={onClickLeftNavbar('dashboard')}/>
      <LeftNavbarItem text='Analytics' isActive={selectedPage === 'analytics' } action={onClickLeftNavbar('analytics')}/>
      <LeftNavbarItem text='Create Quiz' isActive={selectedPage === 'create-quiz'} action={onClickLeftNavbar('create-quiz')}/>
      </div>
      <div>
      <hr className='left-navbar-horizontal-line'/>
      <p className='logout-text'>Log Out</p>
      </div>

    </div>
  )
}

export default LeftNavbar
