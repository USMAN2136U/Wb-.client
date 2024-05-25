document.addEventListener('DOMContentLoaded', function() {
    var products = [
        {
            name: 'Full Antic Set',
            price: 'QUALITY (21k)',
            image: 'img/set.jpg'
        },
        {
            name: 'Gold Stone Ring',
            price: 'QUALITY (21k)',
            image: 'img/ring.jpeg'
        },
        {
            name: 'U Monogram',
            price: 'QUALITY (21k)',
            image: 'img/u mono.jpg'
        },
        {
            name: 'Gold Necklace',
            price: 'QUALITY (21k)',
            image: 'img/set.jpeg'
        },
        {
            name: 'Kara Bracelet',
            price: 'QUALITY (21k)',
            image: 'img/kara braslet.jpg'
        },
        {
            name: 'Locket Set',
            price: 'QUALITY (21k)',
            image: 'img/locket set.jpg'
        },
    ];

    var productGrid = document.getElementById('product-grid');
    products.forEach(function(product) {
        var productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.price}</p>
            <a href="#" class="btn">Visit Our Shop</a>
        `;
        productGrid.appendChild(productElement);
    });
});

    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        Swal.fire({
            title: "THANK YOU",
            text: "WE WILL SHORTLY REPLY FOR MESSAGE.",
            imageUrl: "img/SmileyFace.png",
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: "Custom image"
          });
        contactForm.reset();
    });
