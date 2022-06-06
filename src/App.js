
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Appoinment from './Pages/Appoinment/Appoinment';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import RequireAuth from './Pages/Login/RequireAuth';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar/Navbar';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MyAppoinments from './Pages/DashBoard/MyAppoinments';
import MyReview from './Pages/DashBoard/MyReview';
import DashBoard from './Pages/DashBoard/DashBoard';
import Users from './Pages/DashBoard/Users';
function App() {
  return (
    <div className='max-w-7xl mx-auto px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/appoinment" element={<RequireAuth>
          <Appoinment /></RequireAuth>}/>      
        <Route path='/signin' element={<Login></Login>}></Route>
          <Route path='/dashboard' element={<RequireAuth><DashBoard></DashBoard></RequireAuth>}>
            <Route index element={<MyAppoinments></MyAppoinments>}></Route>
            <Route path='review' element={<MyReview></MyReview>}></Route>
            <Route path='users' element={<Users></Users>}></Route>
          </Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path="/about" element={<About />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
