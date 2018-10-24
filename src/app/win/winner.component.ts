import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-winner',
    templateUrl: './winner.component.html',
    styleUrls: ['./winner.component.css'],
    providers: []
})


export class WinnerComponent implements OnInit {
    constructor(private route: ActivatedRoute) {}

    playerName: string;

    ngOnInit() {
        this.playerName = this.route.snapshot.queryParams['name'];
    }
}
