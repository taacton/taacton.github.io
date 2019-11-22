function joinFiles(files) {
    const numFiles = files.length;
    M.toast({html: `${numFiles} file(s) sucsessfully uploaded`, displayLength: 10000});
    var fullList = "";
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
                fullList += content + "\n";
                if (i == numFiles -1) {
                    download(fullList, "combined_list");
                }    
            }
            reader.readAsText(file); 
        })(files[i]);     
    }
}