const formDiv = document.querySelector("#form-div") as HTMLDivElement;
const resultDiv = document.querySelector("#result-div") as HTMLDivElement;
const result  = document.querySelector("#result") as HTMLDivElement;

const btn = document.querySelector("input[type=submit]")
btn?.addEventListener("click", tipsCalc)

function tipsCalc() {
    event?.preventDefault();

    // Result calculation

    const total = Number((document.querySelector("#total") as HTMLInputElement).value);
    const people = Number((document.querySelector("#people") as HTMLInputElement).value);
    const service = Number((document.querySelector("#service") as HTMLSelectElement).value);
    
    result.innerHTML = `<p>Das <b>Trinkgeld</b> beträgt: ${(total * service).toFixed(2)}€</p> 
    <p>Die <b>Gesamtsumme</b> ist: ${(total + (total * service)).toFixed(2)}€</p>
    <p>Der Preis <b>pro Person</b> liegt bei: ${((total + (total * service))/people).toFixed(2)}€</p>`;

    // Slides to result

    formDiv.classList.toggle("hide");

    resultDiv.classList.toggle("show");
}

const backBtn = document.querySelector("#back") as HTMLAnchorElement;
backBtn.addEventListener("click", goBack)

function goBack() {
    formDiv.classList.toggle("hide");

    resultDiv.classList.toggle("show");
}