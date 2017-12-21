import {NgModule} from "@angular/core";
import {SortPipe} from "./sort.pipe";

@NgModule({
  imports:[SortPipe],
  exports:[SortPipe]
})
export class PipesModule{}
