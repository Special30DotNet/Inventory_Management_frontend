import { Component, inject, Input, signal } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { NgxSpinnerService, NgxSpinnerComponent } from 'ngx-spinner';

@Component({
  selector: 'app-loader',
  imports: [NgxSpinnerComponent],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
  loaderStatus = signal<boolean>(false);

  @Input() spinnerName: string = 'main-loader'; 
  @Input() fullScreen: boolean = true;
  @Input() type: string = 'ball-scale-multiple'; 
  @Input() bdColor: string = 'rgba(51,51,51,0.8)';
  @Input() size: 'small' | 'medium' | 'large' = 'large';
  @Input() color: string = '#fff';

}
