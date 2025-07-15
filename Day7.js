const users = [
      { name: "Payanshi Jain", branch: "AIDS", email: "payanshi@college.com", year: 2027 },
      { name: "Akshita Jain", branch: "CSE", email: "Akshita@college.com", year: 2027 },
      { name: "Ravi Mehta", branch: "ME", email: "ravi@college.com", year: 2024 },
      { name: "Sneha Roy", branch: "CSE", email: "sneha@college.com", year: 2021 },
      { name: "Karan Patel", branch: "EEE", email: "karan@college.com", year: 2023 },
      { name: "Divya Jain", branch: "CIVIL", email: "divya@college.com", year: 2022 }
    ];

    const userContainer = document.getElementById("userContainer");
    const searchInput = document.getElementById("searchInput");
    const sortBtn = document.getElementById("sortBtn");

    let sortedAsc = true;

    function displayUsers(filteredUsers) {
      userContainer.innerHTML = "";
      filteredUsers.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
          <h3>${user.name}</h3>
          <p><strong>Branch:</strong> ${user.branch}</p>
          <p><strong>Year:</strong> ${user.year}</p>
          <p><strong>Email:</strong> ${user.email}</p>
        `;
        userContainer.appendChild(card);
      });
    }

    function filterUsers() {
      const query = searchInput.value.toLowerCase();
      const filtered = users.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.branch.toLowerCase().includes(query)
      );
      displayUsers(filtered);
    }

    function sortUsers() {
      users.sort((a, b) => sortedAsc ? a.year - b.year : b.year - a.year);
      sortedAsc = !sortedAsc;
      sortBtn.textContent = `Sort by Year ${sortedAsc ? "↑" : "↓"}`;
      filterUsers(); 
    }

    displayUsers(users);

    searchInput.addEventListener("input", filterUsers);
    sortBtn.addEventListener("click", sortUsers);
