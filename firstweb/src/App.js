import "./App.css";
import Navbar from "./bds-project/Navbar/Navbar.js";
import MobileNavbar from "./bds-project/Mobile-Navbar/Mobile-Navbar.js";
import Footer from "./bds-project/Footer/Footer.js";


import Header from "./bds-project/Header-top/Header.js";
import Contect from "./bds-project/Content/Contect.js";
import Images from "./bds-project/Images/Images.js";
import Learn from "./bds-project/Learn/Learn.js";
import Chairman from "./bds-project/Chairman/Chairman.js";
import Activity from "./bds-project/Activity/Activity.js";
import Gallery from "./bds-project/Photo-Gallery/Gallery.js";
import Explore from "./bds-project/Explore/Explore.js";
import Innovate from "./bds-project/Innovate/Innovate.js";
import News from "./bds-project/News/News.js";

// Navbar DropDown Menu Start

/* About Us DropDown Menu Start*/
import About from "./bds-project/Navbar/About-Us-DropDown/About-Us/About.js";
import OurBeginning from "./bds-project/Navbar/About-Us-DropDown/Our-Beginning/Our-Beginning.js";
import AnInsight from "./bds-project/Navbar/About-Us-DropDown/An-Insight/An-Insight.js";
import Mission from "./bds-project/Navbar/About-Us-DropDown/Mission/Mission.js";
import Objectives from "./bds-project/Navbar/About-Us-DropDown/Objectives/Objectives.js";
import Vission from "./bds-project/Navbar/About-Us-DropDown/Vission/Vission.js";
import ChairmanMessage from "./bds-project/Navbar/About-Us-DropDown/ChairmanMessage/ChairmanMessage.js";
import DirectorSirMessage from "./bds-project/Navbar/About-Us-DropDown/Director-Sir-Message/Director-Sir-Message.js";
import DirectorMamMessage from "./bds-project/Navbar/About-Us-DropDown/Director-Mam-Message/Director-Mam-Message.js";
import PrincipalMessage from "./bds-project/Navbar/About-Us-DropDown/Principal-Message/Principal-Message.js";
/* About Us DropDown Menu End*/

/* InfraStructure DropDown Menu Start */
import Sports from "./bds-project/Navbar/Infrastructure-DropDown/Sports/Sports.js";
import KinderGarten from "./bds-project/Navbar/Infrastructure-DropDown/KinderGarten/KinderGarten.js";
import SchoolLibrary from "./bds-project/Navbar/Infrastructure-DropDown/SchoolLibrary/SchoolLibrary.js";
import Transport from "./bds-project/Navbar/Infrastructure-DropDown/Transport/Transport.js";
import Club from "./bds-project/Navbar/Infrastructure-DropDown/Club/Club.js";
/* InfraStructure DropDown Menu End */

/* Guidline DropDown Menu Start*/
import Admission from "./bds-project/Navbar/Guideline/Admission/Admission.js";
import Rules from "./bds-project/Navbar/Guideline/Rules/Rules.js";
import Grading from "./bds-project/Navbar/Guideline/Grading/Gradung.js";
/* Guidline DropDown Menu End*/

// Navbar DropDown Menu Start


import { BrowserRouter, Routes, Route } from "react-router-dom";
import TEDx from "./bds-project/Navbar/TEDx/TEDx.js";

function App() {
  return (
    <BrowserRouter>
    {/* 👇 ye har page pe common rahega */}
      <Header />
      {/* 👇 ye har page pe common rahega */}
      <Contect />

      {/* 👇 ye har page pe common rahega */}
      <Navbar />
      {/* 👇 ye Mobile ke Liye hai Humberger Menu*/}
      <MobileNavbar />
      

      <Routes>
        {/* ✅ Home Page */}
        <Route
          path="/"
          element={
            <>
              <Images />
              <Learn />
              <Chairman />
              <Activity />
              <Gallery />
              <Explore />
              <Innovate />
              <News />
            </>
          }
        />

        {/* ✅ About Page Start */}
        <Route path="/About" element={<About />} />
        <Route path="/OurBeginning" element={<OurBeginning/>} />
        <Route path="/AnInsight" element={<AnInsight/>} />
        <Route path="/Mission" element={<Mission/>} />
        <Route path="/Objectives" element={<Objectives/>}/>
        <Route path="/Vission" element={<Vission/>}/>
        <Route path="/ChairmanMessage" element={<ChairmanMessage/>}/>
        <Route path="/DirectorSirMessage" element={<DirectorSirMessage/>}/>
        <Route path="/DirectorMamMessage" element={<DirectorMamMessage/>}/>
        <Route path="/PrincipalMessage" element={<PrincipalMessage/>}/>
        {/* ✅ About Page End */}

        {/* ✅ InfraStructure Page Start */}
        <Route path="/Sports" element={<Sports/>}/>
        <Route path="/KinderGarten" element={<KinderGarten/>}/>
        <Route path="/SchoolLibrary" element={<SchoolLibrary/>}/>
        <Route path="/Transport" element={<Transport/>}/>
        <Route path="/Club" element={<Club/>}/>
        {/* ✅ InfraStructure Page End */}

        {/* ✅ Guidline Page Start*/}
        <Route path="/Admission" element={<Admission/>}/>
        <Route path="/Rules" element={<Rules/>}/>
        <Route path="/Grading" element={<Grading/>}/>
        {/* ✅ Guidline Page End */}

        {/* ✅ TEDx Page Start */}
        <Route path="/TEDx" element={<TEDx/>}/>
        {/* ✅ TEDx Page End */}


      </Routes>

      {/* 👇 ye bhi har page pe rahega */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
