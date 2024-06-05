import './App.css';
import Header from './Header';
import Post from './post';
import {Route, Routes} from "react-router-dom";
import Layout from './Layout';
import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Registerpage';

function App() {
  return (
    <Routes>
      <Route path ="/" element={<Layout/>}>
        <Route index element = {<IndexPage/>}/>  
        <Route path = {'/login'} element = {<LoginPage/>}/>
        <Route path = {'Register'} element = {<RegisterPage/>}/> 
      </Route>
    </Routes>

  );
}

export default App;