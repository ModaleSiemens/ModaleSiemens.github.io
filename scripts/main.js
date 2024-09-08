const repos_div = document.getElementById("repos");

fetch(`https://api.github.com/users/ModaleSiemens/repos`)
    .then(response => response.json())
    .then(repos => {
            if(repos.length === 0) 
            {
                repos_div.innerHTML = "No repository found."
            }
            else 
            {
                const repos_list = document.createElement("ul");
                repos_div.appendChild(repos_list);

                repos.forEach(repo => {
                    const list_item = document.createElement("li");
                    list_item.innerHTML = `<a class="repo-name" href="${repo.html_url}" target="_blank">${repo.name}</a>: ${repo.description || 'No description'}`;
                    repos_list.appendChild(list_item);
                });
            }
        }
    )
    .catch(error => {
        repos_div.innerHTML = `Couldn't retrieve repos (error code: ${error})!`;
    }
);

