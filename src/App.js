import logo from './logo.svg';
import './App.css';
  import Navigationbar from './Components/Navbar/Navigationbar';


import {
  
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Services from './Components/Services/Services';
import Login from './Components/User/LogIn/Login';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import SignUp from './Components/User/SignUp/SignUp';
import Confirmation from './Components/Admin/Confirmation/Confirmation';
import Members from './Components/User/Members/Members';
import SingleUser from './Components/User/SingleUser/SingleUser';




function App() {
  return (
    <BrowserRouter>
    <Navigationbar/>
<Routes>
<Route path="/" element={<Login/>}></Route>
<Route path="/home" element={<Home/>}></Route>
<Route path="/services" element={<Services/>} />
<Route path="/log-in" element={<Login/>} />
<Route path="/sign-up" element={<SignUp/>}/>
<Route path="/confirm" element={<Confirmation/>}/>
<Route path="/members" element={<Members/>}/>
<Route path="/single-user/:id" element={<SingleUser/>}/>

</Routes>
<Footer></Footer>
    </BrowserRouter>
   
  );
}

export default App;
