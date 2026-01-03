function downloadPDF() {
    const element = document.getElementById("report");

    const options = {
        margin: 0.5,
        filename: "Robotics_in_Manufacturing_Industry_4.0.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "a4", orientation: "portrait" }
    };

    html2pdf().set(options).from(element).save();
}
