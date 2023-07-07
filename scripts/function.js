function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  }
  function downloadPDF() {
    // Replace 'path/to/your/pdf.pdf' with the actual path to your PDF file
    var pdfUrl = 'resources/KedarPatilResume.pdf';
    
    // Create a temporary anchor element
    var link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'KedarResume.pdf';
    link.click();
  }
  
  
  
  