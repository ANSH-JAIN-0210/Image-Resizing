function resize() {
    let width = document.getElementById("width").value;
    let height = document.getElementById("height").value;
    let radius = document.getElementById("border-radius").value;
    let borderColor = document.getElementById("border-color").value;
    let borderWidth = document.getElementById("border-width").value;
    let image = document.getElementById('image');

    image.style.width = `${width}px`;
    image.style.height = `${height}px`;
    image.style.borderRadius = `${radius}px`;
    image.style.border = `${borderWidth}px solid ${borderColor}`;
}

document.getElementById("btn").addEventListener("click", () => {
    resize();
});
