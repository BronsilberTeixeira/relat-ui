
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material/material.module';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    // NavigationComponent,
    // HomeComponent

    NavigationComponent
  ],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [NavigationComponent],
 // providers: [{ provide: ErrorHandler, useClass: ApplicationErrorHandler }],
})
export class CoreModule {}
