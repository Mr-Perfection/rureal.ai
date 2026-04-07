// Copy install command
function copyInstall(el) {
  navigator.clipboard.writeText('pip install agentdid').then(function () {
    el.classList.add('copied');
    var icon = el.querySelector('.copy-icon');
    // Swap to checkmark
    icon.innerHTML = '<polyline points="20 6 9 17 4 12"/>';
    setTimeout(function () {
      el.classList.remove('copied');
      icon.innerHTML = '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>';
    }, 2000);
  });
}

// Keyboard support for install pill
document.querySelector('.install-pill').addEventListener('keydown', function (e) {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    copyInstall(this);
  }
});

// Scroll-triggered fade-in
(function () {
  var targets = document.querySelectorAll(
    '.feature-card, .step, .trust-card, .oss-inner, .terminal, .badge'
  );

  targets.forEach(function (el) {
    el.classList.add('fade-in');
  });

  if (!window.IntersectionObserver) {
    targets.forEach(function (el) { el.classList.add('visible'); });
    return;
  }

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  targets.forEach(function (el) {
    observer.observe(el);
  });
})();
