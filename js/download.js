function download(content, name) {
    let blob = new Blob([content], {type : "application/csv;charset=utf-8;"}) // Blob allows for files > 1MB
     , link = document.createElement("a"); 
    link.href = URL.createObjectURL(blob);
    link.style = "visibility: hidden";
    link.download = name + ".csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}