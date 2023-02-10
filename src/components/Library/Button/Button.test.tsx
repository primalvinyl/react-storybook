import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

describe('Button Component', () => {
    test('renders', () => {
        render(<Button>test</Button>);
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('renders button text', () => {
        render(<Button>test</Button>);
        expect(screen.getByRole('button')).toHaveTextContent(/test/i);
    });

    test('is disabled', () => {
        render(<Button disabled>test</Button>);
        expect(screen.getByRole('button')).toBeDisabled();
    });

    test('registers click handler', async () => {
        const mockHandler = jest.fn(() => 'clicked');
        render(<Button onClick={mockHandler}>test</Button>);
        await userEvent.click(screen.getByRole('button'));
        expect(mockHandler.mock.results[0].value).toEqual('clicked');
    });
});
