import React, { Fragment } from 'react'
import Header2 from '../../components/Header2/Header2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';
import { Link } from 'react-router-dom'


const EquipmentTools = () => {



  return (
    <Fragment>
        <Header2 hclass={'header-style-3'} />
        <PageTitle  pagesub={'Equipments and Tools'} />

        <div>
            <Link></Link>
        </div>        
        
        <Footer />
        <Scrollbar />
    </Fragment>
  )
}

export default EquipmentTools