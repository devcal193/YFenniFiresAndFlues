import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Home";
import { Gallery } from "./Components/Gallery";
import { FirePage } from "./Components/FirePage";
import { Services } from "./Components/Services";
import { About } from "./Components/About";
import { Contact } from "./Components/Contact";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Testimonials } from "./Components/Testimonials";

function App() {
   return (
      <BrowserRouter>
         <div className='App'>
            <Header />
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/gallery' element={<Gallery />} />
               <Route path='/gallery/:item_id' element={<FirePage />} />
               <Route path='/services' element={<Services />} />
               <Route path='/about' element={<About />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/testimonials' element={<Testimonials />} />
            </Routes>
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
