// import { AfterViewInit, Component, EventEmitter, HostListener, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
// import { CellClickedEvent, CellRange, CellValueChangedEvent, ColDef, ColumnResizedEvent, ColumnState, FirstDataRenderedEvent, GetContextMenuItemsParams, GetRowIdFunc, GetRowIdParams, GridApi, GridOptions, GridReadyEvent, IsRowSelectable, MenuItemDef, ModelUpdatedEvent, PasteEndEvent, PostSortRowsParams, RangeSelectionChangedEvent, RowClassParams, RowClassRules, RowHighlightPosition, RowNode, SelectionChangedEvent, SideBarDef } from 'ag-grid-community';
// import { AgGridAngular } from 'ag-grid-angular';
// import { Observable, Subject, map, startWith, takeUntil, tap } from 'rxjs';
// import { HttpClient } from '@angular/common/http';
// // import { MatDialog } from '@angular/material/dialog';
// // import { PendingChangeModalComponent } from '../pending-change-modal/pending-change-modal.component';
// import { DOCUMENT } from '@angular/common';
// import { FormBuilder, FormControl } from '@angular/forms';
// // LicenseManager.setLicenseKey("Using_this_AG_Grid_Enterprise_key_( AG-038601 )_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_( legal@ag-grid.com )___For_help_with_changing_this_key_please_contact_( info@ag-grid.com )___( Ghenova Digital, S.L.U. )_is_granted_a_( Single Application )_Developer_License_for_the_application_( BOA (Business Operation & Administration) )_only_for_( 1 )_Front-End_JavaScript_developer___All_Front-End_JavaScript_developers_working_on_( BOA (Business Operation & Administration) )_need_to_be_licensed___( BOA (Business Operation & Administration) )_has_not_been_granted_a_Deployment_License_Add-on___This_key_works_with_AG_Grid_Enterprise_versions_released_before_( 16 April 2024 )____[v2]_MTcxMzIyMjAwMDAwMA==b3a9dacd2e84f27f482f539f77e79f8a")


// @Component({
//   selector: 'app-ag-grid-table',
//     templateUrl: './ag-grid-table.component.html',
//     styleUrl: './ag-grid-table.component.scss'
// })
// export class AgGridTableComponent implements OnInit, AfterViewInit {
//   private gridApi!: GridApi
//   // private gridColumnApi!: ColumnApi
//   public rowFormChanges: boolean = false
//   public selectedRow: any = null
//   public rowChange: boolean = false
//   public removeRows: any[] = []
//   public rowsToDelete: any[] = []
//   public rowsToEdit: any[] = []
//   public rowsToCreate: any[] = []
//   public rangeSelectionSum: number = 0
//   public rangeSelectionDisplay: string = "0"
//   public numberConf: boolean = false
//   public numberDecimal: string = "."
//   public notShowDecimal: boolean = false
//   public element!: HTMLInputElement
//   public globalSearchValue: string = '';
//   private onDestroy = new Subject<void>();
//   public dataLoaded = false

