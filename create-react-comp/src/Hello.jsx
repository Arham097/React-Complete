function Hello() {
  let name = "Arham";
  let fullName = () => {
    return "Syed Arham Hasan";
  };

  return <h3>This is my name which is {fullName()}</h3>;
}
export default Hello;
