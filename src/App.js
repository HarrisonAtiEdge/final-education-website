import React from 'react'
import Header from "./components/common/header/Header"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import About from "./components/about/About"
import CourseHome from "./components/allcourses/CourseHome"
import Team from "./components/team/Team"
import Pricing from "./components/pricing/Pricing"
import Blog from "./components/blog/Blog"
import Contact from "./components/contact/Contact"
import Footer from "./components/common/footer/Footer"
import Home from "./components/home/Home"
import "./App.css"
import BlogDetail from './components/blog/blogDetail'
import Readmore from './components/team/Readmore'
import ScrollToTop from './ScrollToTop'
import Partners from './components/team/Partners'
import PartnerDetails from './components/team/PartnerDetails'
import CoursesDetails from './components/allcourses/CoursesDetails'
import PriceCard from './components/pricing/PriceCard'
import PriceDetail from './components/pricing/PriceDetail'
import Faq from './components/pricing/Faq'
import RegistrationForm from './components/Froms/RegistrationForms'
import Login from './components/loginpage/Login'
import Forgetpassword from './components/loginpage/Forgetpassword'
import Organizationform from './components/Addorganization/Organizationform'
import Adddata from './components/Addorganization/Adddata'
import Mainoxford from './components/pricing/Mainoxford'
import Mainisabal from './components/pricing/Mainisabal'
import Mainsanford from './components/pricing/Mainsanford'
import Main3Danantomica from './components/pricing/Main3Danantomica'
import MainAccessMedicine from './components/pricing/MainAccessMedicine'
import MainNEJMknowledge from './components/pricing/MainNEJMknowledge'
import Accessdetail from './components/pricing/Accessdetail'
import Anantomicadetail from './components/pricing/Anantomicadetail'
import NEJKdetail from './components/pricing/NEJKdetail'
import Sanforddetail from './components/pricing/Sanforddetail'
import Isabaldetail from './components/pricing/Isabaldetail'
import News from './components/news/News'
import Mainnews from './components/news/Mainnews'
import Blogmain from './components/news/Blog'
import EmptyListmain from './components/news/EmptyList'

function App() {
  return (
    <>
      <Router onClick={window.scrollTo(0, 0)}>
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/courses' component={CourseHome} />
          <Route path='/collaborations' component={Team} />
          <Route path='/shop' component={Pricing} />
          <Route path='/partners' component={Partners} />
          <Route path='/conferences' component={Blog} />
          <Route path='/conferences-detail/:id' component={BlogDetail} />
          <Route path='/partners-detail/:id' component={PartnerDetails} />
          <Route path='/contact' component={Contact} />
          <Route path='/readmore-detail/:id' component={Readmore} />
          <Route path='/courses-detail/:id' component={CoursesDetails} />
          <Route path='/price-detail/:id' component={PriceDetail} />
          <Route path='/faqs' component={Faq} />
          <Route path='/enroll-now' component={RegistrationForm} />
          <Route path='/login' component={Login} />
          <Route path='/forgetpassword' component={Forgetpassword} />
          <Route path='/add_conference' component={Organizationform} />
          <Route path='/databutton' component={Adddata} />
          <Route path='/books' component={Mainoxford} />
          <Route path='/guides' component={Mainisabal} />
          <Route path='/sanford-guides' component={Mainsanford} />
          <Route path='/3d-anantomica' component={Main3Danantomica} />
          <Route path='/access-medicine' component={MainAccessMedicine} />
          <Route path='/nejm-knowledge' component={MainNEJMknowledge} />
          <Route path='/accessdetail/:id' component={Accessdetail} />
          <Route path='/anatomicadetail/:id' component={Anantomicadetail} />
          <Route path='/NEJKdetail/:id' component={NEJKdetail} />
          <Route path='/sanforddetail/:id' component={Sanforddetail} />
          <Route path='/isabaldetail/:id' component={Isabaldetail} />
          <Route path='/news/:id' component={News} />
          <Route path='/new' component={Mainnews} />
          <Route path='/blog/:id' component={Blogmain} />
          <Route path='/EmptyList' component={EmptyListmain} />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
