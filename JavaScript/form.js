document.getElementById("customerForm").addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(this);
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }
});