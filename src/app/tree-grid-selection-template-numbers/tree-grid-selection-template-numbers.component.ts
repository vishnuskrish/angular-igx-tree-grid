import { Component, OnInit, ViewChild } from "@angular/core";
import { generateEmployeeFlatData } from "../data/employees-flat";
import { IgxTreeGridComponent, IgxTreeGridRowComponent, IRowSelectionEventArgs, ITreeGridRecord } from "igniteui-angular";

@Component({
  selector: "tree-grid-selection-template-numbers",
  styleUrls: ["./tree-grid-selection-template-numbers.component.scss"],
  templateUrl: "./tree-grid-selection-template-numbers.component.html"
})
export class TreeGridSelectionTemplateNumbersSampleComponent implements OnInit {
  @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;

  public data: any[];

  public ngOnInit(): void {
    this.data = generateEmployeeFlatData();
  }

  public onRowClickChange(args: IRowSelectionEventArgs) {
    if (
      (args.event.currentTarget as HTMLElement).className.indexOf("igx-grid__cbx-selection") < 0
    ) {
      args.cancel = true;
      return;
    }

    let childrenToSelect: string[] = [];
    const selectedRow: IgxTreeGridRowComponent = this.treeGrid.rowList.find(
      row => row.rowID === args.added[0]
    );
    const deselectedRow: IgxTreeGridRowComponent = this.treeGrid.rowList.find(
      row => row.rowID === args.removed[0]
    );

    if (selectedRow && selectedRow.treeRow.children.length > 0) {
      childrenToSelect = this.getChildren(selectedRow.treeRow, []);
      requestAnimationFrame(() => this.treeGrid.selectRows(childrenToSelect, false));
    }
    else if (deselectedRow && deselectedRow.treeRow.children.length > 0) {
      childrenToSelect = this.getChildren(deselectedRow.treeRow, []);
      requestAnimationFrame(() => this.treeGrid.deselectRows(childrenToSelect));
    }
  }

  private getChildren(parent: ITreeGridRecord, arr: string[]): string[] {
    if (parent.children.length === 0) {
      return arr;
    }
    else {
      for (const child of parent.children) {
        arr.push(child.rowID);
        arr.concat(this.getChildren(child, arr));
      }
    }
    return arr;
  }
}
