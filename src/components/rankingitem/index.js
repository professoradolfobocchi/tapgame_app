import React, { useEffect } from 'react';
import './style.css';

function RankingItem(props) {
    useEffect(() => {
        console.log(props.item);
    })
    return (
        <div class="ranking-item">
            <div class="item-avatar">
                <div class="item-ranking">{`#${props.item.ranking}`}</div>
            </div>
            <div class="item-content">
                <div class="item-score">{props.item.score}</div>
                <div class="item-conquistas">
                    <div class="item-score">{props.item.nick}</div>
                    {/*
                        props.item.conquistas &&
                        props.item.conquistas.map((item, index) => (
                            <img src={require(`../../assets/images/icons/${item.img_url}.png`) } alt=""/>
                        ))
                    */}
                </div>
            </div>
        </div>
    );
}

export default RankingItem;