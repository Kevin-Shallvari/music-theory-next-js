import { NoteName, PcName } from '@tonaljs/tonal';
import { ComplexStyleRule, style, styleVariants } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';

export const gridArea = recipe({});

export const whiteKey = style({
  border: '1px solid black',
  height: '4rem',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
});

export const blackKeyBase = style({
  width: '1rem',
  height: '2.5rem',
  backgroundColor: 'black',
  border: '1px solid white',
});

export const blackKeyGridArea = styleVariants<Record<PcName, ComplexStyleRule>>(
  {
    Db: [blackKeyBase, { gridArea: 'Db' }],
    Eb: [blackKeyBase, { gridArea: 'Eb' }],
    Gb: [blackKeyBase, { gridArea: 'Gb' }],
    Ab: [blackKeyBase, { gridArea: 'Ab' }],
    Bb: [blackKeyBase, { gridArea: 'Bb' }],
  }
);

export const blackKeyContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 2.5rem)',
  gridTemplateAreas: '"Db Eb . Gb Ab Bb ."',
  justifyItems: 'flex-end',
  gridColumn: '1/8',
  position: 'relative',
  top: '2.5rem',
  left: '0.5rem',
  marginTop: '-2.5rem',
});

export const keyboardContainer = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 2.5rem)',
  gridTemplateAreas: '"C D E F G A B"',
});
