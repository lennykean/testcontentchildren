import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RowComponent } from './row/row.component';
import { ColumnComponent } from './column/column.component';
import { ContentComponent } from './content/content.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    RowComponent,
    ColumnComponent,
    ContentComponent,
    TableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
