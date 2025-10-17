
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Components/Home/Home.jsx';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Layout from './Components/Layout/Layout';
import Products from './Components/Products/Products.jsx';
import About from './Components/About/About.jsx';
import Contact from './Components/Contact/Contact.jsx';
import Service from './Components/Service/Service.jsx';



function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />

    
     
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
