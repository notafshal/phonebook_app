const Add = (e, { persons, newPerson, setNewPerson }) => {
  e.preventDefault();
  // const newPersonObj = {
  //   id: persons.length + 1,
  //   name: newPerson,
  //   number: "",
  // };
  e.preventDefault();
  var x = persons.find((per) => per.name === newPerson);
  if (x) {
    prompt(`${newPerson} already exists`);
  }
  // else {
  //   axios.post("http://localhost:3000/persons", newPersonObj).then((res) => {
  //     persons.concat(res);
  //   });
  // }

  setNewPerson("");
};
export default Add;
