import React from 'react'
import { BrowserRouter , Route, Routes} from  'react-router-dom'
import Navbar from './components/Navbar';
import Contact from './components/Contact'
import Index from './components/Index';
import Footer from './components/Footer';
import './App.css'
export default function App() {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Index/>}/>
                <Route exact path='/contact' element={<Contact/>}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    );
}