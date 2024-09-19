console.log('Script is loaded');

const greetButton = document.getElementById('greetButton');
if (greetButton) {
  greetButton.addEventListener('click', function() {
    console.log('Button clicked');
    document.getElementById('greetMessage').innerText = 'Привет, я Катя!';
  });
} else {
  console.error('Button not found');
}
