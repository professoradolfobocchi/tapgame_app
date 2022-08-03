import React from 'react';
import Signin from '../signin';
import './style.css';

function Header(props) {
    return (
        <div class="header">
            <nav>
                <ul>
                    <li>
                        <button class="btn" onClick={()=>props.onClickSignin()}>signin</button>
                    </li>
                    <li>
                        <button class="btn" onClick={()=>props.onClickSignup()}>signup</button>
                    </li>
                    <div class="dropdown-content" id="loginDropdown">
                        {props.openSignin && 
                            <Signin />
                        }
                    </div>
                </ul>

            </nav>

        </div>
    );
}

export default Header;