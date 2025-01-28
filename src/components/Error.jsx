import {useRouteError} from "react-router-dom";

function Error(){
    const error = useRouteError();

    return(
        <>
        <h1>Something went wrong</h1>
        <h2>
            {error.status}
            {error.statusText}
        </h2>
        <p>{error.data}</p>
        </>
    )
}

export default Error;