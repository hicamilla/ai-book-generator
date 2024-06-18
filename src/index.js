function displayBook(response) {

    new Typewriter("#book", {
    strings: response.data.answer,
    autoStart: true,
    delay: 30,
    cursor: "",
  });
}

function generateBook(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");

  let apiKey = "927adff4309ccc33tb7fd3o104741c05";
  let context = `As an experienced and widely respected librarian, you are an expert in recommending books to readers. Your objective is to provide at book suggestion using HTML that includes the following elements: the book title in bold, the author's name in bold, a description, and a direct link to purchase it from Amazon. IMPORTANT: Maintain a consistent format by presenting the information in this order and in separated lines: 
  1. The book title on one line in  using <strong> and <h2>.
  2. The author's name on another line in <strong> using <h4>.
  3. The description in other line using <p>.
  4. The purchase link in a <button>.
  Ensure all instructions are strictly followed.`;
  let prompt = `User instructions: generate a book suggestion based on the following guidelines: ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let bookElement = document.querySelector("#book");
  bookElement.classList.remove("hidden");
  bookElement.innerHTML = `<div class="generating"> Searching in the library books about ${instructionsInput.value} 🕯️ </div>`;

  axios.get(apiURL).then(displayBook);
}

let bookFormElement = document.querySelector("#book-generator-form");
bookFormElement.addEventListener("submit", generateBook);