//   //#region Inputs
//   @Input() controlTopMenuClass: string = "flex mx-5 mt-1 py-2 border-border-grey border-x border-t"
//   @Input() tableStyle: string = "width: auto; height: 340px"
//   @Input() tableClass: string = "ag-theme-alpine mx-5 mb-2 generic_grid"
//   @Input() sideBarStatusControl: boolean = true
//   @Input() showGlobalSearch: boolean = false
//   @Input() showGlobalFilter: boolean = false
//   @Input() showCrudButtons: boolean = false
//   @Input() maintainColumnOrder: boolean = true
//   @Input() showCrudButtonsPlus: boolean = false
//   @Input() showCrudButtonsRemove: boolean = false
//   @Input() showCrudAditionalAddButtons: boolean = false
//   @Input() showSaveStatus: boolean = false
//   @Input() rowIdField: string = "id"
//   @Input() isEditableGrid: boolean = false
//   @Input() showRemoveIcon: boolean = false
//   @Input() doStatusLoad: boolean = true
//   @Input() showStatusControls: boolean = true
//   @Input() globalFilterLabel: string = "Global filter"
//   @Input() rowSelection: string = "single"
//   @Input() suppressRowClickSelection: boolean = false
//   @Input() callbackShowHideDecimal: () => void = () => {
//     this._toastr.error('Error: need implement.')
//   }
//   @Input() callbackCellKeyDown: (event: any) => void = () => {
//     // this._toastr.error('Error: need implement.')
//   }
//   @Input() callbackCellEditingStopped: (event: any) => void = () => {
//     // this._toastr.error('Error: need implement.')
//   }
//   @Input() callbackProcessDataFromClipboard: (event: any) => string[][] | null = () => {
//     this._toastr.error('Error: need implement.')
//     return null
//   }
//   @Input() callbackPasteEnd: (event: PasteEndEvent) => void = () => {
//     this._toastr.error('Error: need implement.')
//   }
//   @Input() rowDataInput: any
//   @Input() defColFlex: number | undefined = undefined
//   @Input() columns: ColDef[] = []
//   @Input() stateGridName: string = ""
//   @Input() showPrintIcon: boolean = false
//   @Input() showAddIcon: boolean = false
//   @Input() showEditIcon: boolean = false
//   @Input() rowMultiSelectWithClick: boolean = false
//   @Input() sumRowCols: string[] = []
//   @Input() showSumCols: boolean = false
//   @Input() showDropDownFilter: boolean = false
//   @Input() showClearFilterButton: boolean = true
//   @Input() showClearGroupButton: boolean = true
//   @Input() dropDownFilterLabel: string = "Dropdown filter"
//   @Input() activeInitialPivotMode: boolean = false
//   @Input() dpOptions: any
//   @Input() enableRangeSelection: boolean = false
//   @Input() defaultMinWidth: number = 0
//   @Input() statePivotMode: any[] = []
//   @Input() IsRowSelectable: boolean = false
//   @Input() externalFilterType: string = 'everyone'
//   @Input() callbackAddFunction: () => void = () => {
//     this._toastr.error('Error to add new item.')
//   }
//   @Input() callbackEditFunction: () => void = () => {
//     this._toastr.error('Error to edit item.')
//   }
//   @Input() callbackPrintFunction: () => void = () => {
//     this._toastr.error('Error to download item.')
//   }
//   @Input() callbackSelectedFunction: (item: any) => void = () => {}
//   @Input() callbackAditionalAdd: () => void = () => {
//     this._toastr.error('Need to implement.')
//   }
//   @Input() callbackSaveStatus: (rowsEdit: any[], rowsDelete: any[]) => void = () => {}
//   @Input() callbackPrintGraph: () => void = () => {}
//   @Input() callbackRemoveFunction: (data: any) => void = () => {}
//   @Input() addCustomRow: (data?: any) => void = (data: any) => {
//     const newRow = {}
//     this.addRow(newRow)
//   }
//   @Input() callbackDisableIfnotSelect: () => boolean = () => { return false }
//   @Input() onCellValueChanged: (params: CellValueChangedEvent) => void = (params: CellValueChangedEvent) => {
//     const changedData = [params.data];
//     params.api.applyTransaction({ update: changedData });

//     this.rowsToEdit.push(params.data)
//     this.rowsToEdit = [...new Set(this.rowsToEdit)]
//     this.rowChange = true
//   }
//   @Input() griodOptions: GridOptions = {defaultColDef: {}}
//   @Input() showFullSreen: boolean = true
//   @Output() columnResizeEmmiter = new EventEmitter<ColumnResizedEvent>();
//   @Input() showDecimalButton: boolean = false
//   @Input() onModelUpdated: (event: any) => void = (event: any) => {}
//   @Input() rowClassRules: RowClassRules = {}
//   @Input() showCurrencySelector: boolean = false
//   @Input() showScenarioSelector: boolean = false
//   @Output() changeCurrencyEmitter = new EventEmitter<Currency>()
//   @Output() changeScenarioEmitter = new EventEmitter<any>()
//   @Input() contextMenuItems?: (string | MenuItemDef)[] =[]
//   @Input() showExportOption: boolean = false; // Bandera para controlar la exportación
//   @Input() tableType: string = '';

//   getContextMenuItems = (params: GetContextMenuItemsParams): (string | MenuItemDef)[]=> {
//     let defaultItems: (string | MenuItemDef)[] = [
//       'copy',
//       'copyWithHeaders',
//       'copyWithGroupHeaders',
//       'paste',
//       'chartRange',
//     ]
//     if (this.contextMenuItems && this.contextMenuItems.length > 0) {
//       defaultItems = this.contextMenuItems;
//     }

//     if (this.showExportOption && this.hasDownloadPermission()) {
//       defaultItems.push('export');
//     }
//     return defaultItems
//   }

//   private hasDownloadPermission(): boolean {
//     if (this.tableType === 'offer_table' || this.tableType === 'opportunities_table' ||
//       this.tableType === 'company_table' || this.tableType === 'purchase_table') {
//       const permissionsStr = localStorage.getItem('permissions');
//       if (!permissionsStr) {
//         return false;
//       }


//       const permissions: string[] = permissionsStr.split(',');
//       return permissions.includes('can_download_offer') || permissions.includes('can_download_opportunities')
//       || permissions.includes('can_download_company') || permissions.includes('can_download_purchase');
//     }

//     return false;
//   }

//   isFullScreen: boolean = false
//   @HostListener('document:fullscreenchange', ['$event'])
//   @HostListener('document:webkitfullscreenchange', ['$event'])
//   @HostListener('document:mozfullscreenchange', ['$event'])
//   @HostListener('document:MSFullscreenChange', ['$event'])
//   fullscreenmodes(event: any){
//     const agtable = this.document.getElementById(this.blockId).childNodes

