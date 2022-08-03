import React, { useEffect } from 'react';
import './style.css';

function RankingItem(props) {
    useEffect(()=> {
        console.log(props.item);
    })
    return (
        <div class="ranking-item">

            <div class="item-avatar">
                <img src={`${props.item.avatar}`} alt="" />
            </div>
            <div class="item-content">
                <div class="item-score">{props.item.score}</div>
                <div class="item-conquistas">
                {
                    props.item.conquistas &&
                    props.item.conquistas.map((item, index) => (
                        <img src={require(`../../assets/images/icons/${item.img_url}.png`) } alt=""/>
                    ))
                }
                </div>
            </div>
        </div>
    );
}

export default RankingItem;