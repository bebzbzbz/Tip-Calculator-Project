const formDiv = document.querySelector("#form-div") as HTMLDivElement;
const resultDiv = document.querySelector("#result-div") as HTMLDivElement;
const result  = document.querySelector("#result") as HTMLDivElement;

const btn = document.querySelector("input[type=submit]")
btn?.addEventListener("click", tipsCalc)

function tipsCalc() {
    event?.preventDefault();

    const total = Number((document.querySelector("#total") as HTMLInputElement).value);
    const people = Number((document.querySelector("#people") as HTMLInputElement).value);
    const service = Number((document.querySelector("#service") as HTMLSelectElement).value);

    if(total != 0 && people != 0 && service != 0) {
        const tipsResult = Number((total * service).toFixed(2));
        const totalPlusTips = (total + tipsResult);
        const pricePerPerson = totalPlusTips / people;
        
        result.innerHTML = `<p>Das <b>Trinkgeld</b> beträgt: ${tipsResult}€</p> 
        <p>Die <b>Gesamtsumme</b> ist: ${totalPlusTips}€</p>
        <p>Der Preis <b>pro Person</b> liegt bei: ${pricePerPerson}€</p>`;

        // Slides to result

        formDiv.classList.toggle("hide");

        resultDiv.classList.toggle("show");
    } else {
        alert("Please fill out all fields")
    }
}

const backBtn = document.querySelector("#back") as HTMLAnchorElement;
backBtn.addEventListener("click", goBack)

function goBack() {
    formDiv.classList.toggle("hide");

    resultDiv.classList.toggle("show");
}