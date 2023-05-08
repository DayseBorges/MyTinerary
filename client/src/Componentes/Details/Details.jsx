import { useParams } from "react-router-dom";
import { IoMdBookmark } from "react-icons/io";
import { HiOutlineBookmark } from "react-icons/hi";
import styles from "./styles/Details.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CreateItinerary from "../CreateItinerary/CreateItinerary";
import { bulkCreateCities } from "../../redux/store/slices/citiesSlice";

const Details = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const dispatch = useDispatch();

  let cities = useSelector((store) => store.cities.data);
  let city = cities.find((city) => city._id === id);

  const clickSave = (clickedSave) => {
    const updateCity = cities.map((city) =>
      city._id === clickedSave._id ? { ...city, isSave: !city.isSave } : city
    );
    dispatch(bulkCreateCities(updateCity));
  };

  return city ? (
    <>
      <main className={styles.main}>
        <div className={styles.containerButton}>
          <button onClick={() => navigate("/cities")} className={styles.button}>
            Back
          </button>
        </div>
        <div className={styles.detailsContainer}>
          <img src={city.url} alt="city image" className={styles.img} />
          <div className={styles.textContainer}>
            <div className={styles.titleContainer}>
              <p className={styles.city}>{city.name}</p>
              <p className={styles.country}>{city.country}</p>
              <div className={styles.icon}>
                {city.isSave ? (
                  <IoMdBookmark onClick={() => clickSave(city)} />
                ) : (
                  <HiOutlineBookmark onClick={() => clickSave(city)} />
                )}
              </div>
            </div>
            <p>{city.longDescription}</p>
          </div>
        </div>
        {city.itineraries.length ? (
          <div className={styles.itinerariesMain}>
            <p className={styles.itinerariesCounter}>
              {city.itineraries.length} itineraries
            </p>
            <div className={styles.itinerariesContainer}>
              {city.itineraries.map((itinerary, index) => (
                <div
                  className={`${styles.itineraryContainer} ${
                    index % 2 === 1 && styles.rowReverse
                  }`}
                >
                  <img src={itinerary.url} alt="" />
                  <div
                    className={`${styles.itineraryTextContainer} ${
                      index % 2 === 1 && styles.textAlignRight
                    }`}
                  >
                    <h5>{itinerary.name}</h5>
                    <p>{itinerary.description}</p>
                    <p className={styles.itineraryPrice}>
                      Cost: {itinerary.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className={styles.createItinerary}>
            <CreateItinerary /> 
          </div>
        )}
      </main>
    </>
  ) : (
    <div>City not found</div>
  );
};

export default Details;
