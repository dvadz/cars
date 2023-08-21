import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name } = useSelector((state) => {
    return state.form;
  });

  const handleNameChange = (event) => {
    console.log(event.target.value);
    dispatch(changeName(event.target.value));
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <input onChange={handleNameChange} value={name}></input>
      </form>
    </div>
  );
};

export default CarForm;
