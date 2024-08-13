import image from "../images/weather.webp";
const WeatherAndDay = ({ data }) => {
  // console.log(data);
  if (!data) {
    return <div>Loading...</div>; // You can return a loading state or placeholder
  }

  return (
    <div className="weather_and_day">
      <img
        src={data.current.condition.icon}
        alt="weather-icon"
        className="weather_icon"
      />
      <h4>{data.location.localtime}</h4>
      <h1 className="temp">
        {data.current.temp_c}
        <sup>o</sup>
      </h1>
      <h2 className="sub_details">{data.location.name}</h2>
      <h4 className="sub_details">{data.current.condition.text}</h4>
    </div>
  );
};
export default WeatherAndDay;
