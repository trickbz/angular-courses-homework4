import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatInputModule, MatButtonModule, MatCardModule,
  MatListModule
} from '@angular/material';

import { AppComponent } from './app.component';
import { FileSizeFormatterComponent } from './components/file-size-formatter/file-size-formatter.component';
import { FormatFileSizePipe } from './pipes/format-file-size.pipe';
import { ColorFileSizeDirective } from './directives/color-file-size.directive';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FileSizeFormatterComponent,
    FormatFileSizePipe,
    ColorFileSizeDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
