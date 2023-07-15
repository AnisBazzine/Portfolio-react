import './App.css';
import Home from './component/home';
import About from './component/about';
import Menu from './component/menu';
import Service from './component/service';
import Contact from './component/contact';
import Footer from './component/footer';
function App() {
    return (
        <div className="App">
            <nav className='header-top' style={headerStyle}>
                <div className='logo' style={logo}>Foods</div>
                <div className='navMenu'>
                    <ul className='ul-nav' style={ulNav}>
                        <li><a className='link' href='#home' >Home</a></li>
                        <li><a className='link' href='#about' >About</a></li>
                        <li><a className='link' href='#menu' >Menu</a></li>
                        <li><a className='link' href='#service' >Service</a></li>
                        <li><a className='link' href='#contact' >Contact</a></li>
                    </ul>
                </div>
            </nav>
            <Home/>
            <About/>
            <Menu/>
            <Service/>
            <Contact/>
            <Footer/>
        </div>
    );
}
export default App;
const headerStyle={    
    display:'flex',
    justifyContent: 'space-around',
    fontSize:'var(--p-font)',
    marginTop:'1.5rem',
    fontWeight:'bold',
}
const logo ={
    color : 'var(--main-color)',
    fontSize:'var(--h2-font)',
}
const ulNav ={
    display:'flex',
    gap: '0.5rem',
}
