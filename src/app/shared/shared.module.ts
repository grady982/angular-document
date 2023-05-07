import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OneColumnLayoutComponent } from './components/one-column-layout/one-column-layout.component';

const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule.forRoot(),
  NbUserModule,
  NbActionsModule,
  NbSearchModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbEvaIconsModule,
];

@NgModule({
  declarations: [HeaderComponent, FooterComponent, OneColumnLayoutComponent],
  imports: [CommonModule, ...NB_MODULES],
  exports: [CommonModule, FormsModule, OneColumnLayoutComponent],
})
export class SharedModule {}
