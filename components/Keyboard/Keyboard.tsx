import { FC } from 'react';
import {
  blackKeyVariants,
  blackKeyContainer,
  keyboardContainer,
  whiteKey,
} from './styles.css';
import { Scale, Note } from '@tonaljs/tonal';

export const Keyboard: FC = () => {
  const allNotes = Scale.get('C chromatic').notes;
  const tones = Note.names();
  const semiTones = allNotes.filter(
    (semiTone) => !tones.some((tone) => tone === semiTone)
  );

  console.log(semiTones)

  return (
    <div className={keyboardContainer}>
      <div className={blackKeyContainer}>
        {semiTones.map((name) => (
          <div className={blackKeyVariants[name]} key={name} />
        ))}
      </div>
      {tones.map((name) => (
        <div key={name} className={whiteKey}>
          {name}
        </div>
      ))}
    </div>
  );
};
