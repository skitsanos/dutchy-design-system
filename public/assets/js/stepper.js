(function() {
  const steppers = document.querySelectorAll('[data-stepper]');

  steppers.forEach((stepper) => {
    let currentStep = parseInt(stepper.dataset.currentStep, 10) || 1;
    const stepContents = document.querySelectorAll('[data-step-content]');
    const stepCircles = stepper.querySelectorAll('[data-step]');

    function updateStepper() {
      // Update step circles
      stepCircles.forEach((circle) => {
        const stepIndex = parseInt(circle.dataset.step, 10);
        const stepNum = stepIndex + 1;
        const circleEl = circle.querySelector('[data-step-circle]');
        const labelEl = circle.querySelector('span');
        const lineEl = circle.querySelector('.absolute');

        if (!circleEl) return;

        if (stepNum < currentStep) {
          // Completed
          circleEl.className = 'w-10 h-10 flex items-center justify-center font-bold text-sm bg-primary text-primary-foreground';
          circleEl.innerHTML = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>';
          if (labelEl) labelEl.className = 'mt-2 text-xs font-bold uppercase tracking-wider text-center text-foreground';
        } else if (stepNum === currentStep) {
          // Current
          circleEl.className = 'w-10 h-10 flex items-center justify-center font-bold text-sm bg-primary text-primary-foreground';
          circleEl.textContent = stepNum;
          if (labelEl) labelEl.className = 'mt-2 text-xs font-bold uppercase tracking-wider text-center text-foreground';
        } else {
          // Upcoming
          circleEl.className = 'w-10 h-10 flex items-center justify-center font-bold text-sm bg-muted text-muted-foreground';
          circleEl.textContent = stepNum;
          if (labelEl) labelEl.className = 'mt-2 text-xs font-bold uppercase tracking-wider text-center text-muted-foreground';
        }

        // Update connecting lines
        if (lineEl) {
          lineEl.className = lineEl.className.replace(/bg-\S+/, '');
          if (stepNum <= currentStep) {
            lineEl.classList.add('bg-primary');
          } else {
            lineEl.classList.add('bg-border');
          }
        }
      });

      // Show/hide step contents
      stepContents.forEach((content) => {
        const contentStep = parseInt(content.dataset.stepContent, 10);
        content.classList.toggle('hidden', contentStep !== currentStep);
      });

      // Update stepper data attribute
      stepper.dataset.currentStep = currentStep;
    }

    // Next step buttons
    document.querySelectorAll('[data-step-next]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const maxStep = stepCircles.length;
        if (currentStep < maxStep) {
          currentStep++;
          updateStepper();
        }
      });
    });

    // Previous step buttons
    document.querySelectorAll('[data-step-prev]').forEach((btn) => {
      btn.addEventListener('click', () => {
        if (currentStep > 1) {
          currentStep--;
          updateStepper();
        }
      });
    });

    // Initialize
    updateStepper();
  });
})();
