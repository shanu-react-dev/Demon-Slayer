## Operators

_Operators in JavaScript or any porgramming language is a predefined symbol used to perform some specific operations on operands or variables. There are several operators in JavaScript as follows._

1. **Arithmetic Operator:** These operators are specific symbol which is predefiend and used to perform mathematical operation such as addition, subtraction, multiplication, division, modulus and Exponential.
   1. **Addition:** This operator converts the result as a string if any operand is a string. we can use plus `+` symbol to perform addition operations.
      | First Operand | Second Operand | Result Type | Notes |
      |--------------|---------------|-------------|-------|
      | number | number | number | Numeric addition |
      | number | string | string | Concatenation |
      | number | boolean | number | Boolean → number |
      | number | bigint | Error | Cannot mix BigInt and Number |
      | number | symbol | Error | Cannot convert Symbol |
      | number | undefined | number (`NaN`) | `NaN` is a number |
      | number | null | number | `null` → 0 |
      | string | number | string | Concatenation |
      | string | string | string | Concatenation |
      | string | boolean | string | Concatenation |
      | string | bigint | string | Concatenation |
      | string | symbol | Error | Cannot convert Symbol to string implicitly |
      | string | undefined | string | Concatenation |
      | string | null | string | Concatenation |
      | boolean | number | number | Boolean → number |
      | boolean | string | string | Concatenation |
      | boolean | boolean | number | `true=1`, `false=0` |
      | boolean | bigint | Error | Cannot mix BigInt and Number |
      | boolean | symbol | Error | Cannot convert Symbol |
      | boolean | undefined | number (`NaN`) | `undefined` → `NaN` |
      | boolean | null | number | `null` → 0 |
      | bigint | number | Error | Cannot mix BigInt and Number |
      | bigint | string | string | Concatenation |
      | bigint | boolean | Error | Cannot mix BigInt and Number |
      | bigint | bigint | bigint | BigInt addition |
      | bigint | symbol | Error | Invalid conversion |
      | bigint | undefined | Error | Invalid conversion |
      | bigint | null | Error | Invalid conversion |
      | symbol | number | Error | Invalid conversion |
      | symbol | string | Error | Cannot convert Symbol to string implicitly |
      | symbol | boolean | Error | Invalid conversion |
      | symbol | bigint | Error | Invalid conversion |
      | symbol | symbol | Error | Symbols cannot be added |
      | symbol | undefined | Error | Invalid conversion |
      | symbol | null | Error | Invalid conversion |
      | undefined | number | number (`NaN`) | `undefined` → `NaN` |
      | undefined | string | string | Concatenation |
      | undefined | boolean | number (`NaN`) | `undefined` → `NaN` |
      | undefined | bigint | Error | Invalid conversion |
      | undefined | symbol | Error | Invalid conversion |
      | undefined | undefined | number (`NaN`) | `NaN + NaN` |
      | undefined | null | number (`NaN`) | `NaN + 0` |
      | null | number | number | `null` → 0 |
      | null | string | string | Concatenation |
      | null | boolean | number | `null` → 0 |
      | null | bigint | Error | Invalid conversion |
      | null | symbol | Error | Invalid conversion |
      | null | undefined | number (`NaN`) | `0 + NaN` |
      | null | null | number | `0 + 0 = 0` |

      _In JavaScript, arithmetic operators generally try to convert operands to numbers and produce a numeric result. The main exception is the + operator, which can perform string concatenation._

   2. **Subtraction:** The subtraction operator is always used to perform subtraction between two operands.
      | First Operand | Second Operand | Result Type | Notes |
      | ------------- | -------------- | -------------- | ---------------------------------------- |
      | number | number | number | Numeric subtraction |
      | number | string | number | String → number |
      | number | boolean | number | Boolean → number |
      | number | bigint | Error | Cannot mix BigInt and Number |
      | number | symbol | Error | Cannot convert Symbol |
      | number | undefined | number (`NaN`) | `undefined → NaN` |
      | number | null | number | `null → 0` |
      | string | number | number | String → number |
      | string | string | number | Both converted to numbers |
      | string | boolean | number | Numeric conversion |
      | string | bigint | Error | Cannot mix BigInt and Number |
      | string | symbol | Error | Cannot convert Symbol |
      | string | undefined | number (`NaN`) | Invalid numeric conversion |
      | string | null | number | `null → 0` |
      | boolean | number | number | `true=1`, `false=0` |
      | boolean | string | number | Numeric conversion |
      | boolean | boolean | number | `1-1`, `1-0`, etc. |
      | boolean | bigint | Error | Cannot mix BigInt and Number |
      | boolean | symbol | Error | Cannot convert Symbol |
      | boolean | undefined | number (`NaN`) | Invalid conversion |
      | boolean | null | number | `null → 0` |
      | bigint | number | Error | Cannot mix BigInt and Number |
      | bigint | string | Error\* | Unless string can be converted to BigInt |
      | bigint | boolean | Error | Cannot mix BigInt and Number |
      | bigint | bigint | bigint | BigInt subtraction |
      | bigint | symbol | Error | Invalid conversion |
      | bigint | undefined | Error | Invalid conversion |
      | bigint | null | Error | Invalid conversion |
      | symbol | any | Error | Symbol cannot be converted |
      | undefined | number | number (`NaN`) | `NaN - x` |
      | undefined | string | number (`NaN`) | `NaN - x` |
      | undefined | boolean | number (`NaN`) | `NaN - x` |
      | undefined | bigint | Error | Invalid conversion |
      | undefined | symbol | Error | Invalid conversion |
      | undefined | undefined | number (`NaN`) | |
      | undefined | null | number (`NaN`) | |
      | null | number | number | `0 - x` |
      | null | string | number | String → number |
      | null | boolean | number | `0 - bool` |
      | null | bigint | Error | Invalid conversion |
      | null | symbol | Error | Invalid conversion |
      | null | undefined | number (`NaN`) | |
      | null | null | number | `0 - 0 = 0` |
   3. **Multiplication:** This operator is used to perform multiplication between two operands using `*` Symbol.
