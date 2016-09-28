import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero/model/hero";
import {HeroService} from "../hero/service/hero.service";
import {Router} from "@angular/router";

const PATHDASHBOARD = "app/dashboard/";

@Component({
    selector: 'my-dashboard',
    templateUrl: `${PATHDASHBOARD}dashboard.component.html`,
    styleUrls: [`${PATHDASHBOARD}dashboard.component.css`]
})
export class DashboardComponent implements OnInit {

    heroes: Hero[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }


    ngOnInit() {
        this.heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero: Hero) {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
