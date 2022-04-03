import './App.css';
import React,{ Component } from 'react';
import Header from './layout/header';
import { Route, Routes } from "react-router-dom"
import Footer from './layout/footer';
import Home from './views/home';
import GeneralStaff from './views/generalStaff/generalStaff';
import Campuses from './views/campuses/campuses';
import Calender from './views/calendar/calender';
import Fees from './views/fees/fees';
import Library from './views/library/library';
import Notication from './views/generalNotication/notication';
import Events from './views/generalEvent/events';
import ShortCours from './views/shortcourses/shortcours';

class App extends Component {
  state = {
    show: false
  }
  render() {
    const {show} = this.state
    return (
      <div className="page-wrapper">
        <Header />
          <Routes>
            <Route path='/generalstaff' element={<GeneralStaff show={show} />} />
            <Route path='/campuses' element={<Campuses show={show} />} />
            <Route path='/shortcours' element={<ShortCours show={show} />} />
            <Route path='/calender' element={<Calender show={show} />} />
            <Route path='/fees' element={<Fees show={show} />} />
            <Route path='/library' element={<Library show={show} />} />
            <Route path='/notication' element={<Notication show={show} />} />
            <Route path='/event' element={<Events show={show} />} />
            <Route path='/' element={<Home show={show} />} />
          </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
