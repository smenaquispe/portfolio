import { BigTitle } from './components/BigTitle';
import { Paragraph } from '../../shared/components/Paragraph';

export function Header() {
  return (
    <>
      <BigTitle>SERGIO MENA</BigTitle>
      <div className="my-10 flex w-full justify-center gap-8 px-[12rem]">
        <Paragraph color={'dark'}>
          Hola soy <span className="text-rose">Sergio Mena</span> 😊, desarrollador de software con un año de
          experiencia profesional y más de 3 años como programador autodidacta. Me apasiona la tecnología y la
          programación, me encanta aprender cosas nuevas y enfrentar desafíos. 💻🚀
        </Paragraph>
      </div>
    </>
  );
}
