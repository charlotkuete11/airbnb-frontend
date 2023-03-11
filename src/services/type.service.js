export default{
    getAllTypes(){
        return fetch(`${process.env.NEXT_PUBLIC_API_BASEURL}/api/v1/type-place`, {
            method: 'GET',
        })
        .then(res => res.json());
    }
}