import React from 'react';

import { Link } from 'react-router-dom';

const Navbar = () => {

return (

<div>

<Link to="/"><p>Home</p></Link>

<Link to="/contact"><p>Contact</p></Link>

<Link to="/blogs"> <p>Blogs</p></Link>

</div>
)

}

export default Navbar;