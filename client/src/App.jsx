
import AdvocateLogin from './components/AdvocateLogin';
import AdvocateRegistration from './components/AdvocateLogin';
import './index.css'
import Main from './pages/Main';

import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {

  return (
<BrowserRouter>
<Routes>
  <Route  path='/' element={<Main/>}/>
  <Route  path='/advocateregister' element={<AdvocateRegistration/>} />
  <Route  path='/advocatelogin' element={<AdvocateLogin/>} />
</Routes>
</BrowserRouter>
      
  )
}

export default App
