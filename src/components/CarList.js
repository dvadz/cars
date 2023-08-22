import { useSelector } from "react-redux";

const CarList = () => {
  const cars = useSelector((state) => {
    return state.cars.data;
  });

  return <div></div>;
};

export default CarList;
