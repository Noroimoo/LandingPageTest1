import './input.scss'
import { createHeader } from './Header.js';
import { createMiddle } from './Middle.js';
import { createTop } from './Top.js';
import { createEnd } from './End.js';

const header = createHeader();
const middle = createMiddle();
const top = createTop();
const end = createEnd();

document.body.appendChild(header);
document.body.appendChild(middle);
document.body.appendChild(top);
document.body.appendChild(end);
