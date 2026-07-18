const blogContainer = document.querySelector('#blog-articles-container')
const blogTitle = document.querySelector('#modalTitle')
const blogBody = document.querySelector('#modalBody')

const positivusBlogs = [
  {
    id: 1,
    category: "Tutorial",
    date: "January 20, 2024",
    title: "How to quickly deploy a static website",
    excerpt: "Static websites are now used to bootstrap lots of websites and are becoming the basis for a variety of tools that even influence both web designers and developers influence both web designers and developers.",
    author: "Jese Leos",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png", // 👈 Sirf yeh key add ki hai
    full_blog: "Static websites have revolutionized modern web development due to their lightning-fast speed, enhanced security, and low hosting costs. To quickly deploy a static website today, you don't need complex server setups. Modern platforms like Vercel, Netlify, and GitHub Pages allow you to connect your repository and deploy globally in just one click. By leveraging tools like Vite, Astro, or simple HTML/CSS, developers can push updates that go live instantly through CI/CD pipelines, making web management effortless for both designers and frontend engineers."
  },
  {
    id: 2,
    category: "Article",
    date: "January 17, 2024",
    title: "Our first project with Astro",
    excerpt: "In the ever-evolving world of mobile technology, Samsung has consistently delivered cutting-edge devices that redefine the way we experience the digital world.",
    author: "Bonnie Green",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png", // 👈 Sirf yeh key add ki hai
    full_blog: "Building our first project with Astro was a game-changer for performance. Astro's 'Islands Architecture' allows us to ship zero JavaScript by default, rendering HTML on the server and only hydrating the interactive components when needed. In this project, we integrated digital showcase modules highlighting Samsung's latest cutting-edge mobile technologies. The result was a blazing-fast user experience with perfect SEO scores, proving that you don't need massive JavaScript bundles to create a visually rich, modern digital experience."
  },
  {
    id: 3,
    category: "Article",
    date: "January 15, 2024",
    title: "Capturing Life's Moments with Canon Excellence",
    excerpt: "Canon has been a symbol of excellence in the world of photography for decades. In 2024, Canon continues to lead the way in innovation...",
    author: "Bonnie Green",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png", // 👈 Sirf yeh key add ki hai
    full_blog: "For decades, Canon has remained at the pinnacle of optical engineering, and in 2024, they continue to redefine photography with their mirrorless R-series lineup. Capturing life's fleeting moments requires a camera that reacts as fast as human instinct. With cutting-edge AI autofocus, exceptional low-light performance, and cinematic 8K video capabilities, Canon's latest tools empower creators to tell deeper stories. Whether you are shooting street photography or high-end commercial campaigns, their commitment to color science ensures every frame looks pure and breathtaking."
  },
  {
    id: 4,
    category: "Article",
    date: "January 14, 2024",
    title: "Unleash Creativity With These Cutting-Edge Tablets",
    excerpt: "In the world of digital creativity, tablets have become indispensable tools for artists, designers, and anyone seeking to unleash their artistic potential.",
    author: "Bonnie Green",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png", // 👈 Sirf yeh key add ki hai
    full_blog: "Digital art has evolved dramatically, and tablets have transformed from simple consumption devices into powerhouse creative studios. Modern tablets equipped with high-refresh-rate displays and ultra-low latency styluses have become completely indispensable for contemporary artists and UI/UX designers. The ability to sketch vector graphics on the go, render 3D models smoothly, and edit high-resolution layers seamlessly means that creativity is no longer chained to a office desk. These cutting-edge devices are truly bridging the gap between raw imagination and digital reality."
  },
  {
    id: 5,
    category: "Tutorial",
    date: "January 14, 2024",
    title: "Guardian of the Digital Realm: Web Security",
    excerpt: "In today's interconnected world, where data breaches and cyber threats are on the rise, web security has become paramount. As the guardians of the digital realm...",
    author: "Jese Leos",
    avatar: "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png", // 👈 Sirf yeh key add ki hai
    full_blog: "With cyber threats growing more sophisticated every minute, web security is no longer an afterthought—it is the foundation of the digital realm. As developers, we act as guardians of user data. Implementing robust security measures like HTTPS, Secure Content Security Policies (CSP), and strict input sanitization is essential to prevent Cross-Site Scripting (XSS) and SQL injection attacks. This tutorial breaks down the essential checklists every developer must implement, from setting up secure HTTP-only cookies to configuring firewalls, ensuring your web applications remain unbreakable fortresses."
  }
];

const MainBoxArticles = () => {
    const htmlCards = positivusBlogs.map((item) => {
        return `
        <div class="blog-boxes">
            <div class="blog-icon-div"> 
            <span class="badge bg-dark mb-2">${item.category}</span>
            <p class="text-muted small mb-1">${item.date}</p>
            </div>
            <h2 class="fs-4 fw-bold mb-3">${item.title}</h2>
            <p class="mb-4">${item.excerpt}</p>
            
            <div class="d-flex justify-content-between align-items-center">
                <div class="d-flex align-items-center gap-2">
                    <img src="${item.avatar}" alt="${item.author}" class="rounded-circle" style="width: 35px; height: 35px; object-fit: cover;">
                    <span class="fw-medium">${item.author}</span>
                </div>
                <button class="btn btn-link p-0 text-decoration-none" onclick="openBlog(${item.id})"  type="button" data-bs-toggle="modal"
                        data-bs-target="#blogModal">Read more →</button>
            </div>
        </div>
    `;
    })
    // console.log(htmlCards);

    blogContainer.innerHTML = htmlCards.join('');
}

MainBoxArticles()

const openBlog = (article) => {
    const clickedBlog = positivusBlogs.find((item) => {
        return item.id === article
    })
    console.log(clickedBlog);
    if (clickedBlog) {
        blogTitle.innerText = clickedBlog.title;
        blogBody.innerText = clickedBlog.full_blog;
    }
}