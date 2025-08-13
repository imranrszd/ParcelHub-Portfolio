// Feedback data
const feedbacks = [
    {
        image: "assets/miku-shahalam.png",
        text: "“ With Parcelhub, I can process and track parcels faster than ever. Everything is smooth, reliable, and easy to manage. ”",
        author: "- En. Asyraf",
        organization: "MiKu Point By Mili Express"
    }
    // ,
    // {
    //     image: "assets/parcelhub-kl.png",
    //     text: "“ Parcelhub has made my deliveries faster and my customers happier. Definitely a must-have for my business. ”",
    //     author: "- Pn. Salmah",
    //     organization: "ParcelHub KL"
    // },
    // {
    //     image: "assets/parcelhub-jb.png",
    //     text: "“ The tracking system is top-notch and the interface is so easy to use. Highly recommended! ”",
    //     author: "- Mr. Lim",
    //     organization: "ParcelHub Johor Bahru"
    // }
];

let currentIndex = 0;

// Select elements
const feedbackContainer = document.querySelector('.feedback');
const imageEl = document.querySelector('.feedback .image img');
const textEl = document.querySelector('.feedback .feed-text p');
const authorEl = document.querySelector('.feedback .author-name p');
const orgEl = document.querySelector('.feedback .organization p');

const prevBtn = document.querySelector('.feedback .previous');
const nextBtn = document.querySelector('.feedback .forward');

// Update feedback with fade animation
function updateFeedback(index) {
    // Fade out
    feedbackContainer.classList.add('fade-out');

    setTimeout(() => {
        // Change content after fade-out
        imageEl.src = feedbacks[index].image;
        textEl.textContent = feedbacks[index].text;
        authorEl.textContent = feedbacks[index].author;
        orgEl.textContent = feedbacks[index].organization;

        // Fade in
        feedbackContainer.classList.remove('fade-out');
    }, 300); // Match this to CSS transition time
}

// Event listeners
if (feedbacks.length > 1) {
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + feedbacks.length) % feedbacks.length;
        updateFeedback(currentIndex);
    });
}

if (feedbacks.length > 1) {
    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % feedbacks.length;
        updateFeedback(currentIndex);
    });
}
