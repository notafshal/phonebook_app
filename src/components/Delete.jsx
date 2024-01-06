import axios from "axios";

const Delete = () => {
  axios.delete("http://localhost:3000/persons").then((res) => {
    console.log(res);
  });
};
export default Delete;
