let output = document.getElementById('text');
let prod = fetch('../../../products.json')
.then((response) => {
    return response.json()
})
.then(data => {
    let urlParams = new URLSearchParams(window.location.search);
    let i = urlParams.get('data');

    let title = data.products[i].title;
    let id = data.products[i].id;
    let category = data.products[i].category;
    let price = data.products[i].price;
    let img = data.products[i].images;
    output.innerHTML = `
        <div class ='product'>
            <p id='text'>
                Name: ${title} <br>
                Id: ${id} <br>
                Category: ${category} <br>
                Price: $${price} <br>
                <img class='img_prod' src='${img}'> <br>
            </p>
        </div>`
});
