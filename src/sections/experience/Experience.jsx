import { Title } from '../../shared/components/Title';
import { Card } from './components/Card';

export function Experiece() {
  return (
    <section className="mb-8 mt-10 w-full px-[12rem]">
      <Title color={'rose'}>Mi Experiencia</Title>
      <Card
        title={'Ultimate Video Maker'}
        paragraph={
          'Ultimate Video Maker es una aplicación de escritorio cuyo proposito es la generacion de videos mediante el uso de modelos de IA como midjourney, google text-to-speech o whisper.'
        }
        image={'./images/ultimate-video-maker.ico'}
        time={'junio 2023 - marzo 2024'}
      />
    </section>
  );
}
