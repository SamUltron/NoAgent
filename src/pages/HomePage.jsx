import React from 'react'
import Hero from '../components/Hero'
import How from './How'
import Reason from './Reason'
import OurUser from './OurUser'
import GetIn from './GetIn'
import DownloadPage from './DownloadPage'
import Choose from './Choose'

const HomePage = () => {
  return (
    <div>
        <Hero/>
        <How/>
        <Reason/>
        <Choose/>
        <OurUser/>
        <GetIn/>
        <DownloadPage/>
    </div>
  )
}

export default HomePage