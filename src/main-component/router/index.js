import React from 'react';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import HomePage3 from '../HomePage3/HomePage3';
import BabyPhotoPage from '../BabyPhotoPage/BabyPhotoPage';
import BirthdayPhotoPage from '../BirthdayPhotoPage/BirthdayPhotoPage';
import AboutMePage from '../AboutMePage/AboutMePage';
import AboutUsPage from '../AboutUsPage/AboutUsPage';
import TeamPage from '../TeamPage/TeamPage';
import TeamSinglePage from '../TeamSinglePage/TeamSinglePage';
import ServiceSinglePage from '../ServiceSinglePage/ServiceSinglePage';
import PortfolioGridPage from '../PortfolioGridPage/PortfolioGridPage';
import PortfolioPageS2 from '../PortfolioPageS2/PortfolioPageS2';
import PortfolioPageS3 from '../PortfolioPageS3/PortfolioPageS3';
import ProjectSinglePage from '../ProjectSinglePage/ProjectSinglePage';
import ServicePage from '../ServicePage/ServicePage';
import PricingPage from '../PricingPage/PricingPage';
import BlogGridPage from '../BlogGridPage/BlogGridPage';
import EquipmentTools from '../EquipmentTools/EquipmentTools';
import BlogRightPage from '../BlogRightPage/BlogRightPage';
import BlogLeftPage from '../BlogLeftPage/BlogLeftPage';
import BlogFullPage from '../BlogFullPage/BlogFullPage';
import BlogDetails from '../BlogDetails/BlogDetails';
import ContactPage from '../ContactPage/ContactPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import BlogDetailsSidebar from '../BlogDetailsSidebar/BlogDetailsSidebar';

const AllRoute = () => {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage3 />} />
          <Route path= "baby-photos" element = {<BabyPhotoPage/>} />
          <Route path= "birthday-photo" element = {<BirthdayPhotoPage/>} />
          <Route path="about-me" element={<AboutMePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="services" element={<ServicePage />} />
          <Route path="service-single/:slug" element={<ServiceSinglePage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="team-single/:slug" element={<TeamSinglePage />} />
          <Route path="portfolio" element={<PortfolioGridPage />} />
          <Route path="portfolio-s2" element={<PortfolioPageS2 />} />
          <Route path="portfolio-s3" element={<PortfolioPageS3 />} />
          <Route path="project-single/:slug" element={<ProjectSinglePage />} />
          <Route path="/equipment-tools" element= {<EquipmentTools/>}/>
          <Route path="blog-grid" element={<BlogGridPage />} />
          <Route path="blog-right-sidebar" element={<BlogRightPage />} />
          <Route path="blog-left-sidebar" element={<BlogLeftPage />} />
          <Route path="blog-fullwidth" element={<BlogFullPage />} />
          <Route path="blog-single/:slug" element={<BlogDetails />} />
          <Route path="blog-single-sidebar/:slug" element={<BlogDetailsSidebar />} />
          <Route path="404" element={<ErrorPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default AllRoute;
