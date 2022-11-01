import { FC } from 'react';
import {
  blackKeyGridArea,
  blackKeyContainer,
  keyboardContainer,
  whiteKey,
} from './styles.css';
import { Scale } from '@tonaljs/tonal';

export const Keyboard: FC = () => {
  const allNotes = Scale.get('C chromatic').notes;
  const tones = Scale.get('C major').notes;
  const semiTones = allNotes.filter(
    (semiTone) => !tones.some((tone) => tone === semiTone)
  );

  return (
    <div className={keyboardContainer}>
      <div className={blackKeyContainer}>
        {semiTones.map((name) => (
          <div className={blackKeyGridArea[name]} key={name} />
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
