function get_product(){
    let output = document.getElementById('products');
    let prod = fetch('./products.json')
    .then((response) => {
        return response.json()
    })
    .then(data => {
        for (let i = 0; i < 30; i++){
            let title = data.products[i].title;
            let id = data.products[i].id;
            let price = data.products[i].price;
            let img = data.products[i].images[0];

            output.innerHTML += `
                    <div class='prod_cart'>
                        <div class='head_box'>
                            <p class='name_text'><b>${title}</b></p>
                        </div>

                        <div class='product'>
                            <img class='img_prod' src='${img}'>
                            <div class='right_box'>
                                <p class='price_text'><i>$${price}</i></p>
                                <p class='id_text'><b>Id:</b> <small>${id}</small></p>
                            </div>
                        </div>
                    </div>`
        }
    });
}

function get_product_pcs(){
    let input = document.getElementById('input')
    let i = parseInt(input.value) - 1;
    let newUrl = `/public/product_page/product_page.html?data=${encodeURIComponent(i)}`;
    window.location.href = newUrl;
}

const scroll_container = document.getElementById('products');

let scroll_speed = 10;
let scroll_direction = 10;
let isMouseOver = false;
let isTouching = false;

// Автоскролл
function autoScroll() {
  if (!isMouseOver && !isTouching) {
    scroll_container.scrollLeft += scroll_speed;

    if (scroll_container.scrollLeft + scroll_container.clientWidth >= scroll_container.scrollWidth) {
      scroll_container.scrollLeft = 0;
    }
  }
}

setInterval(autoScroll, 30);

scroll_container.addEventListener('mouseenter', () => {
  isMouseOver = true;
});
scroll_container.addEventListener('mouseleave', () => {
  isMouseOver = false;
});

scroll_container.addEventListener('touchstart', () => {
  isTouching = true;
});
scroll_container.addEventListener('touchend', () => {
  isTouching = false;
});

scroll_container.addEventListener('mousedown', () => {
  isTouching = true;
});
scroll_container.addEventListener('mouseup', () => {
  isTouching = false;
});
