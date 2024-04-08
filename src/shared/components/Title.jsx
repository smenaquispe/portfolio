// eslint-disable-next-line react/prop-types
export function Title({ children, color }) {
  return <h1 className={`text-4xl font-bold text-${color}`}>{children}</h1>;
}
