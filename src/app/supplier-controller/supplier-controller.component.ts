import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from "../nav-bar/nav-bar.component";

@Component({
    selector: 'app-supplier-controller',
    standalone: true,
    templateUrl: './supplier-controller.component.html',
    styleUrl: './supplier-controller.component.css',
    imports: [CommonModule, NavBarComponent]
})
export class SupplierControllerComponent {

}
