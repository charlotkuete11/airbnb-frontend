export default{
    getAllPlaces(){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/v1/place/getAll`, {
            method: 'GET',
        })
        .then(res => res.json());
    },
    getPlaceById(title){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/v1/place/get/${title}`, {
            method: 'GET',
        })
        .then(res => res.json());
    }
}