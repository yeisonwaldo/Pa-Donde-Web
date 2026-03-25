const Card = ({ children, className = '', hover = true, ...props }) => {
  return (
    <div
      className={`rounded-3xl p-6 transition-all duration-300
        ${hover ? 'hover:-translate-y-1 hover:shadow-xl' : ''}
        ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
