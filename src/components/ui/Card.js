export function Card({ children, className = "" }) {
  return (
    <div className={`p-4 rounded shadow-md bg-white ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
