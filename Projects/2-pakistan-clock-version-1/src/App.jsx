import CurrentTime from "./components/CurrentTime";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
function App() {
  return (
    <>
      <center>
        <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime>
      </center>
    </>
  );
}

export default App;
