import "./App.css";
import "./Desktop.css";
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
import ScrollToTop from "./Components/ScrollToTop";
import { useEffect, useState } from "react";
import { DesktopHeader } from "./Components/DesktopHeader";

function App() {
   const [desktopWidth] = useState(750);
   const [width, setWidth] = useState(() => window.innerWidth);

   useEffect(() => {
      window.addEventListener("resize", handleResize);
      function handleResize() {
         setWidth(window.innerWidth);
      }
   }, []);

   return (
      <BrowserRouter>
         <div className='App'>
            <ScrollToTop />
            {width < desktopWidth ? <Header /> : <DesktopHeader />}
            {width > desktopWidth ? (
               <div className='Container'>
                  <Routes>
                     <Route path='/' element={<Home />} />
                     <Route path='/gallery' element={<Gallery />} />
                     <Route path='/gallery/:item_id' element={<FirePage />} />
                     <Route path='/services' element={<Services />} />
                     <Route path='/about' element={<About />} />
                     <Route path='/contact' element={<Contact />} />
                     <Route path='/testimonials' element={<Testimonials />} />
                  </Routes>
               </div>
            ) : (
               <div>
                  <Routes>
                     <Route path='/' element={<Home />} />
                     <Route path='/gallery' element={<Gallery />} />
                     <Route path='/gallery/:item_id' element={<FirePage />} />
                     <Route path='/services' element={<Services />} />
                     <Route path='/about' element={<About />} />
                     <Route path='/contact' element={<Contact />} />
                     <Route path='/testimonials' element={<Testimonials />} />
                  </Routes>
               </div>
            )}
            <Footer />
         </div>
      </BrowserRouter>
   );
}

export default App;
