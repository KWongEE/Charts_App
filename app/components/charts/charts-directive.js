// // function ChartsController() {
// // }
// // app.component('charts', {
// //   templateUrl: 'view3/view3.html',
// //   controller: ChartsController,
// //   controllerAs: 'vm'
// // })
// angular.module('myApp.charts.charts-directive', [])
// .directive("importSheetJs", [SheetJSImportDirective]);
//
// function SheetJSImportDirective() {
//   debugger;
//   return {
//     scope: { opts: '=' },
//     link: function ($scope, $elm) {
//       $elm.on('change', function (changeEvent) {
//         var reader = new FileReader();
//
//         reader.onload = function (e) {
//           /* read workbook */
//           var bstr = e.target.result;
//           var workbook = XLSX.read(bstr, {type:'binary'});
//           console.log('Potato')
//           debugger;
//           /* DO SOMETHING WITH workbook HERE */
//         };
//
//         reader.readAsBinaryString(changeEvent.target.files[0]);
//       });
//     }
//   };
// }