//     if (this.lastSelectId === this.blockId) {
//       if(document.fullscreenElement){
//         // Full
//         this.isFullScreen = true
//         if (agtable[1])
//           agtable[1].style.height = "95%"

//       }else{
//         this.isFullScreen = false
//         this.lastSelectId = ""
//         if (agtable[1])
//           agtable[1].style.height = this.widthClose
//       }
//     }
//   }
//   externalFilterValue: number = 1

//   @ViewChild("mainContainerFullScreen") divRef: any;
//   @Input() blockId: string = "main-container"
//   lastSelectId: string = ""
//   widthClose: string = "340px"
//   openFullScreen(lastId: string) {
//     const element = this.document.getElementById(this.blockId)
//     this.lastSelectId = lastId
//     this.widthClose = element.childNodes[1].style.height

//     if (element.requestFullscreen) {
//       element.requestFullscreen();
//     } else if (element.msRequestFullscreen) {
//       element.msRequestFullscreen();
//     } else if (element.mozRequestFullScreen) {
//       element.mozRequestFullScreen();
//     } else if (element.webkitRequestFullscreen) {
//       element.webkitRequestFullscreen();
//     }
//   }

//   public refreshCells() {
//     let params = {force: true}
//     this.gridApi.refreshCells(params)
//   }

//   public cleanRowsToDelete() {
//     this.rowsToDelete = []
//   }

//   public cleanRowsToEdit() {
//     this.rowsToEdit = []
//   }

//   public cleanRowsToCreate() {
//     this.rowsToCreate = []
//   }

//   closeFullScreen() {
//     if (this.document.exitFullscreen) {
//       this.document.exitFullscreen();
//     } else if (this.document.mozCancelFullScreen) {
//       /* Firefox */
//       this.document.mozCancelFullScreen();
//     } else if (this.document.webkitExitFullscreen) {
//       /* Chrome, Safari and Opera */
//       this.document.webkitExitFullscreen();
//     } else if (this.document.msExitFullscreen) {
//       /* IE/Edge */
//       this.document.msExitFullscreen();
//     }
//   }


//   // public setColumnWidth(size: number, colId: string) {
//   //   this.gridColumnApi.setColumnWidth(colId, size)
//   // }

//   // public getColumnInfo(colId: string) {
//   //   return this.gridColumnApi.getColumn(colId)
//   // }

//   // onColumnResized(event: ColumnResizedEvent): void {
//   //   this.columnResizeEmmiter.emit(event)
//   // }

//   // getColumnGroup(name: string) {
//   //   return this.gridColumnApi.getColumnGroup(name)
//   // }

//   // setColumnGroupOpened(groupId: string, expand: boolean) {
//   //   this.gridColumnApi.setColumnGroupOpened(groupId, expand)
//   // }

//   public getRowId: GetRowIdFunc = (params: GetRowIdParams) => {
//     return params.data[this.rowIdField]
//   };

//   public columnDefs: ColDef[] = []

//   public defaultColDef: ColDef = {
//     sortable: true,
//     filter: true,
//     resizable: true,
//     enableValue: true,
//     enableRowGroup: true,
//     enablePivot: true,
//     minWidth: 100,
//     wrapText: false,
//     autoHeight: false,
//     editable: this.isEditableGrid,
//   };

//   public autoGroupColumnDef: ColDef = {
//     pinned: 'left',
//     width: 150,
//     lockPinned: true,
//   }

//   public sideBarControl() {
//     if (this.sideBarStatusControl) {
//       return this.sideBar
//     } else {
//       return null
//     }
//   }

//   public sideBar: SideBarDef | string | string[] | boolean | null = {
//     toolPanels: [
//       {
//         id: 'columns',
//         labelDefault: 'Columnas',
//         labelKey: 'columns',
//         iconKey: 'columns',
//         toolPanel: 'agColumnsToolPanel',
//         minWidth: 225,
//         width: 225,
//         maxWidth: 225,
//       },
//       {
//         id: 'filters',
//         labelDefault: 'Filtros',
//         labelKey: 'filters',
//         iconKey: 'filter',
//         toolPanel: 'agFiltersToolPanel',
//         minWidth: 180,
//         maxWidth: 400,
//         width: 250,
//       },
//     ],
//     position: 'left',
//     hiddenByDefault: false,
//     defaultToolPanel: 'deflt_panel',
//   };
//   public rowData$!: Observable<any[]>

//   @ViewChild(AgGridAngular) agGrid!: AgGridAngular

