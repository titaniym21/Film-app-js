
const { MyClass, variable, foo } = require("./MyModule");

/**
 * Функция bar использует различный функционал модуля MyModule: <br/>
 * [Переменная модуля]{@link module:MyModule~variable} <br/>
 * [Функция модуля]{@link module:MyModule~foo} <br/>
 * [Метод экземпляра]{@link module:MyModule~MyClass#foo} <br/>
 * [Статический метод]{@link module:MyModule~MyClass.foo} <br/>
 */
function bar() {}
