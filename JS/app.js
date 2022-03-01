const allMobiles = () => {
    const searchValue = document.getElementById('search-field').value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchValue}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => console.log(data));
}