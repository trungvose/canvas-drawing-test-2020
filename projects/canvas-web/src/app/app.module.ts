import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzTableModule } from 'ng-zorro-antd/table';
import { AppComponent } from './app.component';
import { CanvasComponent } from './canvas/canvas.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CanvasBoardComponent } from './components/canvas-board/canvas-board.component';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { CanvasSizeComponent } from './components/canvas-size/canvas-size.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    CanvasBoardComponent,
    CanvasSizeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzLayoutModule,
    NzGridModule,
    NzTableModule,
    NzButtonModule,
    NzToolTipModule,
    NzFormModule,
    NzInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
