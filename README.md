<a name="back"></a>
### [<img width="64" alt="Flag of Brazil" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/64px-Flag_of_Brazil.svg.png">](#ptbr) [<img width="64" alt="Flag of the United States" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Flag_of_the_United_States_%283-2%29.svg/64px-Flag_of_the_United_States_%283-2%29.svg.png">](#en)

# CSV String to JavaScript Object Parser <a name="en"></a>

### Description
*A JavaScript function that takes the output **string of a CSV** file and parses it to a **JavaScript Object**.*

### Features
* *Parses CSV to JS Object*
* *Allows different separators (commas, semicolons etc)*
* *Has built-in *TRIM()* option enabling to clean keys or values off empty spaces around it*

### Technologies:
| Name | Description of Usage |
| --: | :-- |
| ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | Scripting language in which the function is written |

### How to Install
1. Download the function file.
2. If you are using NodeJS, open it and add an `exports` statement at the end of the file, then `require` the module in the main app that will use it, like so:
```
module.exports = parseCSVStringToJSObject
```
3. If you are using pure JavaScript in a browser environment, add `export default` to the function declaration, change the file format to `.mjs`, then `import` the module and don't forget to update the HTML file to read this JS file (add a script tag with type module and reference this file). In the function file:
```
export default function parseCSVStringToJSObject(string, separator, hasExtraSpaces, fileName)
```
In the HTML file
```
<script type="module" src="./parseCSVStringToJSObject.mjs" defer></script> 
```

### How to Call the Function
* The `string` parameter refers to the output string from the original CSV file. 
* The `separator` parameter refers to the separator used in the CSV file (comma, semicolon etc) 
* The `hasExtraSpaces` parameter refers to a boolean value which will either trim or not trim the keys and values off empty spaces around it   
* The `fileName` parameter refers to any String you choose. This will be used to name the key in the JS Object output of the function
Check out the function declaration
```
function parseCSVStringToJSObject(string, separator, hasExtraSpaces, fileName)
```
And the function call example for a CSV file containing data of `58 users` that was read and its output were assigned to a variable `outputString`, whose separator is a semicolon `;`, whose values might contain empty spaces. Because it's about users, I'll use pass the string 'users', it could anything you choose.
```
parseCSVStringToJSObject(outputString, ";", true, 'users')
```
This example would output something like:
```
{users: Array(58)}
```

### Notes & Known Issues
* *The CSV **MUST** contain headers, otherwise, the first element will be forcibly removed and used as the keys for all values. In the next release this will be addressed by allowing an option to be set and, in the abscence of headers, by passing a string containing the headers.*
* *If the CSV contains broken lines (lines that don't match the number of header items, or empty lines), those will **NOT** be added to the final JS Object.*
 
[Back to top](#back)

---

# Parser de Strings CSV para um Objeto JavaScript <a name="ptbr"></a>

### Descrição
*Uma função JavaScript que recebe uma string resultado da saída da leitura de um arquivo CSV e realiza um processo de parse retornando um **Objeto JavaScript**.*

### Características
* *Faz o parsing de uma string CSV para um objecto JS*
* *Permite diferentes tipos de separadores (vírgulas, ponto-e-vírgula etc)* 
* *Possui uma opção de realizar o *TRIM()* das chaves e valores a fim de limpá-los de possíveis espaços extras antes e depois deles.*

### Tecnologias:
| Nome | Descrição de Uso |
| --: | :-- |
| ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | Linguagem de scripting usada para escrever a função |

### Como instalar
1. Faça o download do arquivo da função.
2. Se estiver usando NodeJS, abra-o e adicione uma declaração `exports` no fim do arquivo, daí faça o **require** do módulo no arquivo principal que usará a função, da seguinte forma:
```
module.exports = parseCSVStringToJSObject
```
3. Se estiver usando JavaScript puro num ambiente de browser, adicione `export default` na declaração da função, mude o formato do arquivo para `.mjs`, e então faça o **import**  do módulo, e não esqueça de atualizar o aruivo HTML para ler o módulo (adicione uma tag script referenciando o arquivo). No arquivo da função, faça esta alteração:
```
export default function parseCSVStringToJSObject(string, separator, hasExtraSpaces, fileName)
```
E no arquvio HTML:
```
<script type="module" src="./parseCSVStringToJSObject.mjs" defer></script> 
```

### Como chamar a função
* O parâmetro The `string` se refere à saída em formato de String do arquivo CSV lido. 
* O parâmetro `separator` se refere ao separador usado no CSV (vírgula, ponto-e-vírgula etc) 
* O parâmetro `hasExtraSpaces` se refere a um valor booleanoque irá determinar se a função deve ou não realizar o TRIM() nas chaves e valores (remover espaços extras antes e depois)   
* O parâmetro `fileName` se refe a uma string qualquer que o usuário deseje usar. Essa string será usada para dar nome à chave que guardará o Array contendo os objetos transformados do arquivo CSV
Observe a declaração da função
```
function parseCSVStringToJSObject(string, separator, hasExtraSpaces, fileName)
```
Agora observe um exemplo de uma chamada da função. O exemplo se refere a um arquivo CSV fictício contendo `58 usuários` cuja saída em formato de texto foi atribuída a uma variável `outputString`, cujo separador é um ponto-e-vírgula `;`, cujos valores podem conter espaços em branco. Tratando-se de um arquivo sobre usuários, passarei a string 'users', poderia ser qualquer nome que você desejar.
```
parseCSVStringToJSObject(outputString, ";", true, 'users')
```
Esse exemplo retornaria algo como:
```
{users: Array(58)}
```

### Notas, Problemas Conhecidos & Releases Futuras
* *O arquivo CSV **TEM** que conter uma primeira linha de cabeçalho, senão o primeiro elemento do CSV será eliminado e transformado em chaves para todos os outros elementos. Na release seguinte essa limitação será retirada para permitir que o usuário indique que tem ou não tem cabeçalho e, não tendo cabeçalho, inserir uma string contendo esses elementos.*
* *Se o CSV contiver linhas 'quebradas' (linhas que contenham menos ou mais elementos do que o cabeçalho, ou linhas vazias), estas **NÃO** adicionadas ao Objeto JS retornado.*

[Voltar ao topo da página](#back)

---
