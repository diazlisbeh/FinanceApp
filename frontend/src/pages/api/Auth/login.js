



const login =async () => {
    await fetch(API_URL)
    .then(res => res.json())
    .then(data => console.log(data))
}


export default login