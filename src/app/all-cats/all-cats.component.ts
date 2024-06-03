import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


export interface catsList {
  name: string;
  origin: string;
  temperament: string;
  colors: string;
  description: string;
  image: any;
}
@Component({
  selector: 'app-all-cats',
  templateUrl: './all-cats.component.html',
  styleUrls: ['./all-cats.component.css']
})
export class AllCatsComponent implements OnInit {
  CatsLinks = [
    { name: 'Logout', url: '/app-home' }
  ];
  userRole: string = '';
  catsData: any[] = [];
  cats_list: catsList[] = [
    {
      name: 'Persian',
      origin: 'Iran',
      temperament: 'Sweet, Gentle, Quiet',
      colors: 'White, Black, Blue, Cream',
      description: 'The Persian cat is a long-haired breed known for its luxurious coat and sweet personality. They are calm and affectionate cats that enjoy a relaxed indoor lifestyle.',
      image: 'https://www.purina.co.th/sites/default/files/styles/ttt_image_510/public/2021-02/CAT%20BREED%20Hero%20Mobile_0015_Persian.jpg?itok=CSP3_9ju',
    },
    {
      name: 'Siamese',
      origin: 'Thailand',
      temperament: 'Social, Vocal, Intelligent',
      colors: 'Seal Point, Blue Point, Chocolate Point, Lilac Point',
      description: 'The Siamese cat is a vocal and affectionate breed known for its striking blue almond-shaped eyes. They are highly social and enjoy interactive play with their human companions.',
      image: 'https://www.catster.com/wp-content/uploads/2023/11/Siamese-Cat_Andreas-LischkaPixabay.jpg',
    },
    {
      name: 'Maine Coon',
      origin: 'United States',
      temperament: 'Friendly, Playful, Gentle',
      colors: 'Brown Tabby, Black, Red, Silver Tabby',
      description: 'The Maine Coon is a large and friendly breed known for its tufted ears and bushy tail. They are affectionate and sociable cats that get along well with children and other pets.',
      image: 'https://www.purina.co.th/sites/default/files/styles/ttt_image_510/public/2021-02/CAT%20BREED%20Hero%20Mobile_0022_Maine_coon.jpg?itok=yar9WqXW',
    },
    {
      name: 'Bengal',
      origin: 'United States',
      temperament: 'Active, Energetic, Intelligent',
      colors: 'Brown Spotted, Snow Spotted, Marble',
      description: 'The Bengal cat is a medium to large-sized breed known for its wild appearance and energetic nature. They are highly intelligent and require mental and physical stimulation.',
      image: 'https://shopee.co.th/blog/wp-content/uploads/2021/09/1.jpg',
    }
  ];

  constructor(private Service: ApiService, private router: Router) {}

  ngOnInit(): void {
    this.check();
    this.getCatData();
  }

  check(){
    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('pass'))
    if(localStorage.getItem('email') !== 'admin@gmail.com' ||
        localStorage.getItem('pass') !== '123456789') {
        this.router.navigate(['/app-home']);
        alert('คุณไม่ใช่ Admin');
    }
    else {
      alert('คุณคือ Admin');
    }
  }
  getCatData() {
    for (let id = 1; id <= 40; id++) {
      this.Service.getCats(id).subscribe((data) => {
        this.catsData.push(data);
        console.log(data);
        this.convertData(this.catsData);
        console.log(this.cats_list);
      });
    }
  }

  convertData(data: any) {
      let _data = [];
    for (let i = 0; i < data.length; i++) {
      _data.push({
        'name': data[i]['name'] || '-',
        'origin': data[i]['origin'] || '-',
        'temperament': data[i]['temperament'] || '-',
        'colors': data[i]['colors'] || '-',
        'description': data[i]['description'] || '-',
        'image': '',
      });
    }
    this.cats_list = _data;
    this.getImgCat();
    console.log(_data);
  }

  getImgCat() {
    this.cats_list.forEach((cat: catsList, index: number) => {
      this.Service.getImgCats(cat.name).subscribe(
        data => {
          if (data.length > 0) {
            this.cats_list[index].image = data[0].image_link; 
          } else {
            console.error(`No image found for cat: ${cat.name}`);
          }
        }
      );
    });
  }
}
