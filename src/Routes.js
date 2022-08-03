import { Route, Routes } from 'react-router-dom';
import Painel from './pages/painel';
import App from './App';
import RouterHandle from './auth/RouteHandle';

function Rotas() {
    return (
        <Routes >
           <Route path="/painel" element={
               <RouterHandle>
                   <Painel />
               </RouterHandle>
            }/> 
           <Route exact path="/" element={<App />} /> 
        </Routes>
    );
}
export default Rotas;