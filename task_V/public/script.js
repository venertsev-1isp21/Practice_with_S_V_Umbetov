let productsData = [];
let currentPage = 1;
const itemsPerPage = 6;

function get_product() {
    const container = document.getElementById("products");
    const pageNum = document.getElementById("pageNum");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    container.innerHTML = "";

    if (productsData.length > 0) {
        renderPage(currentPage);
        return;
    }

    fetch('./products.json')
        .then(response => response.json())
        .then(data => {
            productsData = data.products;
            renderPage(currentPage);
        })

    function renderPage(page) {
        container.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = productsData.slice(start, end);

        pageItems.forEach(product => {
            let img = Array.isArray(product.images) ? product.images[0] : product.images;

            const div = document.createElement("div");
            div.className = "product";
            div.style = "border:1px solid #ccc; padding:10px; margin:10px; width:200px;";
            div.innerHTML = `
                <strong>${product.title}</strong><br>
                Id: ${product.id}<br>
                Category: ${product.category}<br>
                Price: $${product.price}<br>
                <img src="${img}" alt="${product.title}" style="width:100%; height:auto;">
            `;
            container.appendChild(div);
        });

        pageNum.textContent = page;
        prevBtn.disabled = page === 1;
        nextBtn.disabled = end >= productsData.length;
    }

    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    };

    nextBtn.onclick = () => {
        if ((currentPage * itemsPerPage) < productsData.length) {
            currentPage++;
            renderPage(currentPage);
        }
    };
}


function get_product_pcs(){
    let input = document.getElementById('input')
    let i = parseInt(input.value) - 1;
    let newUrl = `/public/product_page/product_page.html?data=${encodeURIComponent(i)}`;
    window.location.href = newUrl;
}