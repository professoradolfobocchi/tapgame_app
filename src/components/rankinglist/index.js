import React, { useEffect, useState } from 'react';
import RankingItem from "../rankingitem";
import './style.css';
import Api from '../../services/api';
function RankingList() {
    const [ranking, setRanking] = useState([]);
    useEffect(() => {
        async function loadRanking() {
            const { data } = await Api.get('/ranking/10');
            setRanking([...data.data]); 
        }
        loadRanking()
    }, [])
    return(
        <div class="ranking-area">
                <div class="ranking-header">
                    ranking
                </div>
                <div class="ranking-list">
                    {ranking.map((item, index) => (
                        
                       <RankingItem key={index} item={item} />     
                    ))}
                    
                </div>
            </div>
    );
}

export default RankingList;