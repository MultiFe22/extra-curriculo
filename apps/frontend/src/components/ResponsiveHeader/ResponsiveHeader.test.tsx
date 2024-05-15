// import { render, screen, fireEvent } from '@testing-library/react';
// import { DropdownHeaderNavigation } from './ResponsiveHeader';

// describe('DropdownHeaderNavigation Component', () => {
//   it('renders without crashing', () => {
//     render(<DropdownHeaderNavigation />);
//     expect(screen.getByText('Oportunidades')).toBeInTheDocument();
//     expect(screen.getByText('Sobre')).toBeInTheDocument();
//     expect(screen.getByText('Criar conta')).toBeInTheDocument();
//   });

//   it('calls onSobreClick when Sobre is clicked', () => {
//     const onSobreClick = vi.fn();
//     render(<DropdownHeaderNavigation onSobreClick={onSobreClick} />);
//     fireEvent.click(screen.getByText('Sobre'));
//     expect(onSobreClick).toHaveBeenCalledTimes(1);
//   });


//   // Add more tests as needed
// });
