import React from 'react';
import './style.css';
import { useSelector } from 'react-redux';

function ConquistaItem(props) {
    return(
        <div className={`
            ${props.item.done ? 
            'meu-ranking-conquista' 
            : 'meu-ranking-conquista-block'}`}>
                
            <div class="meu-conquistas-img">
                <img src={require(`../../assets/images/icons/${props.item.img_url}.png`) } alt=""/>
            </div>
            <div class="meu-conquistas-content">
                <div class="meu-conquistas-description text">{props.item.nome}</div>
            </div>
        </div>
    );
}

function MeuRanking() {
    const user = useSelector(({usuario}) => usuario.currentUser);
    const { conquistas } = user;
    return (
        <div class="meu-ranking-area">
            <div class="meu-ranking-header">
                <div class="meu-ranking-img">
                    <img src={`${user.avatar}`} alt=""/>
                </div>
                <div class="meu-ranking-header-content">
                    <div class="header-content-nick text">{user.nick}</div>
                    <div class="header-content-ranking text">{`#${user.ranking}`}</div>
                </div>
            </div>
            <div class="meu-ranking-content">
                <div class="meu-ranking-time text">{user.timeGame}</div>
                <div class="meu-ranking-score text">{user.score}</div>
            </div>
            <div class="meu-ranking-conquistas">
                {
                    conquistas &&
                    conquistas.map((item, index) => (
                        <ConquistaItem key={index} item={item} />
                    ))
                }
                

            </div>
        </div>
    );
}

export default MeuRanking;