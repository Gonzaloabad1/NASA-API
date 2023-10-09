import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import logo from "./assets/logo.jpg";
import Figure from "./components/Figure/Figure";

const App = () => {
  const today = new Date(Date.now()).toISOString().slice(0, 10);
  const [apod, setApod] = useState({});
  const [date, setDate] = useState(today);
  const NASA_URL = "https://api.nasa.gov/";
  const NASA_API_KEY = "dt4fghNCg3P5TIVVhbSiblE62wxFV721u4rsSRCw";

  useEffect(() => {
    const getApod = async () => {
      const data = await axios.get(
        `${NASA_URL}planetary/apod?date=${date}&api_key=${NASA_API_KEY}`
      );
      setApod(data.data);
    };
    getApod();
  }, [date]);

  const handleInput = (ev) => {
    setDate(ev.target.value.toLocaleString());
  };

  return (
    <div className="App">
      <h2 className="title">
        NASA API <img src={logo} className="logo" alt="NASA LOGO" />
      </h2>
      <h1>Astronomy Picture of the Day</h1>
      <input type="date" id="photo-date" onChange={handleInput} />
      {date > today ? (
    <a class="fcc-btn" href="https://www.freecodecamp.org/"></a>

      ) : (
        <Figure data={apod} />
      )}
      <div className="standard-dialog center">
        <h1 className="dialog-text">©Gonzalo - 2023 - <a href="https://github.com/Gonzaloabad1">https://github.com/Gonzaloabad1 </a><a href="https://api.nasa.gov/">https://api.nasa.gov/</a></h1>
      </div>
    </div>
  );
};

export default App;