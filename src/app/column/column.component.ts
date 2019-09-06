import { Component, OnInit, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app-column',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.css']
})
export class ColumnComponent implements OnInit {
    @ViewChild('template', { static: true })
    private template: any;

    constructor(
        private viewContainerRef: ViewContainerRef
    ) { }

    ngOnInit(): void {
        this.viewContainerRef.createEmbeddedView(this.template);
    }
}
