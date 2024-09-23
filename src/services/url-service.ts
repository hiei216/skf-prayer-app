export const setNewUrlWithParam = (paramName: string, paramValue: string) => {
  const newUrl = new URL(window.location.href);
  newUrl.searchParams.set(paramName, paramValue);

  return window.history.replaceState({}, document.title, newUrl.href);
};