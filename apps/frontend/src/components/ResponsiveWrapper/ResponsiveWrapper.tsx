import { useState, useEffect, ReactNode } from "react";

type Props = {
  children: ReactNode;
  tailwindClasses?: string; // Optional prop for additional CSS classes
  minWidth?: string; // Optional prop to set the media query dynamically
  isMinimum: boolean; // Mandatory prop to decide if rendering in min or max cases
};

export const ResponsiveWrapper: React.FC<Props> = ({
  children,
  tailwindClasses = "",
  minWidth = "768px",
  isMinimum,
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
  }, [minWidth]); // React to changes in minWidth

  if ((isLargeScreen && isMinimum) || (!isLargeScreen && !isMinimum)) {
    return <div className={`${tailwindClasses}`}>{children}</div>;
  }

  return <>{children}</>;
};
