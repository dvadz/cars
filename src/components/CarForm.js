import { useDispatch, useSelector } from "react-redux";
import { changeName, changeCost, addCar } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();

  const { name, cost } = useSelector((state) => {
    return state.form;
  });

  const handleNameChange = (event) => {
    dispatch(changeName(event.target.value));
  };

  const handleCostChange = (event) => {
    dispatch(changeCost(parseInt(event.target.value || 0)));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCar({ name, cost }));
  };

  return (
    <div>
      <form>
        <label>Name</label>
        <input onChange={handleNameChange} value={name}></input>
        <label>Cost</label>
        <input
          onChange={handleCostChange}
          value={cost || ""}
          type="number"
        ></input>
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default CarForm;
