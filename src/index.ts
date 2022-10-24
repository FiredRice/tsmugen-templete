import '@tsmugen/global';
import { Character, Mugen } from '@tsmugen/core';
import { injectGlobalVars } from '@tsmugen/global';
import { customVars } from './vars';
import states from './states';

injectGlobalVars(customVars);

const char = new Character();

char.injectStates(states);

const mugen = new Mugen();

mugen.injectCharacter(char);

mugen.build();
