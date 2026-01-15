let index = async () => {
    let stds = await getStudent();
    let clgs = await getCollege();
    let coms = await getCompany();
    let jobs = await getjob();

    document.getElementById("Students").innerHTML =
        `<h2>Total Students: ${stds.length}</h2>`;

    document.getElementById("Colleges").innerHTML =
        `<h2>Total Colleges: ${clgs.length}</h2>`;

    document.getElementById("Companies").innerHTML =
        `<h2>Total Companies: ${coms.length}</h2>`;

    document.getElementById("Jobs").innerHTML =
        `<h2>Total Jobs: ${jobs.length}</h2>`;

    // Navigation on card click
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            window.location.href = card.dataset.link;
        });
    });
};

index();
