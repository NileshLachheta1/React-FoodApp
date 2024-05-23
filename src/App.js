import logo from './logo.svg';
import './App.css';
import Navbar from './Componenets/NavbarComponent.js';
import Section from './Componenets/SectionComponent.js'
import Banner1 from './Componenets/BannerComponent1.js'
import AboutUs from './Componenets/AboutUsComponent.js'
import WhyChooseUs from './Componenets/WhyChooseUs.js'
import OurMenu from './Componenets/OurMenu.js';
import BookaTable from './Componenets/BookaTable.js';
import ContactUs from './Componenets/ContactUs.js';
import SignUp from './Componenets/SignUpModal.js'
import SignIn from './Componenets/SignInModal.js';
function App() {
  return (<>
    <Navbar/>
    <Banner1/>
    <AboutUs/>
    <WhyChooseUs/>
    <OurMenu/>
    <BookaTable/>
    <ContactUs/>
    <SignUp/>
    <SignIn/>

   
  </>
  );
}

export default App;
