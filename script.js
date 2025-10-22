// Furniture Products Data
const products = {
    chairs: [
        { id: 1, name: 'Modern Dining Chair', price: 6999, image: 'https://cdn.decornation.in/wp-content/uploads/2020/07/modern-dining-table-chairs.jpg', description: 'Elegant dining chair with ergonomic design and premium upholstery. Perfect for modern dining rooms.' },
        { id: 2, name: 'Office Executive Chair', price: 5999, image: 'https://shop.hofindia.com/cdn/shop/files/81UmXNTZhbL._SL1500.jpg?v=1735300097&width=1946', description: 'Comfortable executive chair with lumbar support and adjustable features for long working hours.' },
        { id: 3, name: 'Accent Armchair', price: 12999, image: 'https://media-wallmantra.com/product/original/wallmantra-contemporary-orange-grey-accent-armchair-single-FC2D.webp', description: 'Stylish accent chair that adds personality to any living space with its unique design.' },
        { id: 4, name: 'Rocking Chair', price: 17999, image: 'https://woodentwist.com/cdn/shop/products/71Eb5_3KeoS._SL1024.jpg?v=1743268784', description: 'Classic rocking chair with smooth motion and comfortable seating for relaxation.' }
    ],
    tables: [
        { id: 5, name: 'Dining Table Set', price: 39990, image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=400', description: 'Beautiful dining table set that seats 6 people, perfect for family gatherings and dinners.' },
        { id: 6, name: 'Coffee Table', price: 3229, image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=400', description: 'Modern coffee table with storage space, ideal centerpiece for your living room.' },
        { id: 7, name: 'Study Desk', price: 5999, image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=400', description: 'Spacious study desk with cable management and ample workspace for productivity.' },
        { id: 8, name: 'Console Table', price: 4299, image: 'https://images-cdn.ubuy.co.in/647b4ca73eca5e019d2572f1-console-table-with-drawers-for-entryway.jpg', description: 'Elegant console table perfect for entryways or behind sofas with decorative display.' }
    ],
    sofas: [
        { id: 9, name: 'L-Shaped Sectional', price: 78989, image: 'https://images-cdn.ubuy.co.in/63ed41e96a753969337627c4-belffin-convertible-sectional-sofa.jpg', description: 'Spacious L-shaped sectional sofa with premium fabric and deep cushioning for ultimate comfort.' },
        { id: 10, name: 'Leather Sofa', price: 202800, image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=400', description: 'Luxurious genuine leather sofa with timeless design and exceptional durability.' },
        { id: 11, name: 'Loveseat Sofa', price: 18899, image: 'https://images.unsplash.com/photo-1550254478-ead40cc54513?w=400', description: 'Cozy loveseat perfect for small spaces without compromising on style and comfort.' },
        { id: 12, name: 'Sleeper Sofa', price: 64204, image: 'https://images-cdn.ubuy.co.in/635b90d15a0c527ce25c59d2-modern-convertible-sofa-bed-with.jpg', description: 'Versatile sleeper sofa that converts to a bed, ideal for guests and small apartments.' }
    ],
    beds: [
        { id: 13, name: 'King Size Bed', price: 35999, image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400', description: 'Luxurious king size bed with upholstered headboard and solid wood frame for restful sleep.' },
        { id: 14, name: 'Platform Bed', price: 20179, image: 'https://m.media-amazon.com/images/I/817ylRSLlEL.jpg', description: 'Modern platform bed with clean lines and built-in storage drawers underneath.' },
        { id: 15, name: 'Bunk Bed', price: 21373, image: 'https://www.ikea.com/au/en/images/products/tuffing-bunk-bed-frame-dark-grey__1205593_pe907156_s5.jpg?f=undefined', description: 'Space-saving bunk bed perfect for kids rooms with safety rails and sturdy construction.' },
        { id: 16, name: 'Canopy Bed', price: 109500, image: 'https://www.orangetree.in/cdn/shop/files/AndamanQueenPosterBedNatural1.jpg?v=1722851352', description: 'Elegant canopy bed with decorative posts creating a luxurious bedroom centerpiece.' }
    ],
    cabinets: [
        { id: 17, name: 'Display Cabinet', price: 19999, image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=400', description: 'Glass-front display cabinet perfect for showcasing collectibles and fine china.' },
        { id: 18, name: 'Storage Cabinet', price: 6890, image: 'https://static.langimg.com/thumb/msid-124339143,imgsize-1208816,width=1600,height=900,resizemode=75/storage-cabinets-for-homeamazon-124339143.jpg', description: 'Versatile storage cabinet with adjustable shelves for organizing any room.' },
        { id: 19, name: 'TV Cabinet', price: 5999, image: 'https://m.media-amazon.com/images/I/71VNBmfRRRL._AC_UF894,1000_QL80_.jpg', description: 'Modern TV cabinet with cable management and media storage compartments.' },
        { id: 20, name: 'File Cabinet', price: 10669, image: 'https://i.pinimg.com/736x/64/95/89/649589331064b048cfa2102b8bedd2c5.jpg', description: 'Professional file cabinet with locking drawers for secure document storage.' }
    ],
    outdoor: [
        { id: 21, name: 'Patio Set', price: 94960, image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=400', description: 'Complete patio set with weather-resistant materials, perfect for outdoor entertaining.' },
        { id: 22, name: 'Garden Bench', price: 7199, image: 'https://blog.axminstertools.com/wp-content/uploads/2024/04/WWW_Garden_Bench_finished.jpg', description: 'Classic garden bench with slatted design, ideal for garden paths and outdoor spaces.' },
        { id: 23, name: 'Lounge Chair', price: 20360, image: 'https://dm4c9mjc2jvtf.cloudfront.net/cms/Nest-Design-Icon-Vitra-Eames-Lounge-Chair-and-Ottoman.jpg', description: 'Comfortable outdoor lounge chair with reclining back for poolside relaxation.' },
        { id: 24, name: 'Outdoor Dining Set', price: 63800, image: 'https://target.scene7.com/is/image/Target/GUEST_389ca212-97c0-4864-8c3e-fcfcd2638a22', description: 'Complete outdoor dining set with table and chairs for al fresco dining experiences.' }
    ]
};

const allProducts = Object.values(products).flat();

const featuredProducts = [
    allProducts[8], allProducts[4], allProducts[12], 
    allProducts[0], allProducts[20], allProducts[16]
];

const searchInput = document.getElementById('search-input');
const searchSuggestions = document.getElementById('search-suggestions');
const productsGrid = document.getElementById('products-grid');
const productsTitle = document.getElementById('products-title');
const modal = document.getElementById('product-modal');
const modalClose = document.querySelector('.modal-close');
const backToTop = document.getElementById('back-to-top');
const header = document.getElementById('header');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const spinner = document.getElementById('loading-spinner');
const newsletterForm = document.querySelector('.newsletter-form');

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        spinner.classList.add('hidden');
    }, 500);

    renderProducts(allProducts);
    renderFeaturedCarousel();
    initializeEventListeners();
});

function renderProducts(productsToRender, category = 'All Products') {
    productsTitle.textContent = category;
    productsGrid.innerHTML = '';
    
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">₹${product.price}</p>
            </div>
        `;
        productCard.addEventListener('click', () => openModal(product));
        productsGrid.appendChild(productCard);
    });
}

function renderFeaturedCarousel() {
    const carouselTrack = document.querySelector('.carousel-track');
    carouselTrack.innerHTML = '';
    
    featuredProducts.forEach(product => {
        const featuredCard = document.createElement('div');
        featuredCard.className = 'featured-card';
        featuredCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="featured-info">
                <h3>${product.name}</h3>
                <p class="featured-price">₹${product.price}</p>
            </div>
        `;
        featuredCard.addEventListener('click', () => openModal(product));
        carouselTrack.appendChild(featuredCard);
    });
}

let currentSlide = 0;
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
    const track = document.querySelector('.carousel-track');
    const slideWidth = document.querySelector('.featured-card').offsetWidth + 32; // +32 for gap
    currentSlide = Math.max(0, currentSlide - 1);
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

nextBtn.addEventListener('click', () => {
    const track = document.querySelector('.carousel-track');
    const slideWidth = document.querySelector('.featured-card').offsetWidth + 32;
    const maxSlides = featuredProducts.length - 3;
    currentSlide = Math.min(maxSlides, currentSlide + 1);
    track.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
});

searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();
    
    if (searchTerm.length === 0) {
        searchSuggestions.classList.remove('show');
        return;
    }
    
    const filteredProducts = allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm)
    );
    
    if (filteredProducts.length > 0) {
        searchSuggestions.innerHTML = '';
        filteredProducts.slice(0, 5).forEach(product => {
            const suggestionItem = document.createElement('div');
            suggestionItem.className = 'suggestion-item';
            suggestionItem.textContent = `${product.name} - $${product.price}`;
            suggestionItem.addEventListener('click', () => {
                searchInput.value = product.name;
                searchSuggestions.classList.remove('show');
                renderProducts([product], `Search Results: "${product.name}"`);
                document.querySelector('#products-title').scrollIntoView({ behavior: 'smooth' });
            });
            searchSuggestions.appendChild(suggestionItem);
        });
        searchSuggestions.classList.add('show');
    } else {
        searchSuggestions.innerHTML = '<div class="suggestion-item">No results found</div>';
        searchSuggestions.classList.add('show');
    }
});

