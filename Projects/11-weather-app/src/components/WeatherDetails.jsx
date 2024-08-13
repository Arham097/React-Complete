import { WiStrongWind } from "react-icons/wi";
import { WiThermometer } from "react-icons/wi";
import { BsDroplet } from "react-icons/bs";
import { BiSolidHot } from "react-icons/bi";
const WeatherDetails = ({ data }) => {
  if (!data) {
    return <div>Loading...</div>; // You can return a loading state or placeholder
  }
  return (
    <div className="weather_details">
      <div className="det_1">
        <div className="det1_1">
          <div className="icon">
            <WiStrongWind className="weather_det_icons" />
          </div>
          <div className="details">
            <p>{data.current.wind_kph} kph</p>
            <p>Wind Speed</p>
          </div>
        </div>
        <div className="det1_2">
          <div className="icon">
            <BiSolidHot className="weather_det_icons" />
          </div>
          <div className="details">
            <p>
              {data.current.feelslike_c}
              <sup>o</sup> C
            </p>
            <p>Feels Like</p>
          </div>
        </div>
      </div>
      <div className="det_2">
        <div className="det1_1">
          <div className="icon">
            <WiThermometer className="weather_det_icons" />
          </div>
          <div className="details">
            <p>{data.current.pressure_mb} mbar</p>
            <p>Pressure</p>
          </div>
        </div>
        <div className="det1_2">
          <div className="icon">
            <BsDroplet className="humid_icon" />
          </div>
          <div className="details">
            <p>{data.current.humidity} %</p>
            <p>Humidity</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WeatherDetails;
