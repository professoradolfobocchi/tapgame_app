import React from 'react';
import Description from '../description';
import RankingList from '../rankinglist';
import Signup from '../signup';
import './style.css';

function Banner(props) {
    return(
        <div class="banner">
            <div class="banner-left">
                <RankingList />
            </div>
            <div class="banner-right">
                {props.openSignup ? 
                    <Signup onClickCancel={props.onClickCancel} />
                    :
                    <Description />
                }
                
            </div>
        </div>
    );
}

export default Banner;