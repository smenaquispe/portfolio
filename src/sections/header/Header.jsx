import { BigTitle } from './components/BigTitle';
import { Paragraph } from '../../shared/components/Paragraph';
import { Card } from '../../shared/components/Card';

export function Header() {
  return (
    <>
      <BigTitle>SERGIO MENA</BigTitle>
      <div className="felx w-full flex-col justify-center px-[12rem]">
        <div className="my-10 w-1/2">
          <Card>
            <Paragraph color={'dark'}>
              Hola soy <span className="text-rose">Sergio Mena</span>, desarrollador de software con un año de
              experiencia profesional y más de 3 años como programador autodidacta. Me apasiona la tecnología y la
              programación, me encanta aprender cosas nuevas y enfrentar desafíos.
            </Paragraph>
          </Card>
        </div>
      </div>
    </>
  );
}
