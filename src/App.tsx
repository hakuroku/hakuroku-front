import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Header } from "./templates/Header";
import { Top } from "./templates/Top";
import { Footer } from "./templates/Footer";
import { PostComic } from "./templates/PostComic";
import { Episode } from "./templates/Episode";
import { DashBoard } from "./templates/DashBoard";
import { NotFoundPage } from "./templates/NotFoundPage";
import { Success } from "./templates/Success";

export const App = () => {
  return (
    <div className='bg-black min-h-screen'>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Top />} />
          <Route path='/postComic' element={<PostComic />} />
          <Route path='/episode/:url' element={<Episode />} />
          <Route path='/dashboard' element={<DashBoard/>} />
          <Route path='/success' element={<Success />} />
          <Route path='*' element={<NotFoundPage/>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}