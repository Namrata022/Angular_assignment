import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../services/product.service';
import { CommonModule, SlicePipe } from '@angular/common';

@Component({
  selector: 'app-que9',
  standalone: true,
  imports: [CommonModule,SlicePipe],
  templateUrl: './que9.component.html',
  styleUrl: './que9.component.css'
})
export class Que9Component implements OnInit{

  //  products = [
  //   {
  //     name: 'Laptop',
  //     description: 'HP Core i5 13th Gen',
  //     price: 55000
  //   },
  //   {
  //     name: 'Mobile',
  //     description: 'Samsung Galaxy S24',
  //     price: 70000
  //   },
  //   {
  //     name: 'Headphones',
  //     description: 'Boat Rockerz 450',
  //     price: 2500
  //   },
  //   {
  //     name: 'Smart Watch',
  //     description: 'Noise ColorFit',
  //     price: 3500
  //   }
  // ];

  // buyProduct(productName: string) {
  //   alert('You bought: ' + productName);
  // }
  // product:any

  // constructor(private prodService:ProductService){ }

  // ngOnInit(){
  //   this.product=this.prodService.getAllProducts()
  // }
   products: Product[] = [];   //DI classical methods for handaling services  
   
   constructor(private prodService: ProductService) {}   
    ngOnInit(): void 
    {    this.prodService.getProd().subscribe
      ({
          next: (data: any) => 
        {        
          // If the API returns an object with a property like "products"        
          this.products = Array.isArray(data) ? data : data.products ?? [];      
        },      
        error: (err) => {
          console.error(err);      
        },    
      });  
    } 
} 

