async function fetchRandomUser() {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();
  const user = data.results[0];

  document.querySelector('.user').innerHTML = `
      <img src="${user.picture.large}" alt="User Picture" />
      <h2>${user.name.first} ${user.name.last}</h2>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Location:</strong> ${user.location.city}, ${user.location.country}</p>
      <p><strong>Phone:</strong> ${user.phone}</p>
      <p><strong>Username:</strong> ${user.login.username}</p>
      <p><strong>Age:</strong> ${user.dob.age}</p>
    `;
}
document.querySelector('.get').addEventListener('click', fetchRandomUser);

// Initial fetch to display a random user on page load
// If you want to fetch a random user when the page loads, uncomment the line below:

//  fetchRandomUser();
