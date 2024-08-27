import ReactDOM from 'react-dom/client';
import Home from './views/Home/Home';
import About from './views/About/About';
import Contact from './views/Contact/Contact';
import "./index.css"


const root = ReactDOM.createRoot(document.getElementById('root'));

const currentpath = window.location.pathname;

if(currentpath=="/"){
    root.render(<Home/>)
}
else if(currentpath=="/about"){
    root.render(<About/>)
}
else if(currentpath=="/contact"){
    root.render(<Contact/>)
}
else{
    root.render(<h1>404 not found</h1>)
}
