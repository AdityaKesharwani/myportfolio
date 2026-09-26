import React from 'react';

export default function Container({
  children,
  className = '',
  id,
  style = {},
  fluid = false,
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      id={id}
      className={`${fluid ? 'w-100 px-3 px-md-4 px-lg-5' : 'atelier-container'} ${className}`.trim()}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
}
