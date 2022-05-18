import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './components/Authentication/Login/Login';
import RequireAuth from './components/Authentication/RequireAuth/RequireAuth';
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
        <Route path='/' element={<RequireAuth><Home></Home></RequireAuth>}>
          <Route index element={<MyTasks></MyTasks>}></Route>
          <Route path='addtasks' element={<AddTasks></AddTasks>}></Route>
        </Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
      </Routes>
      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
