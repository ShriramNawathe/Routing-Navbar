import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";



import Contact from './Contact';

import Blogs from './Blogs';

import Navbar from './Navbar';
import Home from './Home';


function App() {

return (

<BrowserRouter>
<div className='App'>
<Navbar />

<Routes>

<Route exact path="/" element={<Home />}></Route> 

<Route exact path="/contact" element={<Contact />}></Route>

<Route exact path="/blogs" element={<Blogs />}></Route>

</Routes>

</div>


</BrowserRouter>
// 
);

}

export default App;

// npm install react-router-dom