//   public overlayLoadingTemplate = '<div class="w-full h-5/6"><div role="status" class="w-full h-full animate-pulse pt-2"><div style="background-color: rgb(246,246,246);" class="h-5 rounded-none mr-1 ml-1 pt-2"></div><div style="background-color: rgb(252,252,252);" class="h-5 rounded-none mr-1 ml-1"></div><div style="background-color: rgb(246,246,246);" class="h-5 rounded-none mr-1 ml-1"></div><div style="background-color: rgb(252,252,252);" class="h-5 rounded-none mr-1 ml-1"></div><div style="background-color: rgb(246,246,246);" class="h-5 rounded-none mr-1 ml-1"></div><div style="background-color: rgb(252,252,252);" class="h-5 rounded-none mr-1 ml-1"></div><div style="background-color: rgb(246,246,246);" class="h-5 rounded-none mr-1 ml-1"></div><div style="background-color: rgb(252,252,252);" class="h-5 rounded-none mr-1 ml-1"></div><div style="background-color: rgb(246,246,246);" class="h-5 rounded-none mr-1 ml-1"></div><div style="background-color: rgb(252,252,252);" class="h-5 rounded-none mr-1 ml-1"></div><div style="background-color: rgb(246,246,246);" class="h-5 rounded-none mr-1 ml-1"></div><div style="background-color: rgb(252,252,252);" class="h-5 rounded-none mr-1 ml-1"></div><div style="background-color: rgb(246,246,246);" class="h-5 rounded-none mr-1 ml-1"></div><div style="background-color: rgb(252,252,252);" class="h-5 rounded-none mr-1 ml-1"></div></div></div></div>'
//     // '<div class="w-full h-5/6"><div role="status" class="w-full h-full animate-pulse"><div class="h-full bg-gray-200 rounded-xl dark:bg-gray-700 mr-2 ml-2"></div><span class="sr-only">Loading...</span></div></div>'
//     // '<span class="ag-overlay-loading-center w-16"><img src="assets/img/loading-gif.gif" alt="loading-gif"></span>';

//   public isRowSelectable: IsRowSelectable = (rowNode: RowNode) => {
//     return this.IsRowSelectable
//   };

//   public refreshRowData(row: any) {
//     this.rowsToCreate.push(row)
//     this.gridApi.applyTransactionAsync({add: [row]})

//     this.refreshPinnedData()
//   }

//   public updateRowData(row: any) {
//     this.gridApi.applyTransactionAsync({update: [row]})

//     this.refreshPinnedData()
//   }

//   public getRowStyle = (params: RowClassParams) => {
//     if ((params.node.rowIndex || 0) % 2 === 0) {
//         return { background: '#f6f6f6' }
//     }
//     return { background: '#fcfcfc' }
//   }

//   public getDisplayedRowCount() {
//     return this.gridApi.getDisplayedRowCount();
//   }

//   public getCurrentColumnDef() {
//     return this.gridApi.getColumnDefs()
//   }

//   // onGridReady(params: GridReadyEvent) {
//   //   this.rowData$ = this.rowDataInput
//   //   this.gridApi = params.api
//   //   this.gridColumnApi = params.columnApi

//   //   if (this.doStatusLoad) {
//   //     this.getGridState()
//   //   }

//   //   if (this.showSumCols) {
//   //     setTimeout(()=>{
//   //       let pinnedBottomData = this.generatePinnedBottomData()
//   //       this.gridApi.setPinnedBottomRowData([pinnedBottomData])
//   //     }, 2000)
//   //   }

//   //   if (this.activeInitialPivotMode) {
//   //     this.gridColumnApi.setPivotMode(true)
//   //     this.gridColumnApi.applyColumnState({
//   //       state: this.statePivotMode,
//   //       defaultState: {
//   //         pivot: false,
//   //         rowGroup: false,
//   //         width: 100,
//   //         flex: 1
//   //       },
//   //     });
//   //   }
//   // }

//   onFirstDataRendered(event: FirstDataRenderedEvent) {
//     if (this.externalFilterType !== 'everyone') {
//       if (this.showGlobalFilter) {
//         let check = (<HTMLInputElement>document.getElementById("default-checkbox"))
//         if (check !== undefined && check != null && 'checked' in check) {
//           check.checked = true
//           if (this.externalFilterType === "offer_open") {
//             check.checked = false
//           }
//           this.externalFilterChanged(this.externalFilterType)
//         }
//         if (check !== undefined && check != null && 'checked' in check) {
//           check.checked = true
//           if (this.externalFilterType === "notice_check") {
//             check.checked = false
//           }
//           this.externalFilterChanged(this.externalFilterType)
//         }
//       }
//       if (this.showDropDownFilter) {

//         let dp = (<HTMLInputElement>document.getElementById("dpOption"))
//         this.dpOptions.subscribe((values: any) => {
//           dp.value = values[0].label
//         })
//         this.externalFilterChanged(this.externalFilterType)
//       }
//     }

//     this.refreshPinnedData()
//   }

