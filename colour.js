const entryButton = document.getElementById('entryButton');
let clickCount = 0;

entryButton.addEventListener('click', function() {
  clickCount++;
  if (clickCount === 1) {
    // Generate random background color
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    
    // Get the current time
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    
    // Determine the greeting based on the current hour
    let greeting;
    if (currentHour < 12) {
      greeting = 'Good Morning';
    } else if (currentHour < 18) {
      greeting = 'Good Afternoon';
    } else if (currentHour < 22) {
      greeting = 'Good Evening';
    } else {
      greeting = 'Good Night';
    }
    alert(greeting);
  } else if (clickCount === 2) {
    window.location.href = 'calculator.html'; // Redirect to calculator page
  }
});

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
