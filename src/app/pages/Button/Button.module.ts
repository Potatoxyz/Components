import {NgModule} from '@angular/core';
import {ThemeModule} from "../../../theme/theme.module";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {ButtonComponent} from "./Button.component";
import {ButtonRouting} from "./Button.routing";
import {SweetAlertComponent} from "./sweet-alert/sweet-alert.component";
import {NgbButtonsComponent} from "./ngb-buttons/ngb-buttons.component";
import {NgbModalModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";

export const Components=[
  ButtonComponent,
  SweetAlertComponent,
  NgbButtonsComponent,
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ThemeModule,
    ButtonRouting,

    NgbModule
  ],
  exports: [],
  declarations: [...Components],
  providers: [],
})
export class ButtonModule {
}
