import React from 'react';
import { render, screen } from '@testing-library/react';
import { BreakpointProvider, useBreakpoint } from './BreakpointProvider';

const TestSubscriber = () => {
    const myContext = useBreakpoint();
    return <div>{JSON.stringify(myContext)}</div>;
};

describe('BreakpointProvider', () => {
    test('renders children', () => {
        render(<BreakpointProvider>test</BreakpointProvider>);
        expect(screen.getByText(/test/i)).toBeInTheDocument();
    });

    test('provides context object to subscriber', () => {
        render(
            <BreakpointProvider>
                <TestSubscriber />
            </BreakpointProvider>
        );
        expect(
            screen.getByText(
                '{"xs":false,"smUp":false,"mdUp":false,"lgUp":false,"xlUp":false,"smDown":false,"mdDown":false,"lgDown":false,"xlDown":false}'
            )
        ).toBeInTheDocument();
    });
});
