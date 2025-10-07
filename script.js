// Feedback data
const feedbacks = [
    {
        image: "assets/miku-shahalam.png",
        text: "“ With Parcelhub, I can process and track parcels less than 4 seconds. Everything is smooth, reliable, and easy to manage. ”",
        author: "- En. Hamizan",
        organization: "MiKu Point By Mili Express"
    }
    ,
    {
        image: "assets/unistorage-arau.webp",
        text: "“ Parcelhub has made my deliveries faster and my customers happier. Definitely a must-have for my business. ”",
        author: "- En. Khairil",
        organization: "Unistorage Arau"
    },
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

// form disable another page after submition

document.getElementById("enquiryForm").addEventListener("submit", function (event) {
    event.preventDefault(); // stop normal form submission

    const form = event.target;
    const data = new FormData(form);
    const submitBtn = document.getElementById("submitBtn");

    // Disable and fade out button text
    submitBtn.disabled = true;
    submitBtn.classList.add("fade-text");
    submitBtn.classList.remove("show");


    fetch("https://formspree.io/f/xblkbdwl", {
        method: "POST",
        body: data,
        headers: {
            "Accept": "application/json"
        }
    }).then(response => {
        if (response.ok) {
            setTimeout(() => {
                // Change text and style after fade-out
                submitBtn.textContent = "Sent ✓";
                submitBtn.classList.add("sent");
                submitBtn.classList.add("show");
            }, 300);
        }
    }).catch(() => {
        submitBtn.textContent = "Error ❌";
        submitBtn.style.backgroundColor = "#e74c3c";
    });
});

