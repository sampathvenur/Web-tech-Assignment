function showList(type) {
    var listContainer = document.getElementById("list-example");
    var listHTML = "";
    if (type === 'bulleted') {
        listHTML = "<ul><li>Vintage typewriter</li><li>Bamboo cutting board</li><li>Solar-powered lantern</li></ul>";
    } else if (type === 'numbered') {
        listHTML = "<ol><li>Rainbow-colored umbrella</li><li>Leather-bound journal</li><li>Stainless steel water bottle</li></ol>";
    } else if (type === 'definition') {
        listHTML = "<dl><dt><h4>Quantum Entanglement:</h4></dt><dd>A phenomenon in quantum mechanics where two or more particles become correlated in such a way that the state of one particle instantaneously influences the state of the others, regardless of the distance between them.</dd><dt><h4>Pareidolia:</h4></dt><dd>The psychological phenomenon where a person perceives a familiar pattern, such as a face or an object, where none actually exists, often in random or ambiguous stimuli like clouds or shadows.</dd><dt><h4>Epigenetics:</h4></dt><dd>The study of heritable changes in gene expression or cellular phenotype caused by mechanisms other than changes in the underlying DNA sequence, often influenced by environmental factors.</dd></dl>";
    }
    listContainer.innerHTML = listHTML;
}