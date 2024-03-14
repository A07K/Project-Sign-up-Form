document.addEventListener('DOMContentLoaded', () => {
  const inputFields = document.querySelectorAll('input');

  inputFields.forEach(inputField => {
    inputField.addEventListener('input', () => {
      inputField.style.borderColor = ''; // Reset the border color
      
      // Add validation for first name and last name to disallow numbers
      if (inputField.id === 'first-name' || inputField.id === 'last-name') {
        const value = inputField.value;
        const containsNumber = /\d/.test(value); // Check if input contains numbers
        
        if (containsNumber) {
          inputField.style.borderColor = 'red'; // Set border color to red
        }
      }

      // Add focus event to change border color to blue
      inputField.addEventListener('focus', () => {
        inputField.style.borderColor = 'blue';
      });

      // Add validation for input field validity
      if (inputField.validity.valid) {
        inputField.style.borderColor = 'green';
      } else {
        inputField.style.borderColor = 'red';
      }
    });

    // Add custom validation for email input
    if (inputField.type === 'email') {
      inputField.addEventListener('blur', () => {
        const email = inputField.value;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(email)) {
          inputField.style.borderColor = 'red';
        } else {
          inputField.style.borderColor = ''; // Reset the border color
        }
      });
    }
  });
});
