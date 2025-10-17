// Update ALL time elements (fix for multiple cards)
function updateTime() {
  const timeElements = document.querySelectorAll(
    '[data-testid="test-user-time"]'
  );
  const currentTime = Date.now();

  // Update each time element
  timeElements.forEach((element) => {
    element.textContent = currentTime;
  });
}

// Initial time update
updateTime();

// Update time every 100ms for accuracy
setInterval(updateTime, 100);
