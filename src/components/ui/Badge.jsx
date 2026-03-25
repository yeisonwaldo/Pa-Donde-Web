const Badge = ({ children, className = '' }) => {
  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
        bg-primary/10 text-primary border border-primary/20 ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
