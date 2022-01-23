import axios from 'axios';

export const getPlacesData = async (type, ne, sw) => {
    try {
        const { data: { data }} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': 'e269b19602msh87f3e2f1495827bp195ab6jsn35a624838338'
            }
          });

        return data;

    } catch (error) {
        console.log(error);
    }
}