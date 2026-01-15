
console.log("edit");
let urlId=new URLSearchParams(window.location.search)
let id=urlId.get("id")
let loadstudent= async ()=>{

    let data= await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`);

    let student =await data.json();
    console.log(student);
    studentname.value=student.personal_info.full_name;
    StudentGender.value=student.personal_info.gender;
    dob.value=student.personal_info.date_of_birth;
    profileimg.value=student.academic_info.profile_image;
    collegeid.value=student.academic_info.collegeid;
    department.value=student.academic_info.department;
    Degree.value=student.academic_info.Degree;
    graducation.value=student.academic_info.graducation;
    cgpa.value=student.academic_info.cgpa;
    Backlogs.value=student.academic_info.Backlogs;
    progeamming.value=student.skills.progeamming;
    DataBase.value=student.skills.DataBase;
    tools.value=student.skills.tools;
    placementstatus.value=student.placement_status;


};
loadstudent();







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
            `https://placementstracker-4.onrender.com/api/students/${id}`,
            {
                method: "PUT",
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
