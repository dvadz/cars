import { useSelector, useDispatch } from "react-redux";
import { removeCar } from "../store";

const CarList = () => {
  const dispatch = useDispatch();

  const cars = useSelector((state) => {
    return state.cars.data;
  });

  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id));
  };

  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id}>
        <span>
          {car.name} - ${car.cost}
        </span>
        <button onClick={() => handleCarDelete(car)}>Delete</button>
      </div>
    );
  });

  return (
    <div>
      {renderedCars}
      <hr></hr>
    </div>
  );
};

export default CarList;
