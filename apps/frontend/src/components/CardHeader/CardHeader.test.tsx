import { render, screen } from '@testing-library/react';
import { CardHeader } from './CardHeader'; // Adjust the import path as necessary
import { describe, it, expect } from 'vitest';

describe('CardHeader Component', () => {
  it('renders without crashing', () => {
    render(<CardHeader />);
    expect(screen.getByText('Oportunidades')).toBeInTheDocument();
  });

  it('contains specific content', () => {
    render(<CardHeader />);
    expect(screen.getByText('240 cadastradas')).toBeInTheDocument();
    expect(screen.getByText('Import')).toBeInTheDocument();
    expect(screen.getByText('Cadastrar oportunidade')).toBeInTheDocument();
  });

  // TODO: maybe snapshot testing here

  // Further tests...
});
