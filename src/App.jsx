import { BrowserRouter, Routes, Route } from "react-router-dom"
import GymImageOne from "./components/GymImageOne"
import GymImageTwo from "./components/GymImageTwo"
import GymImageThree from "./components/GymImageThree"
import GymImageFour from "./components/GymImageFour"
import Navigation from "./components/Navigation"
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 className="text-center my-3">Gallery Project</h1>
        </div>
        <div className="container d-flex justify-content-center">
          <Routes>
            <Route path='/' element={<GymImageOne className='main-img-container' />} />
            <Route path="/gym-img-1" element={<GymImageOne className='main-img-container' />} />
            <Route path="/gym-img-2" element={<GymImageTwo className='main-img-container' />} />
            <Route path="/gym-img-3" element={<GymImageThree className='main-img-container' />} />
            <Route path="/gym-img-4" element={<GymImageFour className='main-img-container' />} />
          </Routes>
        </div>
        <div className="container">
          <Navigation />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
