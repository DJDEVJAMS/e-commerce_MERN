document.addEventListener('DOMContentLoaded', function() {
    // Simulated data fetching from the backend for the seller
    const sellerData = {
        isSeller: true,
        seller: {
            name: 'John Smith',
            earnings: 3400
        },
        services: [
            {
                title: 'Professional Logo Design',
                description: 'Get a custom logo design for your business.',
                price: 100,
                image: 'logo-design.jpg'
            },
            {
                title: 'Social Media Marketing',
                description: 'Boost your social media presence with expert strategies.',
                price: 250,
                image: 'social-media-marketing.jpg'
            }
        ],
        orderStats: {
            pending: 3,
            completed: 18,
            cancelled: 1
        },
        recentRequests: [
            {
                customerName: 'Jane Doe',
                request: 'Can you create a minimalist logo for my startup?'
            },
            {
                customerName: 'Michael Lee',
                request: 'I need a social media plan for my e-commerce business.'
            }
        ]
    };

    const source = document.querySelector("body").innerHTML;
    const template = Handlebars.compile(source);
    const compiledHtml = template(sellerData);

    document.body.innerHTML = compiledHtml;
});
