// Update time in milliseconds
function updateTime() {
  const timeElement = document.querySelector('[data-testid="test-user-time"]');
  if (timeElement) {
    timeElement.textContent = Date.now();
  }
}

// Initial time update
updateTime();

// Update time every 100ms for accuracy
setInterval(updateTime, 100);
