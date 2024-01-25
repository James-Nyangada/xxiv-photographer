import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import BirthdayImages from '../../components/BirthdayImages/BirthdayImages';

const BirthdayPhotoPage = () => {
  return (
    <Fragment>
        <Header2 hclass={'header-style-3'} />
        <BirthdayImages/>
        <Footer />
        <Scrollbar />
    </Fragment>
  )
}

export default BirthdayPhotoPage