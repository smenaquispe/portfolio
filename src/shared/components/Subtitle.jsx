// eslint-disable-next-line react/prop-types
export function Subtitle({ children, color }) {
  return <h2 className={`text-2xl font-bold text-${color}`}>{children}</h2>;
}
