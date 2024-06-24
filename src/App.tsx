import './App.css'

// components
import Navbar from './components/Navbar/Navbar'
import Background from './components/Background/Background'
import Footer from './components/Footer/Footer'
import HomePage from './components/HomePage/HomePage'

function App() {

    return (
        <div id="root-container">
            <Navbar />
            <div className="content">
                <Background />
                <HomePage />
            </div>
            <Footer />
        </div>
    );
}

export default App
