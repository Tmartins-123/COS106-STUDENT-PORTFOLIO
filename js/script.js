
// ACADEMIC PLANNER

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

if (taskForm) {
    taskForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const taskText = taskInput.value.trim();

        if (taskText === "") {
            alert("Please enter an academic task.");
            return;
        }

        const listItem = document.createElement("li");
        const taskLabel = document.createElement("span");
        const completeButton = document.createElement("button");
        const deleteButton = document.createElement("button");

        taskLabel.textContent = taskText;
        completeButton.textContent = "Mark Complete";
        deleteButton.textContent = "Delete";

        completeButton.addEventListener("click", function() {
            taskLabel.style.textDecoration = "line-through";
            taskLabel.style.color = "green";
        });

        deleteButton.addEventListener("click", function() {
            listItem.remove();
        });

        listItem.appendChild(taskLabel);
        listItem.appendChild(completeButton);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

        taskInput.value = "";
    });
}


// CONTACT FORM VALIDATION

const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^\d+$/;

        if (name === "" || email === "" || phone === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Phone number must contain digits only.");
            return;
        }

        alert("Your form has been validated successfully!");
        contactForm.reset();
    });
}
