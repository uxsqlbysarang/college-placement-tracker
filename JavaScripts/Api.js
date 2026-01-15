let baseURL = "https://placementstracker-4.onrender.com/api"
let getStudent = async () =>{
    return fetch(`${baseURL}/students`).then((res)=>{
        return res.json()
    })
}


let getCollege = async () =>{
    return fetch(`${baseURL}/colleges`).then((res)=>{
        return res.json()
    })
}

let getCompany = async () =>{
    return fetch(`${baseURL}/companies`).then((res)=>{
        return res.json()
    })
}

let getjob = async () =>{
    return fetch(`${baseURL}/job-roles`).then((res)=>{
        return res.json()
    })
}