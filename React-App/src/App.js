
import './App.css';
import AppRoutes from "./AppRoutes"

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'


export default function App() {

  return (
    <>
      <div className="App">
          {/* <Routes>
            <Route path='/' element = {<Login/>} />
            <Route path='/cadastro' element = {<Cadastro/>} />
            <Route path='/dashboard' element = {<Dashboard/>}>
                <Route path='account' element = {<MyAccount/>} />
                <Route path='home' element = {<Home/>} />
                <Route path='games' element = {<Games/>} />
            </Route>           
          </Routes> */}     
          <AppRoutes/>
      </div>
    </>
  );
}
