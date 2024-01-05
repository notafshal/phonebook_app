import axios from "axios";
import { useEffect, useState } from "react";
import Persons from "./components/Persons";
import Add from "./components/Add";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setNewPerson] = useState("");

  <Add persons={persons} setNewPerson={setNewPerson} newPerson={newPerson} />;

  const handleChange = (e) => {
    setNewPerson(e.target.value);
  };
  useEffect(() => {
    axios.get("http://localhost:3000/persons").then((res) => {
      setPersons(res.data);
    });
  }, []);
  return (
    <>
      <h1>PhoneBook</h1>
      <form>
        filter shown with <input />
      </form>
      <h1>Add a new</h1>
      <form onSubmit={Add}>
        name: <input value={newPerson} onChange={handleChange} />
        <br /> number: <input />
        <br />
        <button>add</button>
      </form>
      <h1>Numbers</h1>
      {persons.map((person) => (
        <Persons key={person.id} person={person} />
      ))}
    </>
  );
};

export default App;
