// eslint-disable-next-line react/prop-types
export function Paragraph({ children, color, size }) {
  const sizeString = size ? `text-${size}` : 'text-sm';

  return <p className={`text-${color} text-pretty font-fira ${sizeString} leading-7`}>{children}</p>;
}
