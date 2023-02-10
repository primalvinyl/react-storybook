import React from 'react';
import './Button.css';

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    children = 'Submit',
    type = 'submit',
    outline = false,
    className = undefined,
    ...props
}, ref) => (
    <div className={['buttonRoot', className].join(' ')}>
        <div className="buttonWrapper">
            <button
                type={type}
                className={outline && 'buttonOutline' || 'buttonSolid'}
                ref={ref}
                {...props}
            >
                {children}
            </button>
        </div>
    </div>
));

type ButtonProps = {
    children?: any;
    type?: 'submit' | 'button' | 'reset';
    outline?: boolean;
    className?: string;
    [key: string]: any;
};

export default Button;
