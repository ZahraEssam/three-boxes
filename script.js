let boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", handleClick);
});

function handleClick() {
    let newBox = this.cloneNode(true);

    newBox.addEventListener("click", handleClick);

    document.body.appendChild(newBox);

    this.removeEventListener("click", handleClick);
    this.style.opacity = "0.5";
    this.style.cursor = "default";
}