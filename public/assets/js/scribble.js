document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-scribble]').forEach(container => {
    const canvas = container.querySelector('[data-scribble-canvas]');
    const placeholder = container.querySelector('[data-scribble-placeholder]');
    const clearBtn = container.querySelector('[data-scribble-clear]');
    const hiddenInput = container.querySelector('[data-scribble-value]');
    const preview = container.querySelector('[data-scribble-preview]');
    const previewContainer = container.querySelector('[data-scribble-preview-container]');

    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let isDrawing = false;
    let hasContent = false;

    // Config from data attributes
    ctx.strokeStyle = canvas.dataset.scribbleColor || 'hsl(25 20% 6%)';
    ctx.lineWidth = parseFloat(canvas.dataset.scribbleLineWidth) || 2;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    function getPosition(e) {
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      if (e.touches && e.touches.length > 0) {
        return {
          x: (e.touches[0].clientX - rect.left) * scaleX,
          y: (e.touches[0].clientY - rect.top) * scaleY,
        };
      }

      return {
        x: (e.clientX - rect.left) * scaleX,
        y: (e.clientY - rect.top) * scaleY,
      };
    }

    function startDrawing(e) {
      isDrawing = true;
      const pos = getPosition(e);
      ctx.beginPath();
      ctx.moveTo(pos.x, pos.y);

      if (!hasContent && placeholder) {
        placeholder.style.display = 'none';
        hasContent = true;
      }
    }

    function draw(e) {
      if (!isDrawing) return;
      const pos = getPosition(e);
      ctx.lineTo(pos.x, pos.y);
      ctx.stroke();
    }

    function stopDrawing() {
      if (!isDrawing) return;
      isDrawing = false;

      if (!hasContent) return;

      const dataUrl = canvas.toDataURL('image/png');

      if (hiddenInput) {
        hiddenInput.value = dataUrl;
      }

      if (preview) {
        preview.src = dataUrl;
        if (previewContainer) {
          previewContainer.style.display = '';
        }
      }

      container.dispatchEvent(
        new CustomEvent('scribble:change', {
          bubbles: true,
          detail: { dataUrl },
        }),
      );
    }

    function clearCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      hasContent = false;

      if (placeholder) {
        placeholder.style.display = '';
      }

      if (hiddenInput) {
        hiddenInput.value = '';
      }

      if (preview) {
        preview.src = '';
        if (previewContainer) {
          previewContainer.style.display = 'none';
        }
      }

      container.dispatchEvent(
        new CustomEvent('scribble:clear', { bubbles: true }),
      );
    }

    // Mouse events
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseleave', stopDrawing);

    // Touch events
    canvas.addEventListener('touchstart', e => {
      e.preventDefault();
      startDrawing(e);
    }, { passive: false });

    canvas.addEventListener('touchmove', e => {
      e.preventDefault();
      draw(e);
    }, { passive: false });

    canvas.addEventListener('touchend', e => {
      e.preventDefault();
      stopDrawing();
    }, { passive: false });

    // Clear button
    if (clearBtn) {
      clearBtn.addEventListener('click', clearCanvas);
    }
  });
});
