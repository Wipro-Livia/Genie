import { NgModule } from '@angular/core';
import {
  MatInputModule,
  MatToolbarModule,
  MatSidenavModule,
  MatTableModule,
  MatIconModule,
  MatCardModule,MatButtonModule,MatSelectModule
} from '@angular/material';
/* import { MatButtonModule, MatSelectModule } from '@angular/material'; */
import { MatFormFieldModule } from '@angular/material/form-field';
//test


@NgModule({
      imports: [MatButtonModule, 
        MatFormFieldModule, 
        MatSelectModule,
        MatInputModule,
        MatToolbarModule,
        MatSidenavModule,
        MatTableModule,
        MatCardModule,
        MatIconModule
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