//   onCellClicked( e: CellClickedEvent): void {
//     console.log('cellClicked', e.node.data)

//     if (this.rowFormChanges) {
//       const dialogRef = this.dialog.open(PendingChangeModalComponent, {
//         width: '500px',
//         data: { },
//       });

//       dialogRef.afterClosed().subscribe(value => {
//         if (value === true) {
//           this.selectedRow = e.node.data
//           this.callbackSelectedFunction(this.selectedRow)
//         }
//       })
//     } else {
//       this.selectedRow = e.node.data
//       this.callbackSelectedFunction(this.selectedRow)
//     }
//   }

//   clearSelection(): void {
//     this.agGrid.api.deselectAll();
//   }

//   @Input() onFilterTextBoxChanged: () => void = () => {
//     if (this.showGlobalSearch) {
//       this.gridApi.setQuickFilter(
//         this.globalSearchValue
//       );
//     }

//     this.refreshPinnedData()
//   }

//   // saveGridState() {
//   //   const savedState = this.gridColumnApi.getColumnState();
//   //   let userId = 1
//   //   const that = this

//   //   this._http.post(this.saveGridUrl, [savedState, this.stateGridName, userId])
//   //     .subscribe({
//   //       next(response) { that._toastr.success('Status table store correctly'); },
//   //       error(err) {
//   //         that._toastr.error('Error to save status table.')
//   //         console.error("Error to save status table: "+ err)
//   //       },
//   //       complete() { console.log('Finished save status table'); }
//   //     })
//   // };

//   // resetGridState() {
//   //   this.gridColumnApi.resetColumnState();
//   //   console.log('column state reset');
//   // };

//   // getGridState() {
//   //   const userId = 1
//   //   const that = this

//   //   this._http.post<ColumnState[]>(this.getGridUrl, [this.stateGridName, userId])
//   //     .subscribe({
//   //       next(response) {
//   //         setTimeout(() => {
//   //           that.gridColumnApi.applyColumnState({
//   //             state: response,
//   //             applyOrder: true,
//   //           })
//   //         }, 1600)
//   //       },
//   //       error(err) {
//   //         that._toastr.error('Error to load status table.')
//   //         console.error("Error to load data: "+ err)
//   //       },
//   //       complete() { console.log('Finished load table'); }
//   //     })
//   // }

//   public getNunRenderedRows() {
//     return this.gridApi.getRenderedNodes()
//   }

//   public getCellRanges() {
//     return this.gridApi.getCellRanges()
//   }

//   public getDisplayedRowAtIndex(idx: number) {
//     return this.gridApi.getDisplayedRowAtIndex(idx)
//   }

//   onShowLoading() {
//     this.gridApi.showLoadingOverlay()
//   }

//   onHideLoading() {
//     this.gridApi.hideOverlay()
//   }

//   public getRowNode(id: string) {
//     return this.gridApi.getRowNode(id)
//   }

//   public addRow(newData: any) {
//     this.gridApi.applyTransactionAsync({add: [newData]})
//     this.refreshPinnedData()
//   }

//   public removeSelectedRows(rows: any) {
//     this.gridApi.applyTransaction({remove: rows})
//   }

//   public removeRow() {
//     const selectedRows = this.gridApi.getSelectedRows()
//     if (!selectedRows || selectedRows.length === 0) {
//       return
//     }

//     this.rowsToDelete = this.rowsToDelete.concat(selectedRows)
//     const res = this.gridApi.applyTransaction({remove: selectedRows})

//     this.refreshPinnedData()
//   }

//   public setCustomFilter(type_col: string, value_col: string | null, filter_option: string) {
//     let sourceFilter: any = this.gridApi.getFilterInstance(type_col)
//     if (filter_option === "agTextColumnFilter") {
//       sourceFilter.setModel({
//         filterType: 'text',
//         type: 'Equals',
//         filter: value_col,
//       })
//     } if (filter_option === "agDateColumnFilter" && value_col) {
//       let lastDay = new Date(value_col)
//       lastDay = new Date(lastDay.getFullYear(), lastDay.getMonth()+1, 0)

//       sourceFilter.setModel({
//         filterType: 'date',
//         type: 'inRange',
//         dateFrom: value_col,
//         dateTo: value_col?.substring(0, value_col.length-2) + lastDay.getDate(),
//       })
//     } else {
//       sourceFilter.setModel({ values: [value_col] })
//     }

//     this.refreshPinnedData()
//     this.gridApi.onFilterChanged()
//   }

//   disableIfnotSelect() {
//     const selectedRows = this.gridApi?.getSelectedRows()
//     if (!selectedRows || selectedRows.length === 0) {
//       return true
//     }

//     return false
//   }

//   // generatePinnedBottomData(){
//   //   // generate a row-data with null values
//   //   let result: any = {}

//   //   this.gridColumnApi.getAllGridColumns().forEach(item => {
//   //     const id = item.getColId()

