import { Component, OnInit, ViewChild, ViewChildren, ViewContainerRef, QueryList } from '@angular/core';
import { RowComponent } from '../row/row.component';

@Component({
    selector: 'app-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
    @ViewChild('template', { static: true })
    private template: any;
    @ViewChildren(RowComponent)
    private rows: QueryList<RowComponent>;

    constructor(
        private viewContainerRef: ViewContainerRef
    ) { }

    ngOnInit(): void {
        this.viewContainerRef.createEmbeddedView(this.template);
    }
}
