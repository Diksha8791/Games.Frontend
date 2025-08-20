import { useState } from "react";
import ListGroup from "./components/ListGroup";
import { Alert } from "./components/Alert";
import { Button } from "./Button";

const App = () => {
  const cities = [
    "New York",
    "San Diego",
    "Salt Lake City",
    "Dallas",
    "Michigan",
    "Provo",
  ];

  const [selectedCity, setSelectedCity] = useState("");

  const [displayAlert, setDisplayAlert] = useState(false);

  const handleSelectedCity = (city: string) => {
    setSelectedCity(city);
  };

  const handleClick = () => {
    setDisplayAlert(true);
  };

  const handleClose = () => {
    setDisplayAlert(false);
  };

  return (
    <>
      {/* <ListGroup
        cities={cities}
        title={"Cities"}
        onSelectCity={handleSelectedCity}
      ></ListGroup>

      {selectedCity !== "" && <div>{selectedCity} + " is selected.."</div>} */}

      {displayAlert && (
        <Alert onClose={handleClose}>
          <span>Hello World</span>
        </Alert>
      )}
      <Button onClick={handleClick}>Click Me..!</Button>
    </>
  );
};
export default App;
