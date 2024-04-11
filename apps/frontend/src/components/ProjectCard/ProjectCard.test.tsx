import { render, screen } from '@testing-library/react';
import { ProjectCard } from './ProjectCard';

describe('ProjectCard Component', () => {
  const mockImageSrc = '/example-image.jpg';

//   it('renders correctly with an image', () => {
//     render(<ProjectCard image={mockImageSrc} />);
//     const imageElement = screen.getByRole('img');
//     expect(imageElement).toBeInTheDocument();
//     expect(imageElement).toHaveAttribute('src', mockImageSrc);
//   });

  it('displays project information and tags correctly', () => {
    render(<ProjectCard image={mockImageSrc} />);
    // Verify presence of tags by their text content
    expect(screen.getByText('Presencial')).toBeInTheDocument();
    expect(screen.getByText('Extensão')).toBeInTheDocument();
    expect(screen.getByText('Inativo')).toBeInTheDocument();
    expect(screen.getByText('Geografia')).toBeInTheDocument();
    expect(screen.getByText('Astronomia')).toBeInTheDocument();

    // Since the heading and description might be dynamically generated or controlled via props,
    // ensure to adjust the tests according to your component's logic.
    // For a static text example:
    expect(screen.getByText('Observatório de Atenção Permanente ao Uso de Agrotóxicos – Portal de Informações Interligadas sobre Agrotóxicos e seus Efeitos sobre a Saúde e Meio Ambiente')).toBeInTheDocument();
  });

  // If there are interactive elements (like buttons) whose callbacks are passed via props,
  // tests could simulate interactions and verify callback invocations
  // For example, if clicking a tag is supposed to invoke a callback:
  /*
  it('invokes callback when a tag button is clicked', () => {
    const onTagClick = vi.fn();
    render(<ProjectCard image={mockImageSrc} onTagClick={onTagClick} />);
    fireEvent.click(screen.getByText('Presencial'));
    expect(onTagClick).toHaveBeenCalledTimes(1);
  });
  */

  // Additional tests could include accessibility checks, like ensuring images have alt text
//   it('image has appropriate alt text', () => {
//     render(<ProjectCard image={mockImageSrc} />);
//     expect(screen.getByRole('img')).toHaveAttribute('alt');
//   });

  // If your component supports it, consider testing for scenarios where the image prop is not provided
  it('renders correctly without an image prop', () => {
    render(<ProjectCard />);
    // Expectations here would depend on how your component handles missing images,
    // such as rendering a placeholder or not rendering the <img> element at all.
  });

  // Consider tests for any conditional rendering or interactions within the component.
});
