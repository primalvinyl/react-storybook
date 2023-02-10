import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import Select from './Select';

describe('Select Component', () => {
    const options = [
        { value: 'testValue1', display: 'testDisplay1' },
        { value: 'testValue2', display: 'testDisplay2' },
    ];

    test('renders', () => {
        render(<Select id="test" options={options} />);
        expect(screen.getByRole('combobox')).toBeInTheDocument();
    });

    test('has label', () => {
        render(<Select id="test" options={options} label="label" />);
        expect(screen.getByLabelText('label')).toBeInTheDocument();
    });

    test('is disabled', () => {
        render(<Select id="test" options={options} disabled />);
        expect(screen.getByRole('combobox')).toBeDisabled();
    });

    test('is required', () => {
        render(<Select id="test" options={options} required />);
        expect(screen.getByRole('combobox')).toBeRequired();
    });

    test('has default value', () => {
        render(
            <Select id="test" options={options} defaultValue="testValue1" />
        );
        expect(screen.getByRole('combobox')).toHaveDisplayValue('testDisplay1');
    });

    test('allows selection', async () => {
        render(<Select id="test" options={options} />);
        const textSelect = screen.getByRole('combobox');
        await userEvent.selectOptions(textSelect, 'testDisplay2');
        expect(textSelect).toHaveValue('testValue2');
    });
});
