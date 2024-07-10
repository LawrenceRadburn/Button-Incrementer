const output = document.getElementById("output");
let count = 0;

output.addEventListener("click", () => {
    count++;
    output.innerHTML = count;
});