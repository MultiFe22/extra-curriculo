import { render, screen, fireEvent } from '@testing-library/react';
import { FiltersBar } from './FiltersBar';

describe('FiltersBar Component', () => {
  it('renders the component and finds all major elements', () => {
    render(<FiltersBar />);
    expect(screen.getByText('Ver todos')).toBeInTheDocument();
    expect(screen.getByText('Ativos')).toBeInTheDocument();
    expect(screen.getByText('Inativos')).toBeInTheDocument();
    expect(screen.getByText('Filtros')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Buscar')).toBeInTheDocument();
  });

    it('allows typing in the search input', () => {
        render(<FiltersBar />);
        const input = screen.getByPlaceholderText('Buscar') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'New search term' } });
        expect(input.value).toBe('New search term');
    });
  // Additional tests can be added for other buttons and functionality
});
