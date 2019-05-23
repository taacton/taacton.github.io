function fixFiles(files) {
    const numFiles = files.length;
    M.toast({html: `${numFiles} file(s) sucsessfully uploaded`, displayLength: 10000});
    for (let i = 0; i < numFiles; i++) {                  
        (function(file) {
            let reader = new FileReader();  
            reader.onload = function(e) { 
                let name = file.name.replace(".csv", "")
                 , content = reader.result;
                M.toast({html: `Processing file: ${name}`, displayLength: 10000});
                content = JSON.stringify(content);                            
                content = content.replace(/"/g, ""); // Removes quotes introduced with JSON.stringify()
                content = content.replace(/(?:\\[rn])+/g, "\n"); // Converts to unix like line endings
                content = validateIdfas(content, name); // Remove non-valid IDFAs
                let blob = new Blob([content], {type : "application/csv;charset=utf-8;"}) // Blob allows for files > 1MB
                 , link = document.createElement("a"); 
                link.href = URL.createObjectURL(blob);
                link.style = "visibility: hidden";
                link.download = name + "_fixed.csv";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            }
            reader.readAsText(file);       
        })(files[i]);         
    }
}