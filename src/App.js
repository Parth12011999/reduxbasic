import {BrowserRouter,Route,Routes,route} from 'react-router-dom';
import Header from './component/Header';
import AddData from './pages/AddData';
import Footer from './component/Footer';
import ManageData from './pages/ManageData';
import AddContact from './pages/AddContact';
import ManageContact from './pages/ManageContact';
import EditUser from './pages/EditUser';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path='/' element={<><Header/><AddData/><Footer/></>}></Route>
      <Route  path='/managedata' element={<><Header/><ManageData/><Footer/></>}></Route>
      <Route  path='/addcontact' element={<><Header/><AddContact/><Footer/></>}></Route>
      <Route  path='/managecontact' element={<><Header/><ManageContact/><Footer/></>}></Route>
      <Route  path='/edituser/:id' element={<><Header/><EditUser/><Footer/></>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
