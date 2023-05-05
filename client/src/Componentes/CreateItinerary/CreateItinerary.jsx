import style from "./styles/CreateItinerary.module.css";

const CreateItinerary = () => {
    return ( 
        <div className={style.containerCreate}>
        <h2 className={style.create}>Create a new itinerary for this city</h2>
        <form className={style.containerForm}>
            <label className={style.label} htmlFor="creatorName">
                Creator Name
                <br />
                <input className={style.input} type="text" name="creatorName" placeholder="Your name"/>
            </label>
            <label className={style.label} htmlFor="name">
                Name
                <br />
                <input className={style.input} type="name" placeholder="Activity name"/>
            </label>
            <label className={style.label} htmlFor="image">
                Url Image
                <br />
                <input className={style.input} type="text" name="image" placeholder="http"/>
            </label>
            <label className={style.label} htmlFor="description">
                Description
                <br />
                <textarea className={style.input} name="description" />
            </label>
            <label className={style.label} htmlFor="price">
                Price
                <br />
                <input className={style.input} type="text" name="price" placeholder="$"/>
            </label>
            <label className={style.label} htmlFor="duration">
                Duration
                <br />
                <input className={style.input} type="number" name="duration" placeholder="Hours"/>
            </label>
            <button className={style.button}>Submit</button>
        </form>
        </div>
     );
}
 
export default CreateItinerary;