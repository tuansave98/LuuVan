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
            template: "john",
            tags: {
                john: {
                    template: "john"
                }
            },
            nodeMenu: {
                details: { text: "Details" },
                edit: { text: "Edit" },
                add: { text: "Add" },
                remove: { text: "Remove" }
            }
        });

   

        family.load([
            { id: 1, pids: [2], fid: 14, name: "Nguyễn Văn A", gender: "male", img: "https://thispersondoesnotexist.com/" },
            { id: 2, pids: [1], name: "Trần Thị B", gender: "female", img: "https://thispersondoesnotexist.com/" },
            
            // Con của A-B
            { id: 3, mid: 2, fid: 1, pids: [4], name: "Nguyễn Văn C", gender: "male", img: "https://thispersondoesnotexist.com/" },
            { id: 4, pids: [3], name: "Lê Thị D", gender: "female", img: "https://thispersondoesnotexist.com/" },
            { id: 5, mid: 2, fid: 1, pids: [6], name: "Nguyễn Thị E", gender: "female", img: "https://thispersondoesnotexist.com/" },
            { id: 6, pids: [5], name: "Phạm Văn F", gender: "male", img: "https://thispersondoesnotexist.com/" },
            
            // Con của C-D
            { id: 7, mid: 4, fid: 3, name: "Nguyễn Văn G", gender: "male", img: "https://thispersondoesnotexist.com/" },
            { id: 8, mid: 4, fid: 3, pids: [9], name: "Nguyễn Thị H", gender: "female", img: "https://thispersondoesnotexist.com/" },
            { id: 9, pids: [8], name: "Trần Văn I", gender: "male", img: "https://thispersondoesnotexist.com/" },
            
            // Con của E-F
            { id: 10, mid: 5, fid: 6, name: "Phạm Văn K", gender: "male", img: "https://thispersondoesnotexist.com/" },
            { id: 11, mid: 5, fid: 6, name: "Phạm Thị L", gender: "female", img: "https://thispersondoesnotexist.com/" },
            
            // Con của H-I
            { id: 12, mid: 8, fid: 9, name: "Trần Văn M", gender: "male", img: "https://thispersondoesnotexist.com/" },
            { id: 13, mid: 8, fid: 9, name: "Trần Thị N", gender: "female", img: "https://thispersondoesnotexist.com/" },
            { id: 14, pids: [], name: "Nguyễn Văn Ông", gender: "male", img: "https://thispersondoesnotexist.com/" },
            { id: 15, mid: 1, fid: 2, name: "Trần Thị Test", gender: "female", img: "https://thispersondoesnotexist.com/" },

          ]);
    }
}
}
