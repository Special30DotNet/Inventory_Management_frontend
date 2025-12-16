import { Component, OnInit } from '@angular/core';
import { SupplierServiceService } from './supplier-service.service';
import { CommonModule } from '@angular/common';
import { Validators, ɵInternalFormsSharedModule, ReactiveFormsModule, FormGroup, FormBuilder, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-supplier-list',
  imports: [CommonModule, ReactiveFormsModule,FormsModule],
  templateUrl: './supplier-list.component.html',
  styleUrl: './supplier-list.component.css'
})
export class SupplierListComponent implements OnInit {

  supplierList:any[]=[];
  searchText:string="";

  isDatanotFound:boolean = false;
  Counts: any = {
    totalsupplier: 0,
    totalActive: 0,
    totalInactive: 0,
   
  };
  supplierForm!: FormGroup;
  

  constructor(private suppSrv:SupplierServiceService,private fb:FormBuilder){
     this.supplierForm = this.fb.group({
      supplier_name: ['', Validators.required], // Required field
      contactPerson: [''],
      phoneno: [''],
      email: [''],
      gstumber: [''],
      status: ['Active'],                        // Default Active
      address: [''],
      note: ['']
    });

        this.getall();

  }


  ngOnInit() {
    this.getSupplierCount();
  }

  getall(){
    this.suppSrv.getAll().subscribe((res:any)=>{
      this.supplierList= res;
    
      console.log("supplierlist:",res)
    })
  }
  getSupplierCount(){
   this.suppSrv.getSupplierCount().subscribe((res:any)=>{
    this.Counts = res;
    console.log("Supplier Service:",res)
   })
  }

  onSaveSupplier():void{
    if (this.supplierForm.invalid){
      alert('Please fill required fields')
      return
    }
    this.suppSrv.addSupplier(this.supplierForm.value).subscribe({
      next:(res)=>{
        alert('Supplier added successfully');
        this.supplierList.push(res);
      },
      error:(err)=>{
        console.error(err)
        alert("Error while saving supplier")
      }
    })
  }

  OnSearch(){
      // Avoid empty API call
    if (this.searchText.trim() === '') {
      this.getall();
      this.supplierList =[];
      
      return;
    }

    this.suppSrv.searchSupplier(this.searchText).subscribe({
      next:(res)=>{
        this.supplierList = res;
        this.isDatanotFound = res.length==0;

        console.log("search supplierName:- ",res)
      },
      error:(err)=>{
        console.error("Search Error:-",err)
        this.isDatanotFound = false;
      }
    })
  }

  



}
