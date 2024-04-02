function downloadPDF() {

    prepareHtmlPage();

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

function prepareHtmlPage(){

    // Remove all bullet points
    const uls = document.querySelectorAll('ul');
    uls.forEach(ul => {
        ul.style.listStyleType = 'none';
    });

    // Insert margin top to fix pdf paging when downloaded
    const fName = document.getElementsByClassName('name')[0];
    fName.style.marginTop = '2em';

    // Hide all buttons
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.style.display = 'none';
    });
}

// TODO: Create function to revert changes done in prepareHtmlPage()