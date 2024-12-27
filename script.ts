const btn = document.querySelector("input[type=submit]")
btn?.addEventListener("click", tipsCalc)

function tipsCalc() {
    event?.preventDefault();

    // Result calculation

    const total = Number((document.querySelector("#total") as HTMLInputElement).value);
    const people = Number((document.querySelector("#people") as HTMLInputElement).value);
    const service = Number((document.querySelector("#service") as HTMLSelectElement).value);
    const result  = document.querySelector(".result") as HTMLDivElement;
    
    result.innerHTML = `<p>Das <b>Trinkgeld</b> beträgt: ${total * service}€</p> 
    <p>Die <b>Gesamtsumme</b> ist: ${total + (total * service)}€</p>
    <p>Der Preis <b>pro Person</b> liegt bei: ${(total + (total * service))/people}€</p>
    <a class="btn">Neu berechnen</a>`;
    result.style.height = "100%";

    // Slides to result

    const form = document.querySelector("form") as HTMLFormElement;
    form.style.height = "0";
    form.style.overflow = "hidden";

}