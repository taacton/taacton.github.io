function splitIdfas(content, name) {
    var idfas = content.split("\n")
    , iosContent = ""
    , iosCount = 0
    , androidContent = ""
    , androidCount = 0;
    idfas.forEach(function(idfa) {
        if (idfa == idfa.toUpperCase()) { // iOS
            iosContent += idfa + "\n";
            iosCount++;
        } else if (idfa == idfa.toLowerCase()) { // Android
            androidContent + "\n"
            androidCount++;
        }
    });
    M.toast({html: `Splitting ${iosCount} iOS ID(s) and ${androidCount} ID(s) from: ${name}.csv`, displayLength: 10000});
    if (iosCount > 0) {
        download(iosContent, "_ios" + name);
    } 
    if (androidCount > 0){
        download(androidContent, "_android" + name);
    } 
}