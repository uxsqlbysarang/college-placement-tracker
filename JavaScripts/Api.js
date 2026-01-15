
let baseURL = "https://placementstracker-4.onrender.com/api";

let getStudent = async () => {
    let res = await fetch(`${baseURL}/students`);
    return res.json();
};

let getCollege = async () => {
    let res = await fetch(`${baseURL}/colleges`);
    return res.json();
};

let getCompany = async () => {
    let res = await fetch(`${baseURL}/companies`);
    return res.json();
};

let getjob = async () => {
    let res = await fetch(`${baseURL}/job-roles`);
    return res.json();
};






