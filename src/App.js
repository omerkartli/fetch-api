import React,{useEffect,useState} from "react"
import './App.css';
import axios from "axios"

function App() {
  
  

  useEffect(()=>{
    const getCountry = async() =>{
      const data = await axios.get("https://restcountries.com/v3.1/all")
      setCountry(data)
    }
    getCountry()
  },[])

  const [country, setCountry] = useState([])//önce içeriyi sil{ arasını sonr tekrar yapıştır çalıştır}
  console.log(country)//görmek için
  return (
    <div className="App">
    {
      country.data.map((dt,i)=>(
        <div key={i} >{dt.name.common}</div>
      ))
    }
    </div>
  );
}

export default App;
