const socket = window.io('http://localhost:5000');

socket.on('pong', (message) => console.log(message));

socket.on('updateLikes', (likes) => {
  console.log(`Likes: ${likes}`);
  const currentLikes = document.getElementById('currentLikes');
  currentLikes.innerText = likes;
});

socket.on('updateStars', (stars) => {
  console.log(`Stars: ${stars}`);
  const currentStars = document.getElementById('currentStars');
  currentStars.innerText = stars; 
});

const likePost = () => {
  const likeIcon = document.getElementById('likeIcon');
  likeIcon.addEventListener('click', () => {
    socket.emit('likePost');
    console.log('Clicou em Like');
  });
};

const favoritePOst = () => {
  const starIcon = document.getElementById('starIcon');
  starIcon.addEventListener('click', () => {
    socket.emit('starPost');
    console.log('Clicou em Star');
  });
};

window.onload = () => {
  likePost();
  favoritePOst();
};
