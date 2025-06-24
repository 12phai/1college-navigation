document.addEventListener("DOMContentLoaded", function () {
    // Create the Toggle Button (optional: only on main pages)
    const toggleBtn = document.createElement("button");
    toggleBtn.id = "btnToggleDarkMode";
    toggleBtn.style.position = "absolute";
    toggleBtn.style.top = "10px";
    toggleBtn.style.right = "10px";
    toggleBtn.style.padding = "10px";
    toggleBtn.style.cursor = "pointer";
    document.body.appendChild(toggleBtn);

    // Detect current mode (system preference or saved setting)
    let darkModeEnabled = false;
    const savedMode = localStorage.getItem("dark-mode");

    if (savedMode === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeEnabled = true;
    } else if (savedMode === "disabled") {
        document.body.classList.remove("dark-mode");
        darkModeEnabled = false;
    } else {
        // No saved preference, use system preference
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.body.classList.add("dark-mode");
            darkModeEnabled = true;
        }
    }

    // Set initial button text
    if (darkModeEnabled) {
        toggleBtn.innerText = "Toggle Light Mode";
    } else {
        toggleBtn.innerText = "Toggle Dark Mode";
    }

    // Toggle logic
    toggleBtn.addEventListener("click", function () {
        if (document.body.classList.contains("dark-mode")) {
            document.body.classList.remove("dark-mode");
            localStorage.setItem("dark-mode", "disabled");
            toggleBtn.innerText = "Toggle Dark Mode";
        } else {
            document.body.classList.add("dark-mode");
            localStorage.setItem("dark-mode", "enabled");
            toggleBtn.innerText = "Toggle Light Mode";
        }
    });
});