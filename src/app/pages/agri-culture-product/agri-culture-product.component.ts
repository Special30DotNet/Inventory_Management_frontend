import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iagriculture } from '../../Model/user';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agri-culture-product',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './agri-culture-product.component.html',
  styleUrl: './agri-culture-product.component.css'
})
export class AgriCultureProductComponent implements OnInit {

  productList: any[] = [];
  productForm!: FormGroup;

  constructor(private http: HttpClient, private _fb: FormBuilder) { }

  showForm = false;
 // form showing when a button click
  toggleForm() {
   this.showForm = !this.showForm;
}


  ngOnInit() {
    this.productForm = this._fb.group({
      id:[0],
      product_name: ['', Validators.required],
      purchase_price: ['', Validators.required],
      product_decription: [''],
      product_selling_price: ['', Validators.required],
      product_stock_quantity: ['', Validators.required],
      status: ['', Validators.required],
      created_at: ['', Validators.required],
      created_by: ['', Validators.required],
      modified_at: [''],
      modified_by: ['']

    })
    this.LoadData()
  }


 /// get data from GET Methods
  LoadData() {
    this.http.get("https://localhost:7159/api/AgriCulture/").subscribe((res:any)=>{
      this.productList=res;
    })

}


/// Save Data  from Post Methods
  onSubmit() {
    const obj = this.productForm.value;
 
      if (this.productForm.valid) {

        const obj = this.productForm.value;

        this.http.post("https://localhost:7159/api/AgriCulture/", obj)
          .subscribe({
            next: (res: any) => {
              alert("Added successfully");
              this.LoadData();
              this.productForm.reset();
            },
            error: (err) => {
              console.error(err);
              alert("Error adding product");
            }
          });
      }

    }


    // edit data in table 
    OnEdit(data:any){
      
      this.productForm.patchValue(data);

    }



        // update value on agricultureProduct Inventory
      OnUpdate(){
        const id = this.productForm?.get('id')?.value;
        // const id = this.productForm?.controls['id']?.value;
        this.http.put("https://localhost:7159/api/AgriCulture/"+id,this.productForm.value).subscribe((res:any)=>{
          alert("update Successfully")
          this.LoadData();
          this.productForm.reset();
        })
      }


      ///delete data in table
    onDelete(id:number){
      
      const val=confirm("Are you sure want to delete this")
      if(val){
        this.http.delete("https://localhost:7159/api/AgriCulture/"+id).subscribe((res:any)=>{
          alert("Delete succesfully")
          this.LoadData(); 
      })
      }
      
      
    }



  }




