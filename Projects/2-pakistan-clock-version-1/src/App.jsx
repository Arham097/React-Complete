import CurrentTime from "./components/CurrentTime";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
function App() {
  return (
    <>
      <center>
        {/* <ClockHeading></ClockHeading>
        <ClockSlogan></ClockSlogan>
        <CurrentTime></CurrentTime> */}
        <form
          onSubmit={(event) => {
            console.log(event.target[0].value);
            event.preventDefault();
          }}
        >
          <input type="text" placeholder="Enter Your Name" />
          <button>Submit</button>
        </form>
      </center>
    </>
  );
}

export default App;
