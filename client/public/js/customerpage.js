document.addEventListener('DOMContentLoaded', function() {
    // Simulate fetching user data from an API
    const customerData = {
        isCustomer: true,
        customer: {
            name: 'Jane Doe'
        },
        recommendations: [
            {
                title: 'Custom WordPress Website Design',
                description: 'Professional WordPress website design for businesses.',
                price: 200,
                image: 'wordpress-design.jpg'
            },
            {
                title: 'SEO Optimization',
                description: 'Boost your website ranking with expert SEO services.',
                price: 100,
                image: 'seo-optimization.jpg'
            }
        ],
        recentlyViewed: [
            {
                title: 'Social Media Management',
                description: 'Get professional social media management services.',
                price: 150,
                image: 'social-media.jpg'
            }
        ]
    };

    const source = document.querySelector("body").innerHTML;
    const template = Handlebars.compile(source);
    const compiledHtml = template(customerData);

    document.body.innerHTML = compiledHtml;
});
