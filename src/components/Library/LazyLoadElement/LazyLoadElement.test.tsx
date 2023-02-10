import React from 'react';
import { render, screen } from '@testing-library/react';
import LazyLoadElement from './LazyLoadElement';

describe('LazyLoadElement Component', () => {
    test('renders children', () => {
        render(
            <LazyLoadElement>
                {(onload: any) => <div onLoad={onload}>test</div>}
            </LazyLoadElement>
        );
        expect(screen.getByText(/test/i)).toBeInTheDocument();
    });
});
