import {Routes, Route, Navigate} from 'react-router-dom';
import MainLayout from '../components/MainLayout';
import Livros from '../pages/Livros';
import Autores from '../pages/Autores';
import Alunos from '../pages/Alunos';
import Relatorios from '../pages/Relatorios';


function Rotas(){
    return(
        <Routes>
            <Route path='/' element={<MainLayout/>}>
                <Route index element={<Navigate to="/livros" />} />
                <Route path='livros' element={<Livros/>} />
                <Route path='autores' element={<Autores/>} />
                <Route path='relatorios' element={<Relatorios/>} />
                <Route path='alunos' element={<Alunos/>} />
            </Route>
        </Routes>
    )
}

export default Rotas;