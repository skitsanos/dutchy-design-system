(function () {
  const demoForm = document.getElementById('validation-demo');
  if (!demoForm) return;

  DutchyForm.create(demoForm, {
    rules: {
      fullname: [
        { required: true, message: 'Full name is required' },
        { min: 2, message: 'Must be at least 2 characters' },
      ],
      email: [
        { required: true, message: 'Email is required' },
        { type: 'email', message: 'Enter a valid email address' },
      ],
      password: [
        { required: true, message: 'Password is required' },
        { min: 8, message: 'At least 8 characters' },
        { pattern: /[A-Z]/, message: 'Include an uppercase letter' },
        { pattern: /[0-9]/, message: 'Include a number' },
      ],
      website: [
        { type: 'url', message: 'Enter a valid URL (e.g. https://example.com)' },
      ],
      bio: [
        { max: 200, message: 'Bio must be 200 characters or fewer' },
      ],
    },
    validateTrigger: 'onBlur',
  });
})();
