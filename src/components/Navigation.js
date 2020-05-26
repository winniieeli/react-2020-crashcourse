import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    const [showMenu, setShowMenu] = useState(false)

    let menu
    if (showMenu) {
        menu = <div className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"> 
            This is the menu </div>
    }

    return (
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            
            { menu }
        </nav>
    );
}

export default Navigation;
