const generateBtn = document.querySelector("#generateBtn");
const benjiFact = document.querySelector("#benjiFact");


async function getFact() {
  try {
    const response = await fetch(
      "https://uselessfacts.jsph.pl/api/v2/facts/random"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch fact");
    }

    const data = await response.json();

    printFact(data.text);

  } catch (error) {
    console.error(error);
  }
}

function printFact(text) {
  benjiFact.innerHTML = "";

  const fact = document.createElement("span");
  fact.textContent = text;

  benjiFact.appendChild(fact);
}

generateBtn.addEventListener("click", () =>{
    getFact()
})