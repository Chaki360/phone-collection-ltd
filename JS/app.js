const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = "";
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => showSearchResult(data.data));


}
const showSearchResult = data => {

    const searchResult = document.getElementById('search-result');

    data.forEach(data => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card border-1" style="width: 18rem;">
        <img src="${data.image}" class="w-75 card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title">Name:${data.phone_name}</h3>
            <h4 class="card-title">Brand:${data.brand}</h4>
            <a href="#" class="btn rounded-3 btn-primary fw-bold" onclick="phoneDetails()">More Info</a>
        </div>
    </div>
</div>`

        searchResult.appendChild(div);

    });

}

const phoneDetails = () => {
    console.log("ok fine i gotcha")
}