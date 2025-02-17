import { BrowserRouter, Routes, Route, } from "react-router-dom";
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
  return (
    <div className='bg-black min-h-screen'>
      <BrowserRouter>
        <Header></Header>
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
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}