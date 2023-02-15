import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button component', () => {
    test('test Button to be correctly rendered', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('test Button has clear class', () => {
        render(<Button theme="clear">Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();

        screen.debug();
    });
});
