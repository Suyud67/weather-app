const setAttribute = (newAttr) => {
  document.documentElement.setAttribute('data-theme', newAttr);
  localStorage.setItem('weatherTheme', newAttr);
};

export default setAttribute;
