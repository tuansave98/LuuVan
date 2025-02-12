import { Component } from '@angular/core';
import FamilyTree from '../../../assets/balkanapp/familytree.js';
@Component({
  selector: 'app-gia-pha',
  imports: [],
  templateUrl: './gia-pha.component.html',
  styleUrl: './gia-pha.component.css'
})
export class GiaPhaComponent {
  constructor() { }

ngOnInit() {
    const tree = document.getElementById('tree');
    if (tree) {
        var family = new FamilyTree(tree, {
            nodeBinding: {
            field_0: "name",
            img_0: "img"
            },
        });

        family.load([
            { id: 1, pids: [2], name: "Amber McKenzie", gender: "female", img: "https://cdn.balkan.app/shared/2.jpg"  },
            { id: 2, pids: [1], name: "Ava Field", gender: "male", img: "https://cdn.balkan.app/shared/m30/5.jpg" },
            { id: 3, mid: 1, fid: 2, name: "Peter Stevens", gender: "male", img: "https://cdn.balkan.app/shared/m10/2.jpg" },
            { id: 4, mid: 1, fid: 2, name: "Savin Stevens", gender: "male", img: "https://cdn.balkan.app/shared/m10/1.jpg"  },
            { id: 5, mid: 1, fid: 2, name: "Emma Stevens", gender: "female", img: "https://cdn.balkan.app/shared/w10/3.jpg" }
        ]);
    }
}
}
