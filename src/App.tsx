import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./templates/Header";
import { Top } from "./templates/Top";
import { Footer } from "./templates/Footer";

export const App = () => {
  return (
    <div className='bg-black'>
      <BrowserRouter>
        <Header></Header>
        <Top></Top>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  )
}