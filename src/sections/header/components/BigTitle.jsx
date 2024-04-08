import './BigTitle.css';

// eslint-disable-next-line react/prop-types
export function BigTitle({ children }) {
  return (
    <>
      <header className="font-rubik flex h-[40vh] w-full items-center justify-center bg-dark text-white">
        <div className="typewriter flex items-center justify-center font-poppins text-9xl font-bold text-rose">
          <h1 className="border-r-8 border-rose text-white">{children}</h1>
        </div>
      </header>
    </>
  );
}
