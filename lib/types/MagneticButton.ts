export type BaseProps = {
  children: React.ReactNode;
  className?: string;
  strength?: number;
};

export type MagneticButtonProps = BaseProps &
  (
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never })
  );
