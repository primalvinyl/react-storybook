import React from 'react';
import './Input.css';

const Input = React.forwardRef<HTMLInputElement, InputProps>(({
    id,
    type = 'text',
    className = undefined,
    label = undefined,
    placeholder = undefined,
    disabled = false,
    required = false,
    isSubmitting = false,
    errors = {},
    touched = {},
    onChange,
    onBlur,
    handleChange,
    handleBlur,
    ...props
}, ref) => {

    return (
        <div className={['inputRoot', className].join(' ')}>
            <div className="inputWrapper">
                {label && (
                    <label htmlFor={id} className={'inputLabel ' + (disabled && 'inputLabelDisabled')}>
                        {label} {(required) && (
                            <span className="inputRequired"> *</span>
                        )}
                    </label>
                )}
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder && (placeholder + ((required && !label) && ' *' || ''))}
                    disabled={disabled}
                    required={required}
                    onChange={(event) => {
                        handleChange && handleChange(event);
                        onChange && onChange(event);
                    }}
                    onBlur={(event) => {
                        handleBlur && handleBlur(event);
                        onBlur && onBlur(event);
                    }}
                    ref={ref}
                    {...props}
                />
                {((errors && touched && errors[id] && touched[id])) && (
                    <div className="inputError">
                        {errors[id]}
                    </div>
                )}
            </div>
        </div>
    );
});

type InputProps = {
    id: string;
    type?: string;
    className?: string;
    label?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    isSubmitting?: boolean;
    errors?: Record<string, string>;
    touched?: Record<string, string>;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
    [key: string]: any;
};

export default Input;
