//Syntax 1
import * as module1 from "module1";

//uses
var person = new module1.Person();
var func = module1.func;
var country = module1.country;


//Syntax2 : Using Destructuring

import { Person, func, country } from "module1";

//partial import
import { Person, country } from "module1";