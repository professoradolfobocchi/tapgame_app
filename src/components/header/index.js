import React from 'react';
import Signin from '../signin';
import './style.css';
import tapGameImg from '../../assets/images/tapgame.png';
function Header(props) {
    const marcas = "marcas";
    const formativas = "formativas";
    return (
        <div class="header">
            <nav>
                <div class="nav-left">
                    <img src={tapGameImg} />
                </div>
                <div class="nav-right">

                    <div class="nav-linha">
                        {
                            marcas.split("").map(letra => {
                                return (<div class="letra">{letra}</div>)
                            }
                            )
                        }
                    </div>
                    <div class="nav-linha">
                        {
                            formativas.split("").map(letra => {
                                return (<div class="letra">{letra}</div>)
                            }
                            )
                        }
                    </div>
                </div>




                {/*
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
            */}
            </nav>

        </div>
    );
}

export default Header;