import { useParams } from "react-router-dom"

const Details = () => {
    const { id } = useParams()
    return ( 
        <h1>Details</h1>
    );
}
 
export default Details;