import React from 'react';
import './Select.css';

const Select = React.forwardRef<HTMLSelectElement, SelectType>(
    ({
        id,
        options = [],
        className = undefined,
        label = undefined,
        errors = {},
        touched = {},
        required = false,
        disabled = false,
        onChange,
        onBlur,
        handleChange,
        handleBlur,
        ...props
    }, ref): React.ReactElement => {

        return (
            <div className={['selectRoot', className].join(' ')}>
                <div className="selectWrapper">
                    {label && (
                        <label htmlFor={id} className={'selectLabel ' + (disabled && 'selectLabelDisabled')}>
                            {label} {(required) && (
                                <span className="selectRequired"> *</span>
                            )}
                        </label>
                    )}
                    <select
                        id={id}
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
                    >
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.display}
                            </option>
                        ))}
                    </select>
                    {((errors && touched && errors[id] && touched[id])) && (
                        <div className="selectError">
                            {errors[id]}
                        </div>
                    )}
                </div>
            </div>
        );
    }
);

type SelectType = {
    id: string;
    options?: { value: string; display: string }[];
    defaultValue?: string;
    className?: string;
    label?: string;
    disabled?: boolean;
    required?: boolean;
    errors?: Record<string, string>;
    touched?: Record<string, string>;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    handleBlur?: (event: React.FocusEvent<HTMLSelectElement>) => void;
    [key: string]: any;
};

export default Select;
