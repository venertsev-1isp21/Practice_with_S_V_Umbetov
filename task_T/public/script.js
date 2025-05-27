let allProducts = [];
let currentPage = 1;
const itemsPerPage = 3;

function get_products() {
    fetch("./products.json")
        .then(response => response.json())
        .then(data => {
            allProducts = data.products;
            currentPage = 1;
            displayPage(currentPage);
            setupPagination();
        });
}

function displayPage(page) {
    const productList = document.getElementById('product_list');
    productList.innerHTML = '';

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageItems = allProducts.slice(start, end);

    pageItems.forEach(product => {
        const { title, id, category, price, images } = product;
        productList.innerHTML += `
            <div class='product'>
                <img class='img_prod' src='${images}'><br>
                <p id='product_text'>
                    Name: ${title}<br>
                    ID: ${id}<br>
                    Category: ${category}<br>
                    Price: ${price}<br>
                </p>
            </div>`;
    });
}

function setupPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const pageCount = Math.ceil(allProducts.length / itemsPerPage);

    const prevBtn = document.createElement('button');
    prevBtn.innerText = '← Назад';
    prevBtn.disabled = currentPage === 1;
    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            displayPage(currentPage);
            setupPagination();
        }
    };
    pagination.appendChild(prevBtn);

    const nextBtn = document.createElement('button');
    nextBtn.innerText = 'Вперёд →';
    nextBtn.disabled = currentPage === pageCount;
    nextBtn.onclick = () => {
        if (currentPage < pageCount) {
            currentPage++;
            displayPage(currentPage);
            setupPagination();
        }
    };
    pagination.appendChild(nextBtn);
}

function get_one_products() {
    let input = document.getElementById('input');
    let product = fetch("./products.json")
    .then(response => {
        return response.json();
    })
    .then (data => {
        let i = parseInt(input.value) - 1;
        let newUrl = `/public/product_page.html?data=${encodeURIComponent(i)}`;
        window.location.href = newUrl;  
    });
}
