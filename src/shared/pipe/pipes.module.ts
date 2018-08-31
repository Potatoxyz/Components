import {NgModule} from "@angular/core";
import {SortPipe} from "./sort.pipe";
import {CReversePipe} from "./c-reverse.pipe";
const Pipes=[
  SortPipe,
  CReversePipe
];
@NgModule({
  imports:[],
  declarations:[...Pipes],
  exports:[...Pipes]
})
export class PipesModule{}
