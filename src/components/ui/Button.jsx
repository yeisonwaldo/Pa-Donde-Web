const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-bold transition-all duration-300 rounded-2xl';

  const variants = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    dark: 'bg-navy text-white hover:bg-navy2 border border-white/10',
    green: 'bg-[#25D366] hover:bg-[#20bd5a] text-white',
    ghost: 'text-white hover:text-primary hover:bg-white/5',
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
};

export default Button;
