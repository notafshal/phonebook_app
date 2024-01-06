const Persons = ({ person, Delete }) => {
  return (
    <>
      <h2>{person.name}</h2>
      <h3>{person.number}</h3>
      <button onClick={Delete}>Delete</button>
    </>
  );
};
export default Persons;
