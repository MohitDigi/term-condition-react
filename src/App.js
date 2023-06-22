import { Routes ,  Route } from "react-router-dom";
import PrivacyPolicy from "./component/PrivacyPolicy";
import TermsOfService from "./component/TermsOfService";
import Support from "./component/Support";
import logo from './icon/Play Dates logo.svg'
import './App.css'

function App() {
  return (
    <>    
    <img src={logo} id="logo" width="280px"/>
      <Routes>
        <Route path="/" element={<PrivacyPolicy/>} />
        <Route path="/terms" element={<TermsOfService/>} />     
        <Route path="/support" element={<Support/>} />     
      </Routes>
    </>
  );
}

export default App;
