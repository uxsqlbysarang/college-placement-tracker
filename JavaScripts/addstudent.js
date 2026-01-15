
// let std_form = document.getElementById("Studentform")

// std_form.addEventListener('submit', async (e) =>{
//     e.preventDefault();
//     console.log();
    
    

//     let student = {
//         personal_info:{
//             full_name : studentname.value,
//             gender : StudentGender.value,
//             date_of_birth : dob.value,
//             profile_image : profileimg.value
//         },
//         academic_info : {
//             college_id : collegeid.value,
//             department : department.value,
//             degree : Degree.value,
//             graduation_year : graducation.value,
//             cpga : cgpa.value,
//             backlogs : Backlogs.value
//         },
//         skills : {
//             programming : progeamming.value.split(","),
//             databases : DataBase.value.split(","),
//             tools : tools.value.split(","),
//         },
//         placement_status : placementstatus.value,
//     };

//     console.log(student);
    
//     await fetch("https://placementstracker-4.onrender.com/api/students",{
//         method : "POST",
//         headers : {"content-type":"application/json"},
//         body : JSON.stringify(student)
//     });

//     alert("Added successfully....")
// })





// function toBase64(file) {
//     return new Promise((resolve, reject) => {
//         const reader = new FileReader();
//         reader.readAsDataURL(file);
//         reader.onload = () => resolve(reader.result);
//         reader.onerror = error => reject(error);
//     });
// }


// let std_form = document.getElementById("Studentform");

// std_form.addEventListener("submit", async (e) => {
//     e.preventDefault();

//     let imageBase64 = "";

//     if (profileImage.files.length > 0) {
//         imageBase64 = await toBase64(profileImage.files[0]);
//     }

//     let student = {
//         personal_info: {
//             full_name: fullName.value,
//             gender: gender.value,
//             date_of_birth: dob.value,
//             profile_image: imageBase64    
//         },
//         academic_info: {
//             college_id: collegeId.value,
//             department: department.value,
//             degree: degree.value,
//             graduation_year: graduationYear.value,
//             cgpa: cgpa.value,
//             backlogs: backlogs.value
//         },
//         skills: {
//             programming: programming.value.split(","),
//             databases: databases.value.split(","),
//             tools: tools.value.split(",")
//         },
//         placement_status: placementStatus.value
//     };

//     try {
//         let res = await fetch(
//             "https://placementstracker-4.onrender.com/api/students",
//             {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify(student)
//             }
//         );

//         if (!res.ok) throw new Error("Failed");

//         alert("Student added successfully ");
//         std_form.reset();

//     } catch (err) {
//         console.error(err);
//         alert("Server error ");
//     }
// });





// Convert image file to Base64
function toBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

// Form
const std_form = document.getElementById("Studentform");

std_form.addEventListener("submit", async (e) => {
    e.preventDefault();

    try {
        // Get image
        let imageBase64 = "";
        const profileimg = document.getElementById("profileimg");
        if (profileimg.files.length > 0) {
            imageBase64 = await toBase64(profileimg.files[0]);
        }

        // Create student object
        const student = {
            personal_info: {
                full_name: document.getElementById("studentname").value,
                gender: document.getElementById("StudentGender").value,
                date_of_birth: document.getElementById("dob").value,
                profile_image: imageBase64
            },
            academic_info: {
                college_id: document.getElementById("collegeid").value,
                department: document.getElementById("department").value,
                degree: document.getElementById("Degree").value,
                graduation_year: document.getElementById("graducation").value,
                cgpa: document.getElementById("cgpa").value,
                backlogs: document.getElementById("Backlogs").value
            },
            skills: {
                programming: document
                    .getElementById("progeamming")
                    .value.split(",")
                    .map(v => v.trim()),

                databases: document
                    .getElementById("DataBase")
                    .value.split(",")
                    .map(v => v.trim()),

                tools: document
                    .getElementById("tools")
                    .value.split(",")
                    .map(v => v.trim())
            },
            placement_status: document.getElementById("placementstatus").value
        };

        // API call
        const res = await fetch(
            "https://placementstracker-4.onrender.com/api/students",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            }
        );

        if (!res.ok) {
            throw new Error("Failed to add student");
        }

        alert("Student added successfully ✅");
        std_form.reset();

    } catch (error) {
        console.error(error);
        alert("Something went wrong ❌");
    }
});
