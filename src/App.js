import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Footer from './components/Footer';
import AboutUsPage from './components/AboutUsPage';
import Services from './components/Services';
import ContactUsPage from './components/ContactUsPage';
import InfrastructureTechnology from './components/InfrastructureTechnology';
import PartnershipsAndAlliances from './components/PartnershipsAndAlliances';
import ESGCommitment from './components/ESGCommitment';
import CareersInvestor from './components/CareersInvestor';
import ScrollToTop from './components/ScrollToTop';
import AppUpdate from './components/AppUpdate';


function App() {
  return (
   <BrowserRouter>
   <ScrollToTop/>
   <AppUpdate/>
   <Header/>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/aboutus' element={<AboutUsPage/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contactus' element={<ContactUsPage/>}/>
    </Routes>
    <InfrastructureTechnology/>
    <PartnershipsAndAlliances/>
    <ESGCommitment/>
    <CareersInvestor/>
   <Footer/>
   </BrowserRouter>
  );
}

export default App;
