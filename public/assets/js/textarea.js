(function () {
  document.querySelectorAll('[data-textarea="counted"]').forEach(function (textarea) {
    var counter = textarea.closest('.space-y-2')?.querySelector('[data-textarea-count]');
    if (!counter) return;

    var maxLen = textarea.maxLength > 0 ? textarea.maxLength : null;

    function update() {
      var len = textarea.value.length;
      counter.textContent = maxLen ? len + ' / ' + maxLen : String(len);

      if (maxLen && len >= maxLen) {
        counter.classList.add('text-destructive');
        counter.classList.remove('text-muted-foreground');
      } else {
        counter.classList.remove('text-destructive');
        counter.classList.add('text-muted-foreground');
      }
    }

    textarea.addEventListener('input', update);
    update();
  });
})();
