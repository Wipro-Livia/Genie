import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTableModule,
  MatCardModule,MatButtonModule,MatSelectModule
} from '@angular/material';
/* import { MatButtonModule, MatSelectModule } from '@angular/material'; */
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
      imports: [MatButtonModule, 
        MatFormFieldModule, 
        MatSelectModule,
        MatInputModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTableModule,
        MatCardModule
    ],
    exports: [MatButtonModule, 
      MatFormFieldModule, 
      MatSelectModule,
      MatInputModule,
      MatToolbarModule,
      MatSidenavModule,
      MatTableModule,
      MatCardModule
    ],
  })

  export class MaterialModule{

  }