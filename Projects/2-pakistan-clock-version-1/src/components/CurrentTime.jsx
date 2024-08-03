function CurrentTime() {
  let time = new Date();

  return (
    <h4>
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </h4>
  );
}
export default CurrentTime;
