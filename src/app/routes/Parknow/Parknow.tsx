import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Map from "app/components/Map";
import { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import "./Parknow.css";

library.add(fas);

function Parknow() {
  const [isSuccesfulFoundRoute, setIsSuccessfulFoundRoute] = useState(false);

  return (
    <div className="parknow ">
      <Container className="mx-auto" fluid="lg">
        <Map setIsSuccessfulFoundRoute={setIsSuccessfulFoundRoute} />

        {isSuccesfulFoundRoute ? (
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="mb-4 py-5">Park now</h1>
            <div className="d-flex">
              <div className="d-flex flex-column p-2 m-2">
                <div className="d-flex justify-content-between">
                  <FontAwesomeIcon size="lg" icon={["fas", "bicycle"]} />
                  {Math.floor(Math.random() * 10)}
                </div>
                <p>Electric scooter: </p>
              </div>
              <div className="d-flex flex-column p-2 m-2">
                <div className="d-flex justify-content-between">
                  <FontAwesomeIcon size="lg" icon={["fas", "bicycle"]} />
                  {Math.floor(Math.random() * 10)}
                </div>
                <p>Electric bike</p>
              </div>
              <div className="d-flex flex-column p-2 m-2">
                <div className="d-flex justify-content-between">
                  <FontAwesomeIcon size="lg" icon={["fas", "motorcycle"]} />
                  {Math.floor(Math.random() * 10)}
                </div>
                <p>Electric motor scooter</p>
              </div>
            </div>
          </div>
        ) : (
          <>
            <Alert>Change radius of parking area to start parking</Alert>
          </>
        )}
      </Container>
    </div>
  );
}

export default Parknow;
