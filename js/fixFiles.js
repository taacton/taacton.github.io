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
                if(document.getElementById('box2').checked) {
                    content = validateIdfas(content, name); // Remove non-valid IDFAs
                }
                if(document.getElementById('box3').checked) {
                    splitIdfas(content, name) // Split list by OS
                } else {
                    download(content, name);
                }
            }
            reader.readAsText(file);       
        })(files[i]);         
    }
}