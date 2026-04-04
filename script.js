function copyInstall() {
  navigator.clipboard.writeText('pip install agentdid').then(function () {
    var hint = document.querySelector('.copy-hint');
    hint.textContent = 'copied!';
    hint.style.color = '#4ADE80';
    setTimeout(function () {
      hint.textContent = 'click to copy';
      hint.style.color = '';
    }, 2000);
  });
}

document.querySelector('.install-pill').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') copyInstall();
});
