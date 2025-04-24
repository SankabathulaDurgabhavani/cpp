const movies = {
  gangleader: {
    poster: "https://tse1.mm.bing.net/th?id=OIP.gOjPKIwnt2Z1IDLw1KYGkwHaKX&pid=Api&P=0&h=180",
    description: "Hero:Nani,heroine:Priyanka mohan,Description:A clever revenge thriller with comedy starring Nani.",
    ratings: [],
  },
  pushpa: {
    poster: "https://tse4.mm.bing.net/th?id=OIP.uuvZBuHZ2KX4xNiYuIYRYgHaNK&pid=Api&P=0&h=180",
    description: "Allu Arjun becomes Pushpa Raj, a fearless red sandalwood smuggler.",
    ratings: [],
  },
  gunturkaram: {
    poster: "https://tse1.mm.bing.net/th?id=OIP.WhTKKSayTGlCM5_szOdWKQAAAA&pid=Api&P=0&h=180",
    description: "Mahesh Babu's latest mass entertainer filled with action and drama.",
    ratings: [],
  },
  athadu: {
    poster: "https://tse4.mm.bing.net/th?id=OIP.xUyg4Vx4UsO1a9uQh1-XxAHaEK&pid=Api&P=0&h=180",
    description: "A contract killer gets tangled in a case of mistaken identity.",
    ratings: [],
  },
  svsc: {
    poster: "https://tse4.mm.bing.net/th?id=OIP.apqNfjeuJ_3GcWwlaOLBQwHaDt&pid=Api&P=0&h=180",
    description: "A heartwarming family drama starring Mahesh Babu and Venkatesh.",
    ratings: [],
  },
  djtillu: {
    poster: "https://tse1.mm.bing.net/th?id=OIP.CC1gV70j9MLZIc5x85PWfgHaFj&pid=Api&P=0&h=180",
    description: "A wild ride with DJ Tillu, a crazy character with a unique style.",
    ratings: [],
  },
  magadheera: {
    poster: "https://tse2.mm.bing.net/th?id=OIP.z_c1-7cA8pPGxZKqKFhxNwHaFj&pid=Api&P=0&h=180",
    description: "A reincarnation-based action epic starring Ram Charan.",
    ratings: [],
  },
  bahubali: {
    poster: "https://tse1.mm.bing.net/th?id=OIP.icBDDSgw7QG0oZ7mtyMqlQHaKG&pid=Api&P=0&h=180",
    description: "The epic tale of Baahubali's rise and the mystery of his past.",
    ratings: [],
  },
  geethagovindam: {
    poster: "https://tse3.mm.bing.net/th?id=OIP.rQemUQPoqQ9_ptVZtg6eUAHaJ9&pid=Api&P=0&h=180",
    description: "A romantic drama filled with misunderstandings and love.",
    ratings: [],
  },
  taxiwala: {
    poster: "https://tse1.mm.bing.net/th?id=OIP.RWXxUHrgo8gbp37E4rZBhQHaDt&pid=Api&P=0&h=180",
    description: "A spooky yet fun ride with a possessed car and a chill cabbie.",
    ratings: [],
  },
  sarrainodu: {
    poster: "https://tse3.mm.bing.net/th?id=OIP.1GcHyZuI8m5DeOO_i0ysUQHaEK&pid=Api&P=0&h=180",
    description: "An action-packed mass entertainer with Allu Arjun in full form.",
    ratings: [],
  }
};

let currentMovie = "";

function showMovieDetails() {
  const selected = document.getElementById("movieDropdown").value;
  const displayArea = document.getElementById("movieDisplay");

  if (selected && movies[selected]) {
    currentMovie = selected;
    document.getElementById("moviePoster").src = movies[selected].poster;
    document.getElementById("movieDescription").textContent = movies[selected].description;
    document.getElementById("ratingOutput").textContent = "";
    document.getElementById("avgRatingDisplay").textContent = getAverageRatingText(movies[selected].ratings);
    document.getElementById("ratingDropdown").value = "";
    displayArea.style.display = "block";
  } else {
    displayArea.style.display = "none";
    currentMovie = "";
  }
}

function submitRating() {
  const ratingValue = parseInt(document.getElementById("ratingDropdown").value);
  const ratingOutput = document.getElementById("ratingOutput");

  if (!currentMovie || isNaN(ratingValue)) {
    alert("Please select a movie and give a rating!");
    return;
  }

  movies[currentMovie].ratings.push(ratingValue);
  const stars = '★'.repeat(ratingValue) + '☆'.repeat(5 - ratingValue);
  ratingOutput.innerHTML = `You rated this movie: <strong>${stars}</strong>`;

  document.getElementById("avgRatingDisplay").textContent = getAverageRatingText(movies[currentMovie].ratings);
}

function getAverageRatingText(ratingsArray) {
  if (ratingsArray.length === 0) return "No ratings yet.";
  const avg = ratingsArray.reduce((a, b) => a + b, 0) / ratingsArray.length;
  const rounded = Math.round(avg);
  return `⭐ Average Rating: ${'★'.repeat(rounded)}${'☆'.repeat(5 - rounded)} (${avg.toFixed(1)} from ${ratingsArray.length} user(s))`;
}
