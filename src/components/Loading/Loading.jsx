import {useState} from "react";
import {ClipLoader} from "react-spinners";

const Loading = () => {

    const [loading, setLoading] = useState(true)
    const [color, setColor] = useState("#000")

    return (
        <ClipLoader
            color={color}
            loading={loading}
            // cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />)
}
export default Loading