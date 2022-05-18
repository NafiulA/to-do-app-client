import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login/Login';
import Signup from './components/Authentication/Signup/Signup';
import Header from './components/Header/Header';
import AddTasks from './components/Home/AddTasks';
import Home from './components/Home/Home';
import MyTasks from './components/Home/MyTasks';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}>
          <Route index element={<MyTasks></MyTasks>}></Route>
          <Route path='addtasks' element={<AddTasks></AddTasks>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
    </div>
  );
}

export default App;
