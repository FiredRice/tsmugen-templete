import { CustomVars } from '../vars';

type GlobalExtend = CustomVars;

declare global {
    interface Root extends GlobalExtend { }
    interface Parent extends GlobalExtend { }
    interface Partner extends GlobalExtend { }
    interface Enemynear extends GlobalExtend { }
    interface Enemy extends GlobalExtend { }
    interface Target extends GlobalExtend { }
    interface PlayerId extends GlobalExtend { }
}