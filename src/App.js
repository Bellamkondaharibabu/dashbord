
import { Routes, Route, BrowserRouter,  } from 'react-router-dom';

import './App.css';
import Header from './HeaderComponents/Header';
import "./index.css"
import { useState } from 'react';
import Chat from './Apps/chats/Chat';

import Email from './Apps/email/Email';
import Calendar from './Apps/calender/Calendar';
import Contacts from './Apps/contacts/Contacts';
import Tasks from './Apps/tasks/Tasks';
import Authentication from './Side-Pages/Authentication';
import DashbordDesion from './Dashbord/DashbordDesion';
import Horizontal from './Side-Pages/Horizontal';
import Pages from './Side-Pages/Pages';
import PieChat from './Dashbord/PieChat';
import Sidenav from './sidebar/Sidenav';
import DataForm from './DataForm';



// import Dashbord from './sideComponents/Dashbord';




function App() {


  const [open, setopen] = useState(false);
  const handelClick = () => {
    setopen(!open)
  }
  return (

    <>
    <BrowserRouter>
      <div className='side-bar'>
        <Header click={handelClick} />
        <Sidenav open={open} className="sidenav"/>
     
        <Routes>
          <Route path='/'element={ <DashbordDesion />} />
          <Route path='/dashbord'element={ <DashbordDesion />} />
          <Route path='/chat' element={<Chat />} />
          <Route path='/email' element={<Email />} />
          <Route path='/calendar' element={<Calendar />} />
          <Route path='/contacts' element={<Contacts />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/authentication' element={<Authentication />} />
          <Route path='pages' element={<Pages />} />
          <Route path='/horizontal' element={<Horizontal />} />
          <Route path='/piechat' element={<PieChat />} />
          <Route path='/form' element={<DataForm/>}/>
        </Routes>

      </div>
      </BrowserRouter>
    </>

  );
}

export default App;







