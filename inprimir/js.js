var maintable = document.getElementById("maintable"),
  pdfout = document.getElementById("pdfout");
pdfout.onclick = function () {
  var doc = new jsPDF("p", "pt", "letter");
  var margin = 20;
  var scale =
    (doc.internal.pageSize.width - margin * 2) / document.body.clientWidth;
  //checking
  var scale_mobile =
    (doc.internal.pageSize.width - margin * 2) /
    document.body.getBoundingClientRect();
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    //mobile
    doc.html(maintable, {
      x: margin,
      y: margin,
      html2canvas: {
        scale: scale_mobile,
      },
      callback: function (doc) {
        doc.output("dataurlnewwindow", { filename: "pdf.pdf" });
      },
    });
  } else {
    //mobile
    doc.html(maintable, {
      x: margin,
      y: margin,
      html2canvas: {
        scale: scale,
      },
      callback: function (doc) {
        doc.output("dataurlnewwindow", { filename: "pdf.pdf" });
      },
    });
  }
};
// if(/Android |webos | i Phone | iPad|iPod |
// BlackBerry| IEMobile | gpera Mini/i.test(navigator.userAgent)){
//     //MOBILE
//     doc.html(margin,{
//         x:margin,
//         y:margin,
//         html2canvas:{
//             scale:sacale_mobile
//          },
//          callback:function(doc){
//             doc.output
//          }

//     });
// } else{
//     //PC

// }
// };
