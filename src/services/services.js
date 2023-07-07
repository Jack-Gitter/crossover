import axios from "axios";

export const checkFootballPlayer = async () => {
    const response = await axios.get('https://catfact.ninja/fact')
    console.log(response)
    return response.data;
}

export const checkBaseballPlayer = async () => {
    const response = await axios.get('https://catfact.ninja/fact')
    console.log(response)
    return response.data;
}