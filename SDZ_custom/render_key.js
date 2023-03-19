document.addEventListener('keydown', function(event) {
  if (event.code === 'F4') {
    var button = document.querySelector('.comfy-queue-btn');
    if (button) {
      button.click();
      setTimeout(function() {
        console.log('Render Progress');
      }, 500);
    }
  }
});
