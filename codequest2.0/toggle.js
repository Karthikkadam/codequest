document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('mode-toggle');
  
    // Check system preference and set initial mode
    const currentMode = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light-mode' : 'dark-mode';
    document.body.classList.add(currentMode);
  
    // Load user preference if available
    const savedMode = localStorage.getItem('mode');
    if (savedMode) {
      document.body.classList.remove('light-mode', 'dark-mode');
      document.body.classList.add(savedMode);
      toggleSwitch.checked = savedMode === 'light-mode';
    }
  
    // Handle mode toggle
    toggleSwitch.addEventListener('change', () => {
      const newMode = toggleSwitch.checked ? 'light-mode' : 'dark-mode';
      document.body.classList.remove('light-mode', 'dark-mode');
      document.body.classList.add(newMode);
      localStorage.setItem('mode', newMode);
    });
  });
  