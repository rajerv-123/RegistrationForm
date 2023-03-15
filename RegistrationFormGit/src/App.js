import React  from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Login";
import Register2 from "./Register2";
import Welcome from "./Welcome";
import Dashbord from "./Dashbord";
import RegisterSuccess from "./RegisterSuccess";
import ForgotPassword from "./ForgotPassword";
import EditProfile from "./EditProfile";
import EditProWelcome from "./EditProWelcome";
import ForgotPassSidebar from "./ForgotPassSidebar";
import EditProfileSidebar from "./EditProfileSidebar";
import List from "./List.jsx";
import PersonalInfo from "./PersonalInfo.jsx";
import View from "./View.jsx";
import CustomerOrder from "./CustomerOrder"
import Cards from "./Cards.jsx";
import ViewPage from "./ViewPage.jsx";
import EditPage from "./EditPage.jsx"
import { CreatePage } from "./CreatePage";





function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route exact path="/register2" element={<Register2 />}></Route>
          <Route exact path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route exact path="/welcome" element={<Welcome />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/dashbord" element={<Dashbord />}></Route>
          <Route exact path="/registerSuccess" element={<RegisterSuccess />}></Route>
          <Route exact path="/editprofile" element={<EditProfile/>}></Route>
          <Route exact path="/editProWelcome" element={<EditProWelcome/>}></Route>
          <Route exact path="/forgotPassSidebar" element={<ForgotPassSidebar/>}></Route>
          <Route exact path="/editProfileSidebar" element={<EditProfileSidebar/>}></Route>
          <Route exact path="/list" element={<List/>}></Route>
          <Route exact path="/personalInfo" element={<PersonalInfo/>}></Route>
          <Route exact path="/view/:id" element={<View/>}/>
          <Route exact path="/customerorder" element={<CustomerOrder/>}></Route>
          <Route exact path="/cards" element={<Cards/>}></Route>
          <Route exact path="/createpage" element={<CreatePage/>}></Route>
          <Route exact path="/viewpage" element={<ViewPage/>}></Route>
          <Route exact path="/editpage" element={<EditPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
