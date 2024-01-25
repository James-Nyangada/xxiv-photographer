import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import BabyPhotoImages from '../../components/BabyImages/BabyPhotoImages';

const BabyPhotoPage = () => {
  return (
    <Fragment>
      <Header2 hclass={'header-style-3'} />
      <BabyPhotoImages/>
      <Footer />
      <Scrollbar />
  </Fragment>
  )
}

export default BabyPhotoPage