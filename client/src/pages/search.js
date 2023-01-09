import {
    useEffect,
} from "react";

const { REACT_APP_PETFINDERKEY, REACT_APP_PETFINDERSECRET } = process.env

function Search() {
    useEffect(() => {
        const fetchAccessToken = async () => {
            const params = new URLSearchParams();
            params.append("grant_type", "client_credentials");
            params.append("client_id", REACT_APP_PETFINDERKEY);
            params.append("client_secret", REACT_APP_PETFINDERSECRET);

            const petFinderResponse = await fetch(
                "https://api.petfinder.com/v2/oauth2/token",
                {
                    method: "POST",
                    body: params
                },

            )
            console.log(await petFinderResponse.json()) 

            // const petResults = await fetch(
            //     "https://api.petfinder.com/v2/animals", {
            //         headers: {
            //             Authorization: `Bearer `
            //         }
            //     }
            // )
        }
        fetchAccessToken()
    })
    return (
        <div>1</div>
    )
};

export default Search 