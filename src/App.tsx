import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./templates/Header";
import { Top } from "./templates/Top";
import { Footer } from "./templates/Footer";
import { PostComic } from "./templates/PostComic";

export const App = () => {
  return (
    <div className='bg-black'>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Top/>} />
          <Route path='/PostComic' element={<PostComic/> }/>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}