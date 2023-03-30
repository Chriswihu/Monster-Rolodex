import React, {useState, useEffect, useRef} from "react";
import CardList from "./Components/CardList.jsx";

import "./styles/App.css";
import SearchBox from "./Components/SearchBox";

function App() {

    const [monsters, setMonsters] = useState([]);
    const [searchInput, setSearchInput] = useState("");

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setMonsters(data))
    },[]);

    const changerHandler = (event) => {
        setSearchInput(event.target.value);
    }

    const filteredMonsters = monsters.filter(monster => {
        monster.name.toLowerCase().includes(searchInput.toLowerCase())
    })

    return (
        <div className="App">
            <h1>Monster Rolodex</h1>
            <SearchBox placeholder="Search...." handleChange={changerHandler}/>
            <CardList monsters ={filteredMonsters}/>
        </div>
    );
}

export default App;
