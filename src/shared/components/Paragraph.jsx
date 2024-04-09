// eslint-disable-next-line react/prop-types
export function Paragraph({ children, color }) {
  return <p className={`text-${color} font-fira text-pretty text-lg font-normal leading-8`}>{children}</p>;
}
