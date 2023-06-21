import { Routes ,  Route } from "react-router-dom";
import PrivacyPolicy from "./component/PrivacyPolicy";
import TermsOfService from "./component/TermsOfService";

function App() {
  return (
    <>    
      <Routes>
        <Route path="/" element={<PrivacyPolicy/>} />
        <Route path="/" element={<TermsOfService/>} />     
      </Routes>
    </>
  );
}

export default App;