//   //     if (this.sumRowCols.includes(id))
//   //       result[id] = null;
//   //   })

//   //   return this.calculatePinnedBottomData(result);
//   // }

//   calculatePinnedBottomData(target: any){
//     const columnsWithAggregation = this.sumRowCols

//     columnsWithAggregation.forEach(element => {
//       let value: number = 0
//       this.gridApi.forEachNodeAfterFilterAndSort((rowNode: RowNode) => {
//         if (rowNode.hasOwnProperty("data")) {
//           if (rowNode.data[element])
//             target[element] += Number(rowNode.data[element].toFixed(0))
//         }
//         if (rowNode.hasOwnProperty("aggData")) {
//           if (rowNode.aggData[element]) {
//             target[element] += Number(rowNode.aggData[element].toFixed(0))
//             value += Number(rowNode.aggData[element].toFixed(0))
//           }
//         }
//       });
//       if (target[element] && value) {
//         target[element] = value
//       } else if (target[element]) {
//         target[element] = parseInt(target[element])
//       }
//     })

//     return target
//   }

//   setRowData(rows: any) {
//     if (this.gridApi)
//       this.gridApi.showLoadingOverlay()

//     setTimeout(()=> {
//       this.gridApi.setRowData(rows)
//       this.refreshPinnedData()
//     }, 500)
//   }

//   setColumnDefs(def: any) {
//     if (this.gridApi)
//       this.gridApi.setColumnDefs(def)
//   }

//   getSelectedRows() {
//     return this.gridApi.getSelectedRows()
//   }

//   // externalFilterChanged(evnt: any) {
//   //   this.externalFilterType = evnt
//   //   this.refreshPinnedData()
//   //   this.gridApi.onFilterChanged()
//   // }

//   isExternalFilterPresent(): boolean {
//     // if ageType is not everyone, then we are filtering
//     return this.externalFilterType !== 'everyone';
//   }

//   doesExternalFilterPass(node: RowNode): boolean {
//     if(!this.showGlobalFilter) return true;

//     if (node.data && this.externalFilterType !== "everyone") {
//       switch (this.externalFilterType) {
//         case 'offer_open':
//           const chk_ele = (<HTMLInputElement>document.getElementById("default-checkbox"))
//           let chk_offer = false
//           if (chk_ele !== undefined && chk_ele != null && 'checked' in chk_ele) {
//             chk_offer = chk_ele.checked
//           }
//           let value_offer = chk_offer ? 0 : 1
//           if (value_offer === 0)
//             return node.data.ts_b_closed === value_offer
//           else
//             return true
//         case 'obra_en_curso':
//           const chk_ele_obra = (<HTMLInputElement>document.getElementById("default-checkbox"))
//           let chk_obra = false
//           if (chk_ele_obra !== undefined && chk_ele_obra != null && 'checked' in chk_ele_obra) {
//             chk_obra = chk_ele_obra.checked
//           }
//           let value_obra = chk_obra ? 'S' : 'N'
//           if (value_obra === 'S')
//             return node.data.obra_en_curso === value_obra
//           else
//             return true
//         case 'sgc_cierre':
//           const sgc_op = (<HTMLInputElement>document.getElementById("dpOption"))
//           let val = ''
//           if (sgc_op !== undefined && sgc_op != null && 'value' in sgc_op) {
//             val = sgc_op.value
//           }
//           return node.data.cierre === val
//         case 'tiene_pedidos':
//           const offer_ped = (<HTMLInputElement>document.getElementById("default-checkbox"))
//           let has_order = false
//           if (offer_ped !== undefined && offer_ped != null && 'checked' in offer_ped) {
//             has_order = offer_ped.checked
//           }
//           let value_order = has_order ? 'N' : 'S'
//           if (value_order === 'N')
//             return node.data.tiene_pedidos === value_order && node.data.tiene_acuerdos_marco === value_order
//           else
//             return true
//           case 'notice_check':
//             const chk_notice = (<HTMLInputElement>document.getElementById("default-checkbox"))
//             let chk_dft = false
//             if (chk_notice !== undefined && chk_notice != null && 'checked' in chk_notice) {
//               chk_dft = chk_notice.checked
//             }
//             let value_notice = chk_dft ? 1 : 0
//             if (value_notice === 1)
//               return node.data.notice_check === value_notice
//             else
//               return true
//         default:
//           return true;
//       }
//     }

//     return true;
//   }

//   // refreshPinnedData() {
//   //   if (this.showSumCols) {
//   //     setTimeout(()=>{
//   //       let pinnedBottomData = this.generatePinnedBottomData()
//   //       this.gridApi.setPinnedBottomRowData([pinnedBottomData])
//   //     }, 500)
//   //   }
//   // }

