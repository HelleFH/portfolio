export interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  to?: string; // For internal routes
  href?: string; // For external URLs
  openInNewTab?: boolean;
  children: React.ReactNode;
}
