let output = document.getElementById('products');
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
    let price_old = parseFloat(price) + (parseFloat(price) / 100 * 10)
    let img = data.products[i].images[0];
    let rating = data.products[i].rating;
    let brand = data.products[i].brand;
    let description = data.products[i].description;
    output.innerHTML = `
        <div class='head_box'>
            <button class='back_butt' onclick="history.back()">Back</button>
            <p class='id_text'><b>Id:</b> <small>${id}</small></p>
            <p class='rating_text'><b>Rating:</b> <small>${rating}</small></p>
            <p class='name_text'><b>${title}</b></p>
        </div>

        <div class='product'>
            <img class='img_prod' src='${img}'>
            <div class='right_box'>
                <p class='price_text'><i>$${price} <sup><small>$<s>${price_old.toFixed(2)}</s></small></sup></i></p>
                <p class='brand_text'><b>Brand:</b> <small>${brand}</small></p>
                <p class='category_text'><b>Category:</b> <small>${category}</small></p>
            </div>
        </div>

        <div class ='descr'>
            <p class='descr_text'><b>Description</b><br>${description}</p>
        </div>
`

       
});
