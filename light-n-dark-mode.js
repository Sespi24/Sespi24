if (!localStorage.getItem("themePreference")) {
  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    document.documentElement.dataset["theme"] = "dark";
    localStorage.setItem("themePreference", "dark");
  } else {
    document.documentElement.dataset['theme'] = 'light';
    localStorage.setItem("themePreference", "light");
  }
} else
  document.documentElement.dataset["theme"] = localStorage.getItem("themePreference");



// window
//   .matchMedia("(prefers-color-scheme: dark)")
//   .addEventListener("change", (event) => {
//     document.documentElement.dataset["theme"] = event.matches
//       ? "dark"
//       : "light";
//   });

function togglePreferredTheme() {
  if (document.documentElement.dataset["theme"] === "light") {
    document.documentElement.dataset['theme'] = "dark";
    localStorage.setItem("themePreference", "dark");
    return;
  }

  document.documentElement.dataset["theme"] = "light";
  localStorage.setItem("themePreference", "light");
}