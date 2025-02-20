//Adding click event listener to each box to handle expansion 
document.addEventListener("DOMContentLoaded", function() {const boxes = document.querySelectorAll(".box");
    boxes.forEach(box => {
        box.addEventListener("click", function() {
            boxes.forEach(b => b.classList.remove("expanded")); 
            this.classList.add("expanded");
        });
    });
});

// adding pink border on clicking the box
document.querySelectorAll(".box").forEach(box => {
    box.addEventListener("click", function() {
        document.querySelectorAll(".box").forEach(b => b.classList.remove("active")); 
        this.classList.add("active"); 
    });
});