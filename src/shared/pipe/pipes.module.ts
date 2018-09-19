import {NgModule} from "@angular/core";
import {SortPipe} from "./sort.pipe";
import {CReversePipe} from "./c-reverse.pipe";
import {GetFiledPipe} from "./getFiled.pipe";
const Pipes=[
  SortPipe,
  CReversePipe,
  GetFiledPipe
];
@NgModule({
  imports:[],
  declarations:[...Pipes],
  exports:[...Pipes]
})
export class PipesModule{}