document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
        searchSuggestions.classList.remove('show');
    }
});

const categoryCards = document.querySelectorAll('.category-card');
categoryCards.forEach(card => {
    card.addEventListener('click', () => {
        const category = card.dataset.category;
        const categoryProducts = products[category];
        const categoryName = card.querySelector('.category-title').textContent;
        renderProducts(categoryProducts, categoryName);
        document.querySelector('#products-title').scrollIntoView({ behavior: 'smooth' });
    });
});

function openModal(product) {
    document.getElementById('modal-img').src = product.image;
    document.getElementById('modal-name').textContent = product.name;
    document.getElementById('modal-price').textContent = `$${product.price}`;
    document.getElementById('modal-description').textContent = product.description;
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        backToTop.classList.add('show');
    } else {
        header.classList.remove('scrolled');
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        navLinks.classList.remove('active');
        
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = newsletterForm.querySelector('input[type="email"]').value;
    alert(`Thank you for subscribing with: ${email}`);
    newsletterForm.reset();
});

document.querySelectorAll('.cta-button').forEach(button => {
    if (button.textContent === 'Shop Now') {
        button.addEventListener('click', () => {
            document.querySelector('#categories').scrollIntoView({ behavior: 'smooth' });
        });
    }
});

function initializeEventListeners() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('show')) {
            closeModal();
        }
    });
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = `opacity 0.5s ease ${index * 0.01}s, transform 0.5s ease ${index * 0.01}s`;
        observer.observe(card);
    });
}
