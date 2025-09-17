// Form validation utilities with real-time feedback
export const validationRules = {
  email: {
    required: "Email is required",
    pattern: {
      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      message: "Please enter a valid email address",
    },
  },
  password: {
    required: "Password is required",
    minLength: {
      value: 6,
      message: "Password must be at least 6 characters long",
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      message:
        "Password must contain at least one uppercase letter, one lowercase letter, and one number",
    },
  },
  name: {
    required: "Name is required",
    minLength: {
      value: 2,
      message: "Name must be at least 2 characters long",
    },
    maxLength: {
      value: 50,
      message: "Name cannot exceed 50 characters",
    },
  },
  url: {
    pattern: {
      value: /^https?:\/\/.+\..+/,
      message: "Please enter a valid URL starting with http:// or https://",
    },
  },
  price: {
    required: "Price is required",
    min: {
      value: 1,
      message: "Price must be greater than 0",
    },
    max: {
      value: 10000,
      message: "Price cannot exceed $10,000",
    },
  },
  description: {
    required: "Description is required",
    minLength: {
      value: 10,
      message: "Description must be at least 10 characters long",
    },
    maxLength: {
      value: 500,
      message: "Description cannot exceed 500 characters",
    },
  },
};

export const validateField = (name, value, rules = {}) => {
  const fieldRules = validationRules[name] || rules;
  const errors = [];

  // Required validation
  if (fieldRules.required && (!value || value.toString().trim() === "")) {
    return [fieldRules.required];
  }

  // Skip other validations if field is empty and not required
  if (!value || value.toString().trim() === "") {
    return [];
  }

  // Min length validation
  if (fieldRules.minLength && value.length < fieldRules.minLength.value) {
    errors.push(fieldRules.minLength.message);
  }

  // Max length validation
  if (fieldRules.maxLength && value.length > fieldRules.maxLength.value) {
    errors.push(fieldRules.maxLength.message);
  }

  // Pattern validation
  if (fieldRules.pattern && !fieldRules.pattern.value.test(value)) {
    errors.push(fieldRules.pattern.message);
  }

  // Min value validation
  if (fieldRules.min && Number(value) < fieldRules.min.value) {
    errors.push(fieldRules.min.message);
  }

  // Max value validation
  if (fieldRules.max && Number(value) > fieldRules.max.value) {
    errors.push(fieldRules.max.message);
  }

  return errors;
};

export const validateForm = (formData, fieldsToValidate = []) => {
  const errors = {};
  let isValid = true;

  fieldsToValidate.forEach((field) => {
    const fieldErrors = validateField(field, formData[field]);
    if (fieldErrors.length > 0) {
      errors[field] = fieldErrors;
      isValid = false;
    }
  });

  return { isValid, errors };
};

// Password strength checker
export const getPasswordStrength = (password) => {
  if (!password) return { score: 0, feedback: "" };

  let score = 0;
  const feedback = [];

  // Length check
  if (password.length >= 8) score += 1;
  else feedback.push("At least 8 characters");

  // Uppercase check
  if (/[A-Z]/.test(password)) score += 1;
  else feedback.push("One uppercase letter");

  // Lowercase check
  if (/[a-z]/.test(password)) score += 1;
  else feedback.push("One lowercase letter");

  // Number check
  if (/\d/.test(password)) score += 1;
  else feedback.push("One number");

  // Special character check
  if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) score += 1;
  else feedback.push("One special character");

  const strength = ["Very Weak", "Weak", "Fair", "Good", "Strong"][
    Math.min(score, 4)
  ];
  const color = ["#dc2626", "#f59e0b", "#eab308", "#22c55e", "#16a34a"][
    Math.min(score, 4)
  ];

  return {
    score,
    strength,
    color,
    feedback:
      feedback.length > 0 ? `Add: ${feedback.join(", ")}` : "Strong password!",
  };
};
