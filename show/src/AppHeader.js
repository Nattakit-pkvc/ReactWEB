import { GiHamburgerMenu } from "react-icons/gi";
import Navbar from './navbar';
import { useState } from "react";
function AppHeader() {
    const [showNav, setshowNav] = useState(false)
    return (
        <div className="App">
            <header className="AppBody">
            <GiHamburgerMenu onClick={() => setshowNav(!showNav)} />
            </header>
            <Navbar show={showNav} />
        </div>
    );
}

export default AppHeader;
