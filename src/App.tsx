import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./templates/Header";
import { Top } from "./templates/Top";
import { Footer } from "./templates/Footer";
import { PostComic } from "./templates/PostComic";
import { ComicPage } from "./components/ComicPage";
import { DashBoard } from "./templates/DashBoard";

export const App = () => {
  return (
    <div className='bg-black min-h-screen'>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Top/>} />
          <Route path='/PostComic' element={<PostComic/> }/>
          <Route path='/ComicPage' element={<ComicPage/>}/>
          <Route path='/DashBoard' element={<DashBoard/>}/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}