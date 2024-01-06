import axios from "axios";
import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import Delete from "./components/Delete";

const url = "http://localhost:3000/persons";
const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState("");
  const [number, setNumber] = useState("");

  const Add = (e) => {
    e.preventDefault();
    const newPersonObj = {
      id: persons.length + 1,
      name: newPerson,
      number: number,
    };
    e.preventDefault();
    var x = persons.find((per) => per.name === newPerson);
    if (x) {
      prompt(`${newPerson} already exists`);
    } else {
      axios.post(url, newPersonObj).then((res) => {
        setPersons(persons.concat(res.data));
      });
    }

    setNewPerson("");
    setNumber("");
  };

  const handleChange = (e) => {
    setNewPerson(e.target.value);
  };
  const handleNumber = (e) => {
    setNumber(e.target.value);
  };
  useEffect(() => {
    axios.get(url).then((res) => {
      setPersons(res.data);
    });
  }, []);
  <Delete persons={persons} />;
  return (
    <>
      <h1>PhoneBook</h1>
      <form>
        filter shown with <input />
      </form>
      <h1>Add a new</h1>
      <form onSubmit={Add}>
        name: <input value={newPerson} onChange={handleChange} />
        <br /> number: <input value={number} onChange={handleNumber} />
        <br />
        <button>Add</button>
      </form>
      <h1>Numbers</h1>
      <div className="container">
        {persons.map((person) => (
          <Persons key={person.id} person={person} />
        ))}
      </div>
    </>
  );
};

export default App;
