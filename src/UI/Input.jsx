import React, { useState, useEffect } from "react";
import { validateField } from "../Utils/Validation";

const Input = ({
    name,
    label,
    type = "text",
    value,
    onChange,
    placeholder,
    required = false,
    icon: Icon,
    validation,
    showPasswordStrength = false,
    className = "",
    disabled = false,
    maxLength,
    ...props
}) => {
    const [errors, setErrors] = useState([]);
    const [touched, setTouched] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    // Real-time validation
    useEffect(() => {
        if (touched && validation) {
            const fieldErrors = validateField(name, value, validation);
            setErrors(fieldErrors);
        }
    }, [value, touched, name, validation]);

    const handleBlur = () => {
        setTouched(true);
        if (validation) {
            const fieldErrors = validateField(name, value, validation);
            setErrors(fieldErrors);
        }
    };

    const handleChange = (e) => {
        onChange(e);
        if (touched) {
            // Clear errors on change if field was previously touched
            const fieldErrors = validateField(name, e.target.value, validation);
            setErrors(fieldErrors);
        }
    };

    const hasErrors = errors.length > 0;
    const isValid = touched && !hasErrors && value;

    return (
        <div className={`space-y-2 ${className}`}>
            {label && (
                <label
                    htmlFor={name}
                    className="block text-sm font-medium text-base-content/80"
                >
                    {label}
                    {required && <span className="text-error ml-1">*</span>}
                </label>
            )}

            <div className="relative">
                {Icon && (
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Icon
                            className={`h-5 w-5 ${hasErrors ? "text-error" : "text-base-content/60"
                                }`}
                        />
                    </span>
                )}

                <input
                    id={name}
                    name={name}
                    type={type === "password" && showPassword ? "text" : type}
                    value={value}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    disabled={disabled}
                    className={`
            w-full px-3 py-2.5 input input-bordered bg-base-200/50 border-base-300 text-base-content 
            focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-200
            ${Icon ? "pl-10" : ""}
            ${type === "password" ? "pr-10" : ""}
            ${hasErrors
                            ? "border-error focus:border-error focus:ring-error/20"
                            : ""
                        }
            ${isValid
                            ? "border-success focus:border-success focus:ring-success/20"
                            : ""
                        }
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
                    {...props}
                />

                {type === "password" && (
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    >
                        {showPassword ? (
                            <svg
                                className="h-5 w-5 text-base-content/60"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="h-5 w-5 text-base-content/60"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                />
                            </svg>
                        )}
                    </button>
                )}

                {/* Validation icon */}
                {touched && (
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                        {hasErrors ? (
                            <svg
                                className="h-5 w-5 text-error"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                        ) : isValid ? (
                            <svg
                                className="h-5 w-5 text-success"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        ) : null}
                    </div>
                )}
            </div>

            {/* Character count */}
            {maxLength && (
                <div className="text-xs text-base-content/60 text-right">
                    {value?.length || 0}/{maxLength}
                </div>
            )}

            {/* Error messages */}
            {touched && hasErrors && (
                <div className="space-y-1">
                    {errors.map((error, index) => (
                        <p
                            key={index}
                            className="text-sm text-error flex items-center gap-1"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                            </svg>
                            {error}
                        </p>
                    ))}
                </div>
            )}

            {/* Success message */}
            {touched && isValid && !hasErrors && (
                <p className="text-sm text-success flex items-center gap-1">
                    <svg
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    Looks good!
                </p>
            )}
        </div>
    );
};

export default Input;
