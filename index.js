const readline = require('readline-sync')

function start(){
    const content = {}

    content.searchTerm = askAndReturnSearchTerm();
    content.prefix = askAndReturnPrefix();

    function askAndReturnSearchTerm() {
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix() {
        const prefixs = ['Who is', 'What is', 'The history of'];
        const selectPrefixIndex = readline.keyInSelect(prefixs, 'Choose one option: ');
        const selectPrefixText = prefixs[selectPrefixIndex];

        return selectPrefixText;
    }

    console.log(content);
    
}

start();