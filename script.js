// function downloadPDF() {
//     html2canvas(document.querySelector("#download-body"), {
//         windowWidth: 4096,
//         windowHeight: 2200
//     }).then(canvas => {
//         // Initialize jsPDF
//         var pdf = new jspdf.jsPDF('p', 'pt', [canvas.width, canvas.height]);
        
//         // Add image to PDF
//         var imgData = canvas.toDataURL('image/jpeg', 1.0);
//         pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
        
//         // Save the PDF
//         pdf.save("MIMURA_ARIEL_CV.pdf");
//     });
// }

function downloadPDF() {
    html2canvas(document.body, {
        windowWidth: 2560,
        windowHeight: 1500
    }).then(canvas => {
        // Initialize jsPDF
        var pdf = new jspdf.jsPDF('p', 'pt', [canvas.width, canvas.height]);
        
        // Add image to PDF
        var imgData = canvas.toDataURL('image/jpeg', 1.0);
        pdf.addImage(imgData, 'JPEG', 0, 0, canvas.width, canvas.height);
        
        // Save the PDF
        pdf.save("MIMURA_ARIEL_CV.pdf");
    });
}