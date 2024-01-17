import React from "react";
import { Container } from 'react-bootstrap'
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Error from "./Components/Error";
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import Value from './Pages/Value';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Picker from "./Components/Picker";
import Example from "./Components/Examplecode";

function App() {
    return (
      <BrowserRouter>
      <div ClassName="App">
      <Header/>
     
        <Routes>
          
          <Route path ='/home' element={<Home/>}></Route>
          <Route path ='/value' element={<Value/>}></Route>
          <Route path ='/Contact' element={<Contact/>}></Route>
          <Route path ='/E' element={<Error/>}></Route>
        </Routes>
      
      </div>
      <main>
          
      </main>
    
      {/* <Picker/> */}
      {/* <Example/> */}
      <Footer/>
      
      </BrowserRouter>
       
       
       
      

      
    );
}
export default App;
       
       
       
      