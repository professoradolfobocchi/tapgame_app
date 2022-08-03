import React, { useState } from 'react';
import Footer from '../../components/footer';
import MeuRanking from '../../components/meuranking';
import RankingList from '../../components/rankinglist';
import './style.css';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../store/modules/usuario/actions';
import Signup from '../../components/signup';

function Header(props) {
    const dispatch = useDispatch();
    const user = useSelector(({usuario}) => usuario.currentUser);
    return(
        <>
        <div class="header">
        <nav>
            <div class="user-area">
                <div class="user-nick">{user.nick}</div>
                <div class="user-ranking">{`#${user.ranking}`}</div>
            </div>
            <ul>

                <li>
                    <a onClick={()=> props.onClickPerfil()}> 
                        <img src={`${user.avatar}`} alt=""/>
                    </a>
                    
                </li>
                <li>
                    <a onClick={() => dispatch(logOut())}> 
                        <i class="fa fa-sign-out"></i>
                    </a>
                </li>
            </ul>     
        </nav> 
    </div>
        </>
    );
}

function Banner(props) {
    return(
        <>
        <div class="banner">
            <div class="banner-left">
                <RankingList />
            </div>
            <div class="banner-right">
                {props.openPerfil===true?
                    <Signup onClickCancel={props.onClickCancel}/>
                    :
                    <MeuRanking />
                }
                
            </div>
        </div>
        </>
    );
}

function Painel() {
    const [openPerfil, setOpenPerfil] = useState(false);
    function handlePerfil() {
        setOpenPerfil(!openPerfil);
    }
    return(
        <>
        <Header onClickPerfil={handlePerfil} />
        <Banner openPerfil={openPerfil} onClickCancel={handlePerfil} />
        <Footer />
        </>
    )
}

export default Painel;