import React from 'react';
import { render, screen } from '@testing-library/react';
import ProgressIndet from './ProgressIndet';

describe('ProgressIndet Component', () => {
    test('renders', () => {
        render(<ProgressIndet id="test" />);
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });
});
