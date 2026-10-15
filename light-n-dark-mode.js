/******************************************************************************
*                                                                             *
*   Name:     light-n-dark-mode.js                                            *
*   Purpose:  To pull from user's browser settings to set an initial color    *
*             chemes , to create a button to toggle between light and dark    *
*             color schemes, and to remember the users preference as they     *
*             navigate the website                                            *
*   Author:   Seth Spickard                                                   *
*                                                                             *
******************************************************************************/

// === SETTING AND SAVING THE PREFERRED STARTING SCHEME ===
// Checks the front-end local storage to see if a theme preference has been set
if (!localStorage.getItem("themePreference")) {
  
  // If no theme preference is set and if the browser settings are set to prefer 
  // dark mode, set the website to dark mode and save the theme preference
  if (window.matchMedia?.("(prefers-color-scheme: dark)").matches) {
    document.documentElement.dataset["theme"] = "dark";
    localStorage.setItem("themePreference", "dark");
  } 
  // If no theme preference is set and if the browser settings are set to prefer 
  // light mode or have no prefenence, set the website to light mode and save 
  // the website preference
  else {
    document.documentElement.dataset['theme'] = 'light';
    localStorage.setItem("themePreference", "light");
  }
} 
// If a theme preference has been set, set the website to whichever mode the 
// user prefers
else {
  document.documentElement.dataset["theme"] = localStorage.getItem("themePreference");
}


// === SETTING THE CORRECT TOGGLE ICON ===
// Once the icon has been loaded on the webpage...
window.addEventListener("DOMContentLoaded", () => {
  // Set the icon to the moon svg if in light mode
  if (document.documentElement.dataset["theme"] === "light") {
    document.getElementById('themePreferenceIcon').src='./images/moon-fill.svg';
  } 
  // Or a sun svg if in dark mode
  else {
    document.getElementById('themePreferenceIcon').src='./images/sun-fill.svg';
  }
})


// === TOGGLE FUNCTION ===
function togglePreferredTheme() {
  // If the website was originally in light mode, switch the color scheme to dark
  // mode, save the new preference, and change the icon to a sun
  if (document.documentElement.dataset["theme"] === "light") {
    document.documentElement.dataset['theme'] = "dark";
    localStorage.setItem("themePreference", "dark");
    document.getElementById('themePreferenceIcon').src='./images/sun-fill.svg';
    return;
  }
  // If the website was originally in dark mode, switch the color scheme to light
  // mode, save the new preference, and change the icon to a moon
  document.documentElement.dataset["theme"] = "light";
  localStorage.setItem("themePreference", "light");
  document.getElementById('themePreferenceIcon').src='./images/moon-fill.svg';
}