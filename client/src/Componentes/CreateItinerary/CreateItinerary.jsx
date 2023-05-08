import style from "./styles/CreateItinerary.module.css";
import axios from "axios";
import { createItinerary } from "../../redux/store/slices/citiesSlice";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { useParams } from "react-router-dom";


const CreateItinerary = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    const creatorName = event.target.elements.creatorName.value;
    const name = event.target.elements.name.value;
    const url = event.target.elements.url.value;
    const city = id;
    const description = event.target.elements.description.value;
    const price = "$" + event.target.elements.price.value;
    const duration = event.target.elements.duration.value;

    const itineraryData = {
      creatorName,
      name,
      url,
      city,
      description,
      price,
      duration,
    };

    axios
      .post("http://localhost:3001/api/itinerary", itineraryData)
      .then((res) => {
        dispatch(createItinerary(res.data.response));
      })
      .catch((error) => {
        console.log(error);
      });
    if (
      creatorName &&
      name &&
      url &&
      description &&
      price &&
      duration
    ) {
      dispatch(createItinerary(itineraryData));
      Swal.fire({
        title: 'Success!',
        text: 'Itinerary created',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then(() => {
        window.location.reload();
      });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Missing Data',
            icon: 'error',
            confirmButtonText: 'OK'
        });
    }
  };

  return (
    <div className={style.containerCreate}>
      <h2 className={style.create}>Create a new itinerary for this city</h2>
      <form className={style.containerForm} onSubmit={handleSubmit}>
        <label className={style.label} htmlFor="creatorName">
          Creator Name
          <br />
          <input
            className={style.input}
            type="text"
            name="creatorName"
            placeholder="Your name"
          />
        </label>
        <label className={style.label} htmlFor="name">
          Name
          <br />
          <input
            className={style.input}
            type="text"
            name="name"
            placeholder="Activity name"
          />
        </label>
        <label className={style.label} htmlFor="url">
          Url image
          <br />
          <input
            className={style.input}
            type="text"
            name="url"
            placeholder="http"
          />
        </label>
        <label className={style.label} htmlFor="description">
          Description
          <br />
          <textarea className={style.input} name="description" />
        </label>
        <label className={style.label} htmlFor="price">
          Cost
          <br />
          <input
            className={style.input}
            type="text"
            name="price"
            placeholder="$"
          />
        </label>
        <label className={style.label} htmlFor="duration">
          Duration
          <br />
          <input
            className={style.input}
            type="number"
            name="duration"
            placeholder="Hours"
          />
        </label>
        <button type="submit" className={style.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateItinerary;
