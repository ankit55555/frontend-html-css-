import './App.css';
import HeaderComponent from './components/HeaderComponent';
import ShowPlayer from './components/ShowPlayer';
import AddPlayer from './components/AddPlayer';
import useData from './utils/useData';
import { useEffect } from 'react';
import { Routes, Route, Link } from "react-router-dom";
function App() {
    const [data, setdata] = useData()

    useEffect(()=>{
        console.log(data);
    }, [data])

    return (
        <main className="App">
            <HeaderComponent/>
            <Routes>
        <Route path="/" element={ <AddPlayer/>} />
        <Route path="/show" element={<ShowPlayer/>} />
      </Routes>
           
            

        </main>
    );
}
export default App;
