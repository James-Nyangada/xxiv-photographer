import React, { Fragment } from 'react';
import Header2 from '../../components/Header2/Header2';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';
import PortraitImages from '../../components/PortraitImages/PortraitImages';

const PortraitPage = () => {
  return (
    <Fragment>
        <Header2 hclass={'header-style-3'} />
        <PortraitImages/>
        <Footer />
        <Scrollbar />
    </Fragment>
  )
}

export default PortraitPage