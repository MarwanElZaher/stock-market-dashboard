import React, { useState } from 'react';
import Button from '../Button';
import alert from '../../icons/alert.svg'
import traning from '../../icons/traning.svg'
import portfolio from '../../icons/portfolio.svg'
import automation from '../../icons/automation.svg'
import trading from '../../icons/trading.svg'
import logo from '../../icons/logo.png'
import ProfileAvatar from '../ProfileAvatar';
function Sidebar({ className }) {
    const [expanded, setExpanded] = useState(false);
    const handleMouseEnter = () => {
        setExpanded(true);
    }
    const handleMouseLeave = () => {
        setExpanded(false);
    }
    return (


        <nav className={className}>
            <div
                className="bg-[#181818] text-white w-90 transition-all duration-300 overflow-y-auto"
                style={{ width: expanded ? '180px' : '90px', height: '100%' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}

            >
                <img src={logo} alt="logo" className="h-24 w-auto" />
                <div className={`flex flex-col justify-between overflow-hidden`}>
                    <Button isExpanded={expanded} imgSrc={alert} text="Alerts" />
                    <Button isExpanded={expanded} imgSrc={traning} text="traning" />
                    <Button isExpanded={expanded} imgSrc={automation} text="Automation" />
                    <Button isExpanded={expanded} imgSrc={portfolio} text="Portfolio" />
                    <Button isExpanded={expanded} imgSrc={trading} text="Trading" />
                </div>
                <div className='flex justify-between flex-col fixed bottom-0 m-2 overflow-hidden'>
                    <ProfileAvatar isExpanded={expanded} />
                    {expanded && <p className='flex justify-center overflow-hidden'>street suite. 2.0</p>}
                </div>
            </div>
        </nav>
    );
}

export default Sidebar