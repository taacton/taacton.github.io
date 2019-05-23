function validateIdfas(content, name) {
    const regexp = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/gi;
    var invalidIds = 0
     , validatedContent = "";
    idfas = content.split("\n");
    idfas.forEach(function(idfa) {
        idfa.match(regexp) ? validatedContent += idfa + "\n" : invalidIds++;
    });
    if (invalidIds > 0) {
        M.toast({html: `Removed ${invalidIds} invalid ID(s) from: ${name}.csv`, displayLength: 10000});
    }
    return validatedContent
}