// eslint-disable-next-line react/prop-types
export function Button({ children, textColor, color, onClick }) {
  return (
    <button className={`rounded-lg px-4 py-2 text-${textColor} bg-${color}`} onClick={onClick}>
      {children}
    </button>
  );
}
