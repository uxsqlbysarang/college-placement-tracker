let studentContainer=document.getElementById("student-container")

let allstudents;

let callStudentsFromApi=async ()=>{
    allstudents = await getStudent();
    displayStudents(allstudents);
};

callStudentsFromApi();

let displayStudents= async(Students)=>{

    studentContainer.innerHTML=Students.map((ele)=>`
        <div id="student-card">
            <img src="${ele.personal_info.profile_image}">
            <h4>Name:${ele.personal_info.full_name}</h4>
            <h4>College_id:${ele.academic_info.college_id}</h4>
            <h5>Placement status:${ele.placement_status}</h5>
            <button class="editbtn" onclick="editStudent('${ele.student_id}')">Edit</button>
            <button class="dltbtn" onclick="deleteStudent('${ele.student_id}')">Delete</button>

        </div>`).join("")
};

let deleteStudent= async (id)=>{
    let ConfirmDelete = confirm("Are you sure");
    if(!ConfirmDelete) return;

    await fetch(`https://placementstracker-4.onrender.com/api/students/${id}`,{method:"Delete", 
        
});
callStudentsFromApi();   
};




let editStudent =(id)=>{
    console.log("editStudent",id);
    window.location.href=`../html/editStudent.html?id=${id}`
    
};


let Placed_std =document.getElementById("placed_students");
 
Placed_std.addEventListener("click",()=>{
    let filterPlaced = allstudents.filter((ele)=>{
        return ele.placement_status==="Placed";
    });
    // console.log(filterPlaced);
    displayStudents(filterPlaced);
    
});


let all_std =document.getElementById("all_students");

all_std.addEventListener("click",()=>{
    displayStudents(allstudents)
});


let not_placed = document.getElementById("not_placed_students");
 not_placed.addEventListener("click",()=>{
    let filterNotPlaced = allstudents.filter((ele)=>{
        return ele.placement_status==="Not Placed";
    });
    displayStudents(filterNotPlaced);
 });


 let newStudent=document.getElementById("add_students");

 newStudent.addEventListener("click",()=>{
    window.location.href="../Html/Add student.html";
 });

