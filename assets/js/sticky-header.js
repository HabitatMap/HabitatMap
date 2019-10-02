window.addEventListener('scroll', () => {
  document.getElementById('js-header').classList[window.scrollY > 100 ? 'add' : 'remove']('sticky');
});
