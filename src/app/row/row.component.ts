import { Component, OnInit, ViewChildren, QueryList, ContentChildren, ViewChild, ViewContainerRef } from '@angular/core';
import { ColumnComponent } from '../column/column.component';

@Component({
    selector: 'app-row',
    templateUrl: './row.component.html',
    styleUrls: ['./row.component.css']
})
export class RowComponent implements OnInit {
    @ViewChild('template', { static: true })
    private template: any;
    @ViewChildren(ColumnComponent)
    private cols: QueryList<ColumnComponent>;

    constructor(
        private viewContainerRef: ViewContainerRef
    ) { }

    ngOnInit(): void {
        this.viewContainerRef.createEmbeddedView(this.template);
    }
}
