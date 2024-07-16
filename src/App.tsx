import React, {useState} from 'react';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {EntityType} from './interfaces/EntityType';
import Main from './components/Main';


const App: React.FC = () => {
    const [type, setType] = useState<EntityType>('people');

    return (
        <>
            <NavBar onEntity={setType}/>
            <Main entityType={type}/>
            <ToastContainer/>
            <Footer/>
        </>
    );
}

export default App;
