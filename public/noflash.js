(function () {
  // Change these if you use something different in your hook.
  var storageKey = "theme";
  var classNameDark = "dark";

  function setClassOnDocumentBody(darkMode) {
    darkMode
      ? document.body.classList.add(classNameDark)
      : document.body.classList.remove(classNameDark);
  }

  //   var preferDarkQuery = '(prefers-color-scheme: dark)';
  //   var mql = window.matchMedia(preferDarkQuery);
  //   var supportsColorSchemeQuery = mql.media === preferDarkQuery;
  var localStorageIsDark = null;
  try {
    localStorageIsDark = !!localStorage.getItem(storageKey);
  } catch (err) {}
  var localStorageExists = localStorageIsDark !== null;
  if (localStorageExists) {
    localStorageIsDark = localStorageIsDark;
  }

  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageIsDark);
  }
  //   else if (supportsColorSchemeQuery) {
  //       // source of truth from system
  //       setClassOnDocumentBody(mql.matches);
  //       localStorage.setItem(storageKey, mql.matches);
  //   }
  else {
    // source of truth from document.body
    var isDarkMode = document.body.classList.contains(classNameDark);
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
  }
})();
