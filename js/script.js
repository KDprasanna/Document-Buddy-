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
window.updateChecklistProgress = function () {
    const total = documentChecks.length;
    const completed = document.querySelectorAll(".document-check:checked").length;

    checklistProgress.textContent =
        "Progress: " + completed + " / " + total +
        " documents completed";

    let statusText = document.getElementById("document-status");

    if (!statusText) {
        statusText = document.createElement("p");
        statusText.id = "document-status";
        checklistProgress.parentNode.insertBefore(
            statusText,
            checklistProgress.nextSibling
        );
    }

    if (completed === 0) {
        statusText.textContent = "Status: Not Started";
    } else if (completed < total) {
        statusText.textContent = "Status: In Progress";
    } else {
        statusText.textContent = "Status: Completed";
    }
}
    documentChecks.forEach(function (checkbox) {

        checkbox.addEventListener("change", function () {
            window.updateChecklistProgress(); 
        });

    });

    window.updateChecklistProgress();

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


// Save checklist progress
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".document-check");
    const savedChecklist = JSON.parse(localStorage.getItem("aadharChecklist")) || [];

    checkboxes.forEach((checkbox, index) => {
        checkbox.checked = savedChecklist[index] === true;

        checkbox.addEventListener("change", function () {
            const checklist = Array.from(checkboxes).map(cb => cb.checked);
            localStorage.setItem("aadharChecklist", JSON.stringify(checklist));

            window.updateChecklistProgress();
        });
    });
    window.updateChecklistProgress();
});
document.addEventListener("DOMContentLoaded", function () {
    const reminderInput = document.getElementById("document-reminder");
    const saveButton = document.getElementById("save-reminder");
    const reminderMessage = document.getElementById("reminder-message");

    if (!reminderInput || !saveButton || !reminderMessage) return;

    const savedDate = localStorage.getItem("aadhaarReminder");
    if (savedDate) {
        reminderInput.value = savedDate;
        reminderMessage.textContent = "Saved reminder date: " + savedDate;
    }

    saveButton.addEventListener("click", function () {
        const date = reminderInput.value;

        if (!date) {
            reminderMessage.textContent = "Please choose a reminder date.";
            return;
        }

        localStorage.setItem("aadhaarReminder", date);
        reminderMessage.textContent = "Reminder saved for: " + date;
    });
});