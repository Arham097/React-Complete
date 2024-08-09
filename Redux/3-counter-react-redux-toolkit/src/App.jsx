import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import DisplayCounter from "./components/DisplatCounter";
import Controls from "./components/Controls";
import Container from "./components/Container";
import "./App.css";
import { useSelector } from "react-redux";
import WarningMessage from "./components/WarningMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <center>
      <Container>
        <div className="px-4 py-5 my-5 text-center">
          <Header></Header>
          <div className="col-lg-6 mx-auto">
            {privacy ? <WarningMessage /> : <DisplayCounter />}
            <Controls></Controls>
          </div>
        </div>
      </Container>
    </center>
  );
}

export default App;
