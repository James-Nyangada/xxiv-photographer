import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
 import BookingSection from '../../components/BookingSection/BookingSection'; 


const BookingPage = () => {
  return (
    <Fragment>
        <Header2 hclass={'header-style-3'} />
        <BookingSection/> 
        <Footer />
        <Scrollbar />
    </Fragment>
  )
}

export default BookingPage