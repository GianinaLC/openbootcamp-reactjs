import { useState } from "react";
import { getRandomJoke } from "../../services/axiosService";


import Button from '@mui/material/Button'
import { Grid } from "@mui/material";

const AxiosExample = () => {

    const [joke, setJoke] = useState(null);
    const [countLikes, setCountLikes] = useState(0);
    const [countUnlikes, setCountUnlikes] = useState(0);

    const getJoke = () => {
        getRandomJoke()
            .then(response => {
                setJoke(response.data)
            })
    }

    const Likes = () => {
        setCountLikes(countLikes + 1)
    }

    const Unlike = () => {
        setCountUnlikes(countUnlikes + 1)
    }

    return (

        <Grid display="flex" flexDirection="column" justifyContent="center" alignItems="center" className="m-2 p-5" >
            <h1>Chuck Norris Jokes</h1>
            {
                joke != null ? (<p>{joke.value}</p>) : ''
            }
            <Button variant="contained" onClick={getJoke}>Get joke</Button>

            <Grid className="m-2" display="flex" flexDirection="row" justifyContent="center"  alignItems="end">
                <Button variant="outlined" className="m-2" onClick={Likes}>Me gusta</Button>
                <p> {countLikes}</p>
            </Grid>
            <Grid className="m-2" display="flex" flexDirection="row" justifyContent="center"  alignItems="end">
                <Button variant="outlined" className="m-2" onClick={Unlike}>No me gusta</Button>
                <p>{countUnlikes}</p>
            </Grid>
        </Grid>
    )
}

export default AxiosExample;