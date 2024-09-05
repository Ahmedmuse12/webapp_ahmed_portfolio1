document.addEventListener('DOMContentLoaded', function() {
    const projectList = document.getElementById('project-list');
    const projectForm = document.getElementById('project-form');

    // Funksjon for å hente prosjekter fra JSON-filen
    function fetchProjects() {
        fetch('projects.json')
            .then(response => response.json())
            .then(data => {
                projectList.innerHTML = ''; // Tømmer listen før ny data legges til
                data.forEach(project => {
                    const li = document.createElement('li');
                    li.textContent = `${project.name}`;
                    projectList.appendChild(li);
                });
            })
            .catch(error => console.error('Feil ved henting av prosjekter:', error));
    }

    // Funksjon for å legge til et nytt prosjekt
    function addProject(event) {
        event.preventDefault();

        const newProject = {
            name: document.getElementById('project-name').value,
            description: document.getElementById('description').value,
            startDate: document.getElementById('start-date').value,
            endDate: document.getElementById('end-date').value
        };

        // Legg til det nye prosjektet i listen
        const li = document.createElement('li');
        li.textContent = `${newProject.name}`;
        projectList.appendChild(li);

        // Nullstill skjemaet
        projectForm.reset();
    }

    // Laster inn prosjektene når siden lastes
    fetchProjects();

    // Legg til nytt prosjekt ved innsending av skjemaet
    projectForm.addEventListener('submit', addProject);
});