function get_seacrhed_product(){
    let search = document.getElementById('search');
    let prod = fetch('../products.json')
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
        search.innerHTML += `
        <div class ='product'>
            <img class='img_prod' src='${img}'> <br>
            <p id='product_text'>
                Name: ${title} <br>
                ID: ${id} <br>
                Category: ${category} <br>
                Price: ${price} <br>
            </p>
        </div>`;
    });
};

get_seacrhed_product();