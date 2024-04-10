import { CalendarSvg } from './CalendarSvg';

const colors = {
  // dark: '#1D2B53',
  dark: '#35374B',
  purple: '#7E2553',
  rose: '#FF004D',
  yellow: '#FAEF5D',
};

// eslint-disable-next-line react/prop-types
export function Time({ children, color }) {
  return (
    <div
      className={`bg-rose-500 flex h-10 items-center justify-center gap-4 rounded-lg p-1 text-center text-xs font-bold text-${color}`}
    >
      <CalendarSvg height={'20px'} width={'20px'} color={colors[color]} />
      {children}
    </div>
  );
}
