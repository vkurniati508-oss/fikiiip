let currentPage = 1;
const totalPages = 6;

function showPage(pageNumber) {

    for (let i = 1; i <= totalPages; i++) {

        const page = document.getElementById("page" + i);

        if (i === pageNumber) {
            page.classList.add("active");
        } else {
            page.classList.remove("active");
        }
    }

    currentPage = pageNumber;
}


function nextPage() {

    if (currentPage < totalPages) {
        showPage(currentPage + 1);
    }

}


function prevPage() {

    if (currentPage > 1) {
        showPage(currentPage - 1);
    }

}


function restartPage() {
    showPage(1);
}