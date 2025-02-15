import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxCheckboxModule,
	IgxTreeGridModule
 } from "igniteui-angular";
import { TreeGridSelectionTemplateNumbersSampleComponent } from "./tree-grid-selection-template-numbers/tree-grid-selection-template-numbers.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		TreeGridSelectionTemplateNumbersSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxCheckboxModule,
		IgxTreeGridModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
