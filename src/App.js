import logo from './logo.svg';
import './App.css';
import{BrowserRouter,Routes,Route} from "react-router-dom";
import Name from './Name';
import Age from './Age';
import Education from './Education';
import Currentskill from './Currentskill';
import Contact from './Contact';
import Navigation from './Navigation';
import String1 from './String1';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/'element={<Navigation/>}/>
        <Route path="/name"element={<Name/>} />
        <Route path="/age"element={<Age/>} />   
        <Route path="/education"element={<Education/>}/>
        <Route path="/Currentskill"element={<Currentskill/>}/>
        <Route path="/Contact"element={<Contact/>}/>
        <Route path='/String' element={<String1/>}/>
        
        
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
