(function () {
  document.querySelectorAll('[data-password-toggle]').forEach(function (wrapper) {
    var btn = wrapper.querySelector('[data-toggle-btn]');
    var input = wrapper.querySelector('input[type="password"], input[type="text"]');
    if (!btn || !input) return;

    // SVG paths
    var eyePath = ['M15 12a3 3 0 11-6 0 3 3 0 016 0z', 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'];
    var eyeOffPath = ['M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21'];

    function updateIcon(paths) {
      var svg = btn.querySelector('svg');
      if (!svg) return;
      svg.innerHTML = '';
      paths.forEach(function (d) {
        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('stroke-linejoin', 'round');
        path.setAttribute('stroke-width', '2');
        path.setAttribute('d', d);
        svg.appendChild(path);
      });
    }

    btn.addEventListener('click', function () {
      var isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      updateIcon(isPassword ? eyeOffPath : eyePath);
      btn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
      input.focus();
    });
  });
})();
