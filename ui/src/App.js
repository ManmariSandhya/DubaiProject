import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

import Header from "./components/Headers/Headers";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Edit from "./pages/Edit/Edit";
import Profile from "./pages/Profile/Profile";
import { Routes, Route } from "react-router-dom"
import { MainPageComponent } from './pages/Mainpage/Mainpage';
import { Footer } from './components/footer/footer.component';
import { RestaurantMainComponent } from './pages/Reataurant/Restaurant-main/Restaurant-main';
import { BiryaniComponent } from './pages/Reataurant/Biryani_page/Biryani_page';
import { HaleemComponent } from './pages/Reataurant/Haleem_page/Haleem_page';
import { HospitalMainComponent } from './pages/Hospital/Hospital_main/Hospital_main';
import { ChildrenHospitalComponent } from './pages/Hospital/Children_Hospital/Children_Hospital';
import { HospitalListComponent } from './pages/Hospital/Hospital_list/Hospital_list';
import { HotelMainComponent } from './pages/Hotels/Hotels_main/Hotels_main';
import { GolcondaHotelComponent } from './pages/Hotels/Golkonda_hotel/Golkonda_hotel';
import { TutorsMainPage } from './pages/Tutors/tutors_mainpage/tutors_mainpage';
import { SchoolPage } from './pages/Tutors/Schools/Schools';
import { BankMainPage } from './pages/Bank/Bank_mainpage/Bank_mainpage';
import { AtmMainPage } from './pages/ATM/atm_mainpage/atm_mainpage';
import SBIResponsive from './pages/ATM/sbi_bank/sbi_bank';
import { MoneySavingComponent } from './pages/Bank/Money_saving/money_saving';
import { BawarchiBiryaniComponent } from './pages/Reataurant/bawarchi_biryani/bawarchi_biryani';





function App() {
  return (
    <>

      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/mainpage' element={<MainPageComponent></MainPageComponent>}></Route>
        <Route path='/register' element={<Register />} />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/userprofile/:id' element={<Profile />} />
        <Route path="/restaurant-main" element={<RestaurantMainComponent></RestaurantMainComponent>}></Route>
        <Route path="/biryani_restaurents" element={<BiryaniComponent></BiryaniComponent>}></Route>
        <Route path="/haleem_restaurents" element={<HaleemComponent></HaleemComponent>}></Route>

        <Route path="/hospital_main" element={<HospitalMainComponent></HospitalMainComponent>}></Route>
        <Route path="/rainbow_hospital" element={<ChildrenHospitalComponent></ChildrenHospitalComponent>}></Route>
        <Route path="/hospital_list" element={<HospitalListComponent></HospitalListComponent>}></Route>
        <Route path="/hotel_main" element={<HotelMainComponent></HotelMainComponent>}></Route>
        <Route path="/golkonda_hotel" element={<GolcondaHotelComponent></GolcondaHotelComponent>}></Route>
        <Route path="/tutors" element={<TutorsMainPage></TutorsMainPage>}></Route>
        <Route path="/school" element={<SchoolPage></SchoolPage>}></Route>
        <Route path="/bank" element={<BankMainPage></BankMainPage>}></Route>
        <Route path='/atm' element={<AtmMainPage></AtmMainPage>}></Route>
        <Route path="/money_saving" element={<MoneySavingComponent></MoneySavingComponent>}></Route>
        <Route path='/bawarchi_biryani' element={<BawarchiBiryaniComponent></BawarchiBiryaniComponent>}></Route>
        {/* <Route path='sbi_atm' element={<SBIResponsive></SBIResponsive>}></Route> */}
      </Routes>
      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
