/* eslint-disable react/prop-types */

// Components Main
import Hero from './hero/Hero';
import Opening from './opening/Opening';
import About from './about/About';
import Event from './event/Event';
import Info from './info/Info';
import Story from './story/Story';
import Comments from './comment/Comments';
import Ending from './ending/Ending';

export default function Main({ onData }) {
  return (
    <main className="main">
      <Hero />
      <Opening />
      <About />
      <Event />
      <Info onData={onData} />
      <Story />
      <Comments />
      <Ending />
    </main>
  );
}
