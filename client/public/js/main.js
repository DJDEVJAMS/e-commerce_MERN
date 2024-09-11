document.addEventListener("DOMContentLoaded", () => {
    const source = document.querySelector("body").innerHTML;
    const template = Handlebars.compile(source);

    const data = {
        categories: [
            { name: "Graphics & Design", image: "graphics-design.jpg" },
            { name: "Digital Marketing", image: "digital-marketing.jpg" },
            { name: "Writing & Translation", image: "writing-translation.jpg" }
        ],
        services: [
            { title: "Logo Design", description: "Get a professional logo design for your brand", price: 50, image: "logo-design.jpg" },
            { title: "SEO Optimization", description: "Improve your website's visibility", price: 100, image: "seo-optimization.jpg" }
        ],
        testimonials: [
            { quote: "Amazing service!", name: "John Doe" },
            { quote: "Highly recommend!", name: "Jane Smith" }
        ]
    };

    const compiledHtml = template(data);
    document.body.innerHTML = compiledHtml;
});
