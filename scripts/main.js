// [TODO] Make it functional based on the selected experience option

// // Store reference to the datalist
// const experienceOptions = document.getElementById("experienceOptions");
// // Add event listener to the input field
// const experienceInput = document.getElementById("experience");

// function displayContentBasedOnExperience(selectedValue) {
//     const experienceSections = document.querySelectorAll(".experience-section");
//     experienceSections.forEach(section => {
//         const tags = section.getAttribute("data-tags").toLowerCase().split(",");
//         if (tags.includes(selectedValue.toLowerCase()) || selectedValue === "") {
//             section.style.display = "block";
//         } else {
//             section.style.display = "none";
//         }
//         if (selectedValue === "") {
//             clearDatalistStyles();
//         }
//         else {
//             if (selectedValue === "Role") {

//             }else if (selectedValue === "Company") {
                
//             }else if (selectedValue === "Duration") {
                
//             }else if (selectedValue === "Location") {
                
//             }else if (selectedValue === "Technologies Used") {

//             }else if (selectedValue === "Responsibilities") {
                
//             }
//         }
//     });
// }

// // Clear styles function
// function clearDatalistStyles() {
//     const options = experienceOptions.getElementsByTagName("option");
//     for (let i = 0; i < options.length; i++) {
//         options[i].style.color = '';
//         options[i].style.display = "block";
//     }
// }

// // Function to filter options based on experience input
// experienceInput.addEventListener("input", function() {
//     const filter = experienceInput.value.toLowerCase();
//     const options = experienceOptions.getElementsByTagName("option");
//     for (let i = 0; i < options.length; i++) {
//         const option = options[i];
//         if (option.value.toLowerCase().includes(filter)) {
//             option.style.color = '#001fbd';
//             option.style.display = "block";
//         } else {
//             option.style.display = "none";
//         }
//     }
// });

// // Optional: Clear filter when input is cleared
// experienceInput.addEventListener("change", function() {
//     if (experienceInput.value === "") {
//         const options = experienceOptions.getElementsByTagName("option");
//         for (let i = 0; i < options.length; i++) {
//             options[i].style.display = "block";
//         }
//     }
// });

// Note: Styling of datalist options is limited and may not work consistently across browsers.