import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout component that provides the visual grid frame for the portfolio.
 * - Renders continuous vertical border lines on left and right
 * - Constrains content to max-width while maintaining grid alignment
 * - Uses CSS custom properties for consistent spacing across breakpoints
 */
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="layout-container">
      {/* Left vertical grid line */}
      <div className="layout-line layout-line-left" />
      {/* Right vertical grid line */}
      <div className="layout-line layout-line-right" />
      
      {/* Content area */}
      <div className="layout-content">
        {children}
      </div>
    </div>
  );
};

export default Layout;

