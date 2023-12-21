import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Home/Navbar/Navbar'
import Movie from './Components/Movie/Movie'
import Footer from './Components/Shared/Footer'

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}>Home</Route>
        <Route path="movie" element={<Movie></Movie>}>Movies</Route>
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App
