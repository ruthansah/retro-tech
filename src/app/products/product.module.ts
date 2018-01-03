import { ProductRoutingModule } from './product-routing.module';
import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard.service';
import { ProductListComponent } from './product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductDetailComponent } from './product-detail.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [ 
       SharedModule,
       ProductRoutingModule
  ],
  declarations: [
      ProductListComponent,
      ProductDetailComponent,
      ConvertToSpacesPipe,
    
  ],
  providers:[
      ProductService, 
      ProductGuardService
    ]
})
export class ProductModule { }
