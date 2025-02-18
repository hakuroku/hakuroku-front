import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import { Header } from "./templates/Header";
import { Top } from "./templates/Top";
import { Footer } from "./templates/Footer";
import { UploadEpisode } from "./templates/UploadEpisode";
import { Episode } from "./templates/Episode";
import { Series } from "./templates/Series";
import { DashBoard } from "./templates/DashBoard";
import { NotFound } from "./templates/NotFound";
import { Success } from "./templates/Success";
import { Default } from "./templates/Default";

export const App = () => {
  const [showHeader, setShowHeader] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      const handleMouseOver = (e: MouseEvent) => {
        if (e.clientY < 100) {
          setShowHeader(true)
        } else {
          setShowHeader(false)
        }
      };
      window.addEventListener('mousemove', handleMouseOver);
      return () => {
        window.removeEventListener('mousemove', handleMouseOver);
      };
    }
  }, [location])


  return (
    <div className='bg-black h-screen'>
      {showHeader &&  <div className={`absolute top-0 left-0 w-full z-50 transition-opacity duration-500 ease-in-out ${showHeader ? 'opacity-100 animate-fadeIn2' : 'opacity-0'}`}><Header /></div>}
        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/upload/episode' element={<UploadEpisode />} />
          <Route path='/episode/:url' element={<Episode />} />
          <Route path='/series' element={<Series />} />
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/success' element={<Success />} />
          <Route path='/default' element={<Default />} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        <Footer/>
    </div>
  )
}