//   // public postSortRows: (params: PostSortRowsParams) => void = (
//   //   params: PostSortRowsParams
//   // ) => {
//   //   this.refreshPinnedData()
//   // }

//   // clearFilter() {
//   //   this.gridApi.setFilterModel(null)

//   //   if (this.showGlobalFilter) {
//   //     let check = (<HTMLInputElement>document.getElementById("default-checkbox"))
//   //     if (check !== undefined && check != null && 'checked' in check) {
//   //       check.checked = true
//   //       if (this.externalFilterType === "offer_open") {
//   //         check.checked = false
//   //       }
//   //       if (this.externalFilterType === "notice_check") {
//   //         check.checked = false
//   //       }
//   //       this.externalFilterChanged(this.externalFilterType)
//   //     }
//   //   }

//   // }

//   // clearGroup() {
//   //   this.gridColumnApi.resetColumnState()
//   //   this.gridColumnApi.setPivotMode(false)
//   //   this.getGridState()
//   // }

//   setNumberConf(miles: boolean, decimals: string) {
//     this.numberConf = miles
//     this.numberDecimal = decimals
//   }

//   onAddRange(start_row: any, end_row: any, start_col: any, end_col: any) {
//     this.gridApi.addCellRange({
//       rowStartIndex: start_row,
//       rowEndIndex: end_row,
//       columnStart: start_col,
//       columnEnd: end_col,
//     });
//   }

//   onClearRange() {
//     this.gridApi.clearRangeSelection();
//   }


//   onRangeSelectionChanged(event: RangeSelectionChangedEvent) {
//     let cellRanges = this.gridApi.getCellRanges();
//     // if no selection, clear all the results and do nothing more
//     if (!cellRanges || cellRanges.length === 0) {
//       this.rangeSelectionSum = 0
//       return;
//     }
//     // set range count to the number of ranges selected

//     this.rangeSelectionSum = 0;
//     const that = this
//     var api = this.gridApi!;

//     if (cellRanges) {
//       cellRanges.forEach(function (range: CellRange) {
//         // get starting and ending row, remember rowEnd could be before rowStart
//         var startRow = Math.min(
//           range.startRow!.rowIndex,
//           range.endRow!.rowIndex
//         );
//         var endRow = Math.max(range.startRow!.rowIndex, range.endRow!.rowIndex);
//         for (var rowIndex = startRow; rowIndex <= endRow; rowIndex++) {
//           range.columns.forEach(function (column) {
//             var rowModel = api.getModel();
//             var rowNode = rowModel.getRow(rowIndex)!;
//             var value = api.getValue(column, rowNode);
//             if (typeof value === 'number') {
//               that.rangeSelectionSum += value;
//             }
//           });
//         }
//       });

//       let new_value: any = 0

//       if (this.numberDecimal === ",") {
//         if (this.notShowDecimal) {
//           new_value = Math.round(that.rangeSelectionSum).toString().replace(".", ",")
//         } else {
//           new_value = that.rangeSelectionSum.toFixed(2).toString().replace(".", ",")
//         }

//         if (this.numberConf) {
//           new_value = new_value.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
//         }
//         that.rangeSelectionDisplay = new_value
//       } else {
//         if (this.notShowDecimal) {
//           new_value = Math.round(that.rangeSelectionSum).toString()
//         } else {
//           new_value = that.rangeSelectionSum.toFixed(2).toString()
//         }
//         if (this.numberConf) {
//           new_value = new_value.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
//         }
//         that.rangeSelectionDisplay = new_value
//       }
//     }
//   }

//   deselectAll(id: any) {
//     this.gridApi.deselectAll()

//     const node = this.gridApi.getRowNode(id)
//     node?.setSelected(true)
//   }

//   // getColumnWidh(colID: string) : number | null {
//   //   const col = this.gridColumnApi.getColumn(colID)
//   //   if (col === null)
//   //     return null

//   //   return col.getActualWidth()
//   // }

//   public getSearchElement() {
//     this.element = (document.getElementById('filter-text-box') as HTMLInputElement)
//     return this.element.value
//   }

//   // public setExternalCurrency(value: Currency) {
//   //   this.currencyForm.controls.currencyControl.setValue(value)
//   //   this.lastCurrenctSelected = value

//   //   this.onChangeCurrency(value)
//   // }

//   // onChangeCurrency(currency: Currency) {
//   //   this.changeCurrencyEmitter.emit(currency)
//   // }
//   // onChangeScenario(scenario: any) {
//   //   this.changeScenarioEmitter.emit(scenario)
//   // }

//   selectedSingleRow(row_id: number) {
//     this.gridApi.forEachNode(node => {
//       if (node.id === row_id.toString()) {
//         node.setSelected(true)
//       }
//     });
//   }

//   ngAfterViewInit(){
//     this.element = (document.getElementById('filter-text-box') as HTMLInputElement)

//   }

