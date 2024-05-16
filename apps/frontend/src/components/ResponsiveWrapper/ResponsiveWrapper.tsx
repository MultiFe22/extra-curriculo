import { useState, useEffect, ReactNode } from "react";

type Props = {
  children: ReactNode;
  tailwindClasses?: string; // Optional prop for additional CSS classes
  minWidth?: string; // Optional prop to set the media query dynamically
};

export const ResponsiveWrapper: React.FC<Props> = ({
  children,
  tailwindClasses = "",
  minWidth = "768px",
}) => {
  const [isLargeScreen, setIsLargeScreen] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(`(min-width: ${minWidth})`);

    const handleResize = () => {
      setIsLargeScreen(mediaQuery.matches);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [minWidth]); // Make sure to react to changes in minWidth

  if (isLargeScreen) {
    return <div className={`${tailwindClasses}`}>{children}</div>;
  }

  return <>{children}</>;
};
