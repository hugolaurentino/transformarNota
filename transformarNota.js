const nota = 9.5;

console.log(`
${nota <= 3 ? 'O estudando obteve conceito E' :
        nota >= 4 && nota <= 5.9 ? 'O estudando obteve conceito D' :
            nota >= 6 && nota <= 7.9 ? 'O estudando obteve conceito C' :
                nota >= 8 && nota <= 8.9 ? 'O estudando obteve conceito B' :
                    nota >= 9 && nota <= 10 ? 'O estudando obteve conceito A' :
                        `Nota não existente`
    }
`);