function openService(service) {

    if (service === "college") {
        alert("College Admission details will be available soon.");
    }

    else if (service === "scholarship") {
        alert("Scholarship Application details will be available soon.");
    }

    else if (service === "aadhaar") {
        alert("Aadhaar Service details will be available soon.");
    }

    else if (service === "bank") {
        alert("Bank Account details will be available soon.");
    }

    else if (service === "address") {
        alert("Address Change details will be available soon.");
    }

    else if (service === "passport") {
        alert("Passport Application details will be available soon.");
    }

}
// Interactive document checklist

document.addEventListener("DOMContentLoaded", function () {

    const documentChecks =
        document.querySelectorAll(".document-check");

    const checklistProgress =
        document.getElementById("checklist-progress");

    function updateChecklistProgress() {

        const total = documentChecks.length;

        const completed =
            document.querySelectorAll(".document-check:checked").length;

        checklistProgress.textContent =
            "Progress: " + completed + " / " + total +
            " documents completed";
    }

    documentChecks.forEach(function (checkbox) {

        checkbox.addEventListener("change", function () {
            updateChecklistProgress();
        });

    });

    updateChecklistProgress();

});
// Service Search

const serviceSearch = document.getElementById("serviceSearch");
const searchableCards = document.querySelectorAll(".searchable-card");

if (serviceSearch) {

    serviceSearch.addEventListener("input", function () {

        const searchText = serviceSearch.value.toLowerCase();

        searchableCards.forEach(function (card) {

            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }

        });

    });

}
async function loadDocuments() {
    try {
        const response = await
        fetch("http://localhost:3001/api/documents");
        const data = await response.json();
        console.log("Backend response:",data);
    } catch (error) {
        console.error("Backend connection failed:",error);
    }
    }
    loadDocuments();


