import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconDefinition } from '@ant-design/icons-angular';
import { DownCircleOutline } from '@ant-design/icons-angular/icons';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { CanvasBoardComponent } from './components/canvas-board/canvas-board.component';
import { CanvasSizeComponent } from './components/canvas-size/canvas-size.component';
import { AutofocusDirective } from './directives/autofocus.directive';
import { PositiveNumberDirective } from './validators/postive-number/positiveNumberDirective';
import { NoWhitespaceDirective } from './validators/no-whitespace/no-whitespace.directive';

registerLocaleData(en);

const ICONS: IconDefinition[] = [DownCircleOutline];
@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    CanvasBoardComponent,
    CanvasSizeComponent,
    AutofocusDirective,
    NoWhitespaceDirective,
    PositiveNumberDirective,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NzLayoutModule,
    NzGridModule,
    NzTableModule,
    NzButtonModule,
    NzToolTipModule,
    NzFormModule,
    NzInputModule,
    NzPopconfirmModule,
    NzDropDownModule,
    NzIconModule.forRoot(ICONS),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
