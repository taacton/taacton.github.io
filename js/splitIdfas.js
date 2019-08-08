function splitIdfas(content, name) {
    var idfas = content.split("\n")
    , iosContent = ""
    , iosCount = 0
    , androidContent = ""
    , androidCount = 0;
    if (JSON.stringify(idfas[idfas.length - 1]) == '""') {
        idfas.pop(); // Removes the empty index at the end of the array
    }
    idfas.forEach(function(idfa) {
        if (idfa == idfa.toUpperCase()) { // iOS
            iosContent += idfa + "\n";
            iosCount++;
        } else if (idfa == idfa.toLowerCase()) { // Android
            androidContent += idfa + "\n"
            androidCount++;
        }
    });
    M.toast({html: `Splitting ${iosCount} iOS ID(s) and ${androidCount} Android ID(s) from: ${name}.csv`, displayLength: 10000});
    if (iosCount > 0) {
        download(iosContent, name + "_ios");
    } 
    if (androidCount > 0){
        download(androidContent, name + "_android");
    } 
}