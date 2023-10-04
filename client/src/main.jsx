import ReactDOM from 'react-dom/client'
import './index.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Main from './pages/Main.jsx';
import PoliceAuthentication from './pages/PoliceAuthentication.jsx';
import AdvocateRegistration from './components/AdvocateRegisteration.jsx';
import OTPVerifiy from './components/OTPVerify';
import CourtDeptAuthentication from './pages/CourtDeptAuthentication';
import AdvocateLogin from './components/AdvocateLogin';
import Victim from './pages/Victim';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Main/>} /> 
    <Route path="/policeauth" element={<PoliceAuthentication />} /> 
    <Route path="/courtdeptauth" element={<CourtDeptAuthentication />} /> 
    <Route path="/advocatelogin" element={<AdvocateLogin />} /> 
    <Route path="/victim" element={<Victim />} /> 
    <Route path="/advocateregister" element={<AdvocateRegistration/>} /> 
    <Route path="/otp" element={<OTPVerifiy/>} /> 
    
  </Routes>
</BrowserRouter>
)
