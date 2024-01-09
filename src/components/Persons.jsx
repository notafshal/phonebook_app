import axios from "axios";

const Persons = ({ person }) => {
  const updateDel = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:3000/persons/1`).then((res) => {
      console.log(res);
    });
  };
  return (
    <>
      <div className="container">
        <h2>{person.name}</h2>
        <h3>{person.number}</h3>
        <button onClick={updateDel}>Delete</button>
      </div>
    </>
  );
};
export default Persons;