//   constructor(private _http: HttpClient,
//     // private _toastr: ToastrService,
//     // private _tableService: TableService,
//     // private _currencyService: CurrencyService,
//     // private _scenarioService:ScenarioService,
//     // public dialog: MatDialog,
//     private _formBuilder: FormBuilder,
//     @Inject(DOCUMENT) private document: any) {
//      }

//   // currencyForm = this._formBuilder.group({
//   //   currencyControl: new FormControl()
//   // })
//   // scenarioForm = this._formBuilder.group({
//   //   scenarioControl: new FormControl()
//   // })

//   // filteredCurrencyOptions!: Observable<any[]>;
//   // currencyOptions!: any[]
//   // currencyValue: any = [];
//   // lastCurrenctSelected: Currency | null = null

//   // filteredScenarioOptions!: Observable<any[]>;
//   // scenarioOptions!: any[]
//   // scenarioValue: any = [];
//   // lastScenarioSelected: any | null = null

//   // compareCurrencyObjects(object1: any, object2: any) {
//   //   return object1 && object2 && object1.cu_ia_id === object2.cu_ia_id;
//   // }

//   // compareScenarioObjects(object1: any, object2: any) {
//   //   return object1 && object2 && object1.sce_ia_id === object2.sce_ia_id;
//   // }

//   ngOnInit(): void {
//     this.columnDefs = this.columns
//     this.rowChange = false

//     // this._tableService.elementObserbable.subscribe((value) => {
//     //   this.updateRowData(value)

//     //   this.refreshPinnedData()
//     // })

//     // this._tableService.clearInput$.pipe(
//     //   takeUntil(this.onDestroy)
//     // ).subscribe(() => {
//     //   this.globalSearchValue = '';
//     // });

//     // if (this.showCurrencySelector) {
//     //   this._currencyService.getCurrencyInUse().subscribe(values => {
//     //     this.currencyOptions = values

//     //     this.currencyForm.controls.currencyControl.valueChanges.subscribe((value) => {
//     //       this.onChangeCurrency(value)
//     //     })

//     //     const eur = values.find(cu => cu.cu_c_alphabetic_code === 'EUR')
//     //     this.currencyForm.controls.currencyControl.setValue(eur)
//     //   })
//     // }
//     // // this.getContextMenuItems = this.getContextMenuItems.bind(this)
//     // if(this.showScenarioSelector){
//     //   this._scenarioService.getScenarios().subscribe(values => {
//     //     this.scenarioOptions = values
//     //     this.scenarioOptions.unshift({sce_ia_id:null, sce_c_name:$localize`All`})

//     //     this.scenarioForm.controls.scenarioControl.valueChanges.subscribe((value) => {
//     //       this.onChangeScenario(value)
//     //     })
//     //     const allValues = values.find(sce => sce.sce_c_name === 'All')
//     //     this.scenarioForm.controls.scenarioControl.setValue(allValues)
//     //   })
//     // }

//     this.doesExternalFilterPass = this.doesExternalFilterPass.bind(this)
//     this.isExternalFilterPresent = this.isExternalFilterPresent.bind(this)
//     // this.externalFilterChanged = this.externalFilterChanged.bind(this)
//   }

//   ngOnDestroy() {
//     this.onDestroy.next();
//     this.onDestroy.complete();
//   }

//   // getCurrency(value: Currency) {
//   //   this.lastCurrenctSelected = value
//   //   this.onChangeCurrency(value)
//   // }

//   // displayCurrency(value: any):string {
//   //   if (value)
//   //     return value?.cu_c_alphabetic_code
//   //   return ''
//   // }
//   // getScenario(value: any) {
//   //   this.lastScenarioSelected = value
//   //   this.onChangeScenario(value)
//   // }

//   // displayScenario(value: any):string {
//   //   if (value)
//   //     return value?.sce_c_name
//   //   return ''
//   // }
// }










import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-ag-grid-table',
  templateUrl: './ag-grid-table.component.html',
  styleUrl: './ag-grid-table.component.scss'
})
export class AgGridTableComponent {
  @Input() columnDefs: ColDef[] = []; // Para definir columnas
  @Input() rowData: any[] = [];

  @Output() rowSelected: EventEmitter<any> = new EventEmitter<any>();  // Emitir el evento de selección de fila

  // Método para manejar la selección de filas
  onRowSelected(event: any) {
    const clickedRowData = event.data; // Obtiene los datos de la fila clicada
    console.log('Row clicked:', clickedRowData);
    if (event.node.selected) {
      this.rowSelected.emit(event);  // Emitir el evento cuando una fila es seleccionada
    }
  }

  onRowClicked(event: any) {
    const clickedRowData = event.data; // Obtiene los datos de la fila clicada
    console.log('Row clicked:', clickedRowData);
    // Aquí puedes redirigir a otra página o mostrar un detalle, etc.
  }
}
