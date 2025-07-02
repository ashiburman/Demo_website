function showTab(tabId) {
    const tabs = document.querySelectorAll(".tab");
    tabs.forEach(tab => tab.classList.remove("active"));
    document.getElementById(tabId).classList.add("active");
  }
  
  // Greeting based on time
  function showGreeting() {
    const hour = new Date().getHours();
    let greeting = "Welcome!";
    if (hour < 12) greeting = "Good Morning! 🌞";
    else if (hour < 18) greeting = "Good Afternoon! ☀️";
    else greeting = "Good Evening! 🌙";
  
    alert(greeting + " Let's work on gaining healthy weight!");
  }
  
  // Calorie Tip Popup
  function showCalorieTip() {
    const tips = [
      "Add peanut butter to your milkshakes.",
      "Have a banana + milk combo before workout.",
      "Drink a smoothie within 30 mins after exercise.",
      "Use ghee or butter in your lunch and dinner.",
      "Snack on dry fruits 2-3 times a day."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    alert("💡 Tip: " + randomTip);
  }
  
  // Toggle Dark Mode
  function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("theme-btn");
    if (document.body.classList.contains("dark-mode")) {
      btn.innerText = "☀️ Light Mode";
    } else {
      btn.innerText = "🌙 Dark Mode";
    }
  }
  
  // Run greeting on load
  window.onload = () => {
    showTab('exercises');
    showGreeting();
  };