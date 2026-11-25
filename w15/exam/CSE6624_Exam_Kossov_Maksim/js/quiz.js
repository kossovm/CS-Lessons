// Rider test — five questions about the Tezjol rules.

/* ---------- data ----------
   Five questions about my niche: the Tezjol scooter rental service.
   Array of objects: q = question, options = answer texts,
   answer = index of the correct option, why = one line shown after answering. */

const questions = [
  {
    q: "Unlocking is free and riding costs 90 ₸ per minute. What does a 12-minute ride cost?",
    options: ["90 ₸", "1 080 ₸", "1 170 ₸", "12 ₸"],
    answer: 1,
    why: "12 × 90 = 1 080 ₸. The unlock adds nothing."
  },
  {
    q: "A bike lane runs along the street you are on. Where should you ride?",
    options: [
      "On the pavement, next to the people walking",
      "In the bike lane",
      "In the middle of the car lane",
      "Anywhere, a scooter is not a vehicle"
    ],
    answer: 1,
    why: "Bike lane first, always. The pavement is a last resort and only at walking speed."
  },
  {
    q: "How do you end a ride correctly?",
    options: [
      "Leave it anywhere and close the app",
      "Lean it against a shop window",
      "Park inside a marked zone and send a photo of the parked scooter",
      "Hand it to the next rider"
    ],
    answer: 2,
    why: "The photo inside a marked zone is what closes the ride and stops the billing."
  },
  {
    q: "What is the top speed of the Tezjol fleet?",
    options: ["15 km/h", "25 km/h", "45 km/h", "No limit"],
    answer: 1,
    why: "Every scooter in the fleet is limited to 25 km/h."
  },
  {
    q: "The scooter you reserved shows 15 % battery. What is the right move?",
    options: [
      "Take it and hope for the best",
      "Take it and charge it yourself",
      "Pick another scooter",
      "Ride it until it stops, then leave it"
    ],
    answer: 2,
    why: "Below 20 % the range is unreliable — the ride can end far from a parking zone."
  }
];

/* ---------- state ---------- */

let current = 0;
let score = 0;

/* ---------- elements ---------- */

const barEl = document.getElementById("bar");
const progressEl = document.getElementById("progress");
const scoreEl = document.getElementById("score");
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next");
const cardEl = document.getElementById("card");
const endEl = document.getElementById("end");
const endTitleEl = document.getElementById("end-title");
const endTextEl = document.getElementById("end-text");
const againBtn = document.getElementById("again");

/* ---------- rendering ---------- */

function renderQuestion() {
  const item = questions[current];

  // DOM update 1: question text and the counters
  questionEl.textContent = item.q;
  progressEl.textContent = "Question " + (current + 1) + " of " + questions.length;
  scoreEl.textContent = "Score: " + score;
  barEl.style.width = (current / questions.length) * 100 + "%";

  feedbackEl.textContent = "";
  nextBtn.hidden = true;

  // DOM update 2: build one button per option with createElement
  optionsEl.innerHTML = "";
  item.options.forEach(function (text, index) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "option";
    btn.textContent = text;
    btn.addEventListener("click", function () {
      checkAnswer(index);
    });
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(chosen) {
  const item = questions[current];
  const buttons = optionsEl.querySelectorAll(".option");

  // Lock the question so it cannot be answered twice.
  buttons.forEach(function (btn, index) {
    btn.disabled = true;
    // DOM update 3: classList marks the right answer and the wrong pick
    if (index === item.answer) {
      btn.classList.add("is-correct");
    } else if (index === chosen) {
      btn.classList.add("is-wrong");
    }
  });

  if (chosen === item.answer) {
    score = score + 1;
    feedbackEl.textContent = "Correct. " + item.why;
  } else {
    feedbackEl.textContent = "Not this one. " + item.why;
  }

  scoreEl.textContent = "Score: " + score;
  nextBtn.hidden = false;
  nextBtn.textContent =
    current === questions.length - 1 ? "See result" : "Next question";
  nextBtn.focus();
}

function showEnd() {
  // DOM update 4: swap the whole card for the result screen
  cardEl.hidden = true;
  endEl.hidden = false;
  barEl.style.width = "100%";
  progressEl.textContent = "Finished";

  endTitleEl.textContent = score + " out of " + questions.length;
  endTextEl.textContent =
    score === questions.length
      ? "Full marks. You can be trusted with a scooter."
      : "Read the parking and battery rules again before you ride.";

  console.log("quiz finished, score:", score, "of", questions.length);
}

/* ---------- events ---------- */

nextBtn.addEventListener("click", function () {
  current = current + 1;
  if (current < questions.length) {
    renderQuestion();
  } else {
    showEnd();
  }
});

againBtn.addEventListener("click", function () {
  // DOM update 5: reset the state and bring the question card back
  current = 0;
  score = 0;
  endEl.hidden = true;
  cardEl.hidden = false;
  renderQuestion();
});

renderQuestion();
