import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
    test('renders', () => {
        render(<Input id="test" />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    test('has label', () => {
        render(<Input id="test" label="label" />);
        expect(screen.getByLabelText('label')).toBeInTheDocument();
    });

    test('is disabled', () => {
        render(<Input id="test" disabled />);
        expect(screen.getByRole('textbox')).toBeDisabled();
    });

    test('is required', () => {
        render(<Input id="test" required />);
        expect(screen.getByRole('textbox')).toBeRequired();
    });

    test('has default value', () => {
        render(<Input id="test" defaultValue="default" />);
        expect(screen.getByDisplayValue('default')).toBeInTheDocument();
    });

    test('has placeholder', () => {
        render(<Input id="test" placeholder="place" />);
        expect(screen.getByPlaceholderText('place')).toBeInTheDocument();
    });

    test('allows text entry', async () => {
        render(<Input id="test" />);
        const textInput = screen.getByRole('textbox');
        await userEvent.type(textInput, 'test');
        expect(textInput).toHaveValue('test');
    });
});
