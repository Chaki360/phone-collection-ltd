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

    data.slice(0, 20).forEach(data => {
        const div = document.createElement('div');

        div.classList.add('col');
        div.innerHTML = `<div class="card border-1" style="width: 18rem;">
        <img src="${data.image}" class="w-50 card-img-top" alt="...">
        <div class="card-body">
            <h3 class="card-title">Name:${data.phone_name}</h3>
            <h4 class="card-title">Brand:${data.brand}</h4>
            <a href="#" class="btn rounded-3 btn-primary fw-bold" onclick="phoneDetails('${data.slug}')">More Info</a>
        </div>
    </div>
</div>`
        searchResult.appendChild(div);



    });

}

const phoneDetails = phoneId => {

    const url = `https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => showDetails(data.data))
}
const showDetails = info => {
    console.log(info);
    const displayDetails = document.getElementById('mobile-details');
    const div = document.createElement('div');
    div.classList.add('card')
    div.innerHTML = `<img src="${info.image}" class="w-75">
    <h2 class="card-title">${info.name}</h2>
    <h5 class="card-title">ReleaseDate:${info.releaseDate ? info.releaseDate : 'Coming Soon'}</h5>
    <h5 class="card-title"slug:${info.slug}</h5>
    <h3 class="card-title">Brand:${info.brand}</h3>
    <br>
    <h5 class="card-title">Storage:${info.mainFeatures.storage}</h5>
    <h5 class="card-title">DisplaySize:${info.mainFeatures.displaySize}</h5>
    <h5 class="card-title">ChipSet:${info.mainFeatures.chipSet}</h5>
    <h5 class="card-title">Memory:${info.mainFeatures.memory}</h5>
    <h5 class="card-title">Sensors:${info.mainFeatures.sensors}</h5>
    <br>
    <h2 class="card-title">Others Features:</h2>
    <br>
    <h5 class="card-title">WLAN:${info.others.WLAN}</h5>
    <h5 class="card-title">Bluetooth:${info.others.Bluetooth}</h5>
    <h5 class="card-title">GPS:${info.others.GPS}</h5>
    <h5 class="card-title">NFC:${info.others.NFC}</h5>
    <h5 class="card-title">Radio:${info.others?.Radio ? info.others.Radio : 'no info'}</h5>
    <h5 class="card-title">USB:${info.others?.USB ? info.others.USB : 'no info'}</h5>`


    displayDetails.appendChild(div);

}