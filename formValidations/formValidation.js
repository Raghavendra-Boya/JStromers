// // document.getElementById("myForm").addEventListener("submit", function(e) {
// //     let username = document.getElementById("username").value.trim();
// //     let email = document.getElementById("email").value.trim();
// //     let password = document.getElementById("password").value.trim();
// //     let errorMsg = "";
// // console.log(password.length);
// //     if(username === "") {
// //         errorMsg += "UserName nus be required. <br>";
// //     }
// //     if(email === "") {
// //         errorMsg += "Email is required. <br>";
// //     }
// //     if(password === "") {
// //         errorMsg += "Password must be at least 6 characters. <br>";
// //     }

// //     if(errorMsg !== "") {
// //         document.getElementById("error").innerHTML = errorMsg;
// //         e.preventDefault();
// //     }
// // });


// //RegEx:
// //Why:
// /*
// Syntax:
// let pattern = /patten/---literal Syntax
// let pattern = new RegExp("pattern")---Constructor Syntax

// 1. ^ - start with
// meaning: matches the beginning of a string
// example: ^a - matches any string that starts with 'a'
// 2. $ - ends with
// meaning: matches the end of a string
// example: a$ - matches any string that ends with 'a'
// 3. . - any character
// meaning: matches any single character except newline
// example: a.b - matches 'a' followed by any character and then 'b' (e.g., 'acb', 'a1b', 'a b')
// 4. * - 0 or more times
// meaning: matches the preceding element zero or more times
// example: ab* - matches 'a' followed by zero or more 'b's (e.g., 'a', 'ab', 'abb', 'abbb')
// 5. + - 1 or more times
// meaning: matches the preceding element one or more times
// example: ab+ - matches 'a' followed by one or more 'b's (e.g., 'ab', 'abb', 'abbb', but not 'a')
// 6. ? - 0 or 1 time
// meaning: matches the preceding element zero or one time
// example: ab? - matches 'a' followed by zero or one 'b' (e.g., 'a', 'ab')
// 7. \ - escape character
// meaning: used to escape special characters or denote special sequences
// example: \. - matches a literal dot character '.'
// 8. [] - character set
// meaning: matches any one of the characters inside the brackets
// example: [abc] - matches 'a', 'b', or 'c'
// 9. {} - quantifier/braces
// meaning: specifies the number of occurrences of the preceding element
// example: a{2,4} - matches 'a' repeated 2 to 4 times (e.g., 'aa', 'aaa', 'aaaa')
// 10. | - OR operator
// meaning: acts as a logical OR between expressions
// example: abc|def - matches either 'abc' or 'def'
// 11. () - grouping
// meaning: groups multiple tokens together and creates a capture group for extracting a substring or using backreferences
// example: (abc)+ - matches one or more occurrences of the sequence 'abc' (e.g., 'abc', 'abcabc', 'abcabcabc')

// 12. \d - digit
// meaning: matches any digit character (0-9)
// example: \d - matches '0', '1', '2', ..., '9'
// 13. \D - non-digit
// meaning: matches any character that is not a digit
// example: \D - matches 'a', '!', ' ', etc., but not '0'-'9'

// 14. \w - word character
// meaning: matches any alphanumeric character (letters, digits, underscore)
// example: \w - matches 'a'-'z', 'A'-'Z', '0'-'9', '_'
// 15. \W - non-word character
// meaning: matches any character that is not a word character
// example: \W - matches '!', ' ', etc., but not 'a'-'z', 'A'-'Z', '0'-'9', '_'
// 16. \s - whitespace
// meaning: matches any whitespace character (spaces, tabs, line breaks)
// example: \s - matches ' ', '\t', '\n', etc.
// 17. \S - non-whitespace
// meaning: matches any character that is not a whitespace character
// example: \S - matches 'a', '1', '!', etc., but not ' ', '\t', '\n'

// 18.[^ ] - negated character set
// meaning: matches any character not in the brackets
// example: [^abc] - matches any character except 'a', 'b', or 'c'

// 19.



// */

// let pattern = /abc/;
// let pattern2 = new RegExp("abc");
// console.log(pattern.test("abcdef")); //true
// console.log(pattern2.test("xyz")); //false


// let caret = /^a/;
// console.log(caret.test("abcdef")); //true
// console.log(caret.test("zabcdef")); //false
// console.log(caret.test("a")); //true
// console.log(caret.test("Aabcdef")); //false

// let dollar = /World$/;
// console.log(dollar.test("defa")); //true
// console.log(dollar.test("defaz")); //false
// console.log(dollar.test("World")); //true
// console.log(dollar.test("Worlds")); //false
// console.log(dollar.test("Hello World")); //true
// console.log(dollar.test("Hello world")); //false

// let dot = /h.t/;
// console.log(dot.test("hat")); //true
// console.log(dot.test("h1t")); //true
// console.log(dot.test("h  t"));//false
// console.log(dot.test("ht")); //false
// console.log(dot.test("heat")); //false

// let star = /go*gle/;
// console.log(star.test("ggle")); //true
// console.log(star.test("gogle")); //true
// console.log(star.test("google")); //true
// console.log(star.test("gooogle")); //true
// console.log(star.test("ggooogle")); //false
// console.log(star.test("gole")); //false
// console.log(star.test("gogglle")); //false

// let plus = /go+gle/;
// console.log(plus.test("ggle")); //false
// console.log(plus.test("gogle")); //true
// console.log(plus.test("google")); //true
// console.log(plus.test("gooogle")); //true
// console.log(plus.test("ggooogle")); //false
// console.log(plus.test("gole")); //false
// console.log(plus.test("gogglle")); //false

// let question = /colou?r/;
// console.log(question.test("color")); //true
// console.log(question.test("colour")); //true
// console.log(question.test("colouur")); //false
// console.log(question.test("colr")); //false
// console.log(question.test("colo")); //false

// let escape = /www\.example\.com/;
// console.log(escape.test("www.example.com")); //true
// console.log(escape.test("wwwXexampleXcom")); //false
// console.log(escape.test("www.exampleXcom")); //false
// console.log(escape.test("wwwXexample.com")); //false
// console.log(escape.test("www.examplecom")); //false

// let charSet = /[abc]/;
// console.log(charSet.test("apple")); //true
// console.log(charSet.test("banana")); //true
// console.log(charSet.test("grape"));//true
// console.log(charSet.test("kiwi")); //false
// console.log(charSet.test("xyz")); //false

// let braces = /a{2,4}/;
// console.log(braces.test("a")); //false
// console.log(braces.test("aa")); //true
// console.log(braces.test("aaa")); //true
// console.log(braces.test("aaaa")); //true
// console.log(braces.test("aaaaa")); //false
// console.log(braces.test("baaaac")); //true

// let orOp = /cat|dog/;
// console.log(orOp.test("cat")); //true
// console.log(orOp.test("dog")); //true
// console.log(orOp.test("catalog")); //true
// console.log(orOp.test("dogma")); //true
// console.log(orOp.test("mouse")); //false
// console.log(orOp.test("caterpillar")); //true
// console.log(orOp.test("hotdoog")); //false

// let group = /(abc)+/;
// console.log(group.test("abc")); //true
// console.log(group.test("abcabc")); //true
// console.log(group.test("abcabcabc")); //true
// console.log(group.test("ab")); //false
// console.log(group.test("a")); //false
// console.log(group.test("abcd")); //true
// console.log(group.test("xabc")); //true
// console.log(group.test("acbx")); //false

// let digit = /[0-9]/;
// console.log(digit.test("abc")); //false
// console.log(digit.test("a1bc")); //true
// console.log(digit.test("123")); //true
// console.log(digit.test("!@#")); //false
// console.log(digit.test("abc4xyz")); //true
// console.log(digit.test("xyz")); //false

// let nonDigit = /\D/;
// console.log(nonDigit.test("123")); //false
// console.log(nonDigit.test("a123")); //true
// console.log(nonDigit.test("!@#")); //true
// console.log(nonDigit.test("456xyz")); //true
// console.log(nonDigit.test("789")); //false

// let wordChar = /\w/;
// console.log(wordChar.test("!@#")); //false
// console.log(wordChar.test("abc")); //true
// console.log(wordChar.test("A1_")); //true
// console.log(wordChar.test(" ")); //false
// console.log(wordChar.test("xyz123")); //true
// console.log(wordChar.test("")); //false

// let nonWordChar = /\W/;
// console.log(nonWordChar.test("abc")); //false
// console.log(nonWordChar.test("A1_")); //false
// console.log(nonWordChar.test("!@#")); //true
// console.log(nonWordChar.test(" ")); //true
// console.log(nonWordChar.test("xyz123")); //false
// console.log(nonWordChar.test("")); //flase

// let whiteSpace = /\s/;
// console.log(whiteSpace.test("abc")); //false
// console.log(whiteSpace.test(" ")); //true
// console.log(whiteSpace.test("\t")); //true
// console.log(whiteSpace.test("\n")); //true
// console.log(whiteSpace.test("a b")); //true
// console.log(whiteSpace.test("xyz")); //false

// let nonWhiteSpace = /\S/;
// console.log(nonWhiteSpace.test(" ")); //false
// console.log(nonWhiteSpace.test("\t")); //false
// console.log(nonWhiteSpace.test("\n")); //false
// console.log(nonWhiteSpace.test("abc")); //true
// console.log(nonWhiteSpace.test("a b")); //false
// console.log(nonWhiteSpace.test("xyz")); //true

// let negatedSet = /[^abc]/;
// console.log(negatedSet.test("a")); //false
// console.log(negatedSet.test("b")); //false
// console.log(negatedSet.test("c")); //false
// console.log(negatedSet.test("d")); //true
// console.log(negatedSet.test("apple"));//false
// console.log(negatedSet.test("xyz")); //true
// console.log(negatedSet.test("")); //false

// //^[A_Za-z}{3,15}$---->User Name

// let userNamePattern = /^[A-Za-z]{3,15}$/;
// console.log(userNamePattern.test("John")); //true
// console.log(userNamePattern.test("A1")); //false
// console.log(userNamePattern.test("ab")); //false
// console.log(userNamePattern.test("ThisIsAReallyLongUsername")); //false
// console.log(userNamePattern.test("User_123")); //false
// console.log(userNamePattern.test("alice")); 

// //^[6-9][0-9]{9}$---->Phone Number
// let phonePattern = /^[6-9][0-9]{9}$/;
// console.log(phonePattern.test("9876543210")); //true
// console.log(phonePattern.test("1234567890")); //false
// console.log(phonePattern.test("987654321")); //false
// console.log(phonePattern.test("0987654321")); //false
// console.log(phonePattern.test("98765432101")); //false
// console.log(phonePattern.test("98765abcd0")); //false

// //^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$---->Email



let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");

//Focus Styling
document.querySelectorAll("input").forEach((input) => {
    input.onfocus = () => input.classList.add("border-green-500");
    input.onblur = () => validateForm(input);
});

function validateForm(input){
    let value  = input.value.trim();
   if(input.id === "username"){
    let pattern = /^[A-Za-z]{3,}$/;
    if(!pattern.test(value)){
        input.classList.add("border-red-500");
        document.getElementById("userError").innerText = "Only letters, min 3 chars";
    }
    else{
        input.classList.remove("border-red-500");
        document.getElementById("userError").innerText = "✅ Valid";
    }
    }

    if(input.id === "email"){
        let pattern = /^[A-Za-z0-9._]+@[A-Za-z]+\.[A-Za-z]{2,}$/;
        if(!pattern.test(value)){
            input.classList.add("border-red-500");
            document.getElementById("emailError").innerText = "Enter a valid email";
        }
        else{
            input.classList.remove("border-red-500");
            document.getElementById("emailError").innerText = "✅ Valid";
        }
        }
        if(input.id === "phone"){
            let pattern = /^[0-9]{10}$/;
            if(!pattern.test(value)){
                input.classList.add("border-red-500");
                document.getElementById("phoneError").innerText = "Enter 10 digit number";
            }
            else{
                input.classList.remove("border-red-500");
                document.getElementById("phoneError").innerText = "✅ Valid";
            }
            }
            if(input.id === "password"){
                let pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,}$/;
                if(!pattern.test(value)){
                    input.classList.add("border-red-500");
                    document.getElementById("passError").innerText = "Min 6 chars, 1 upper, 1 lower, 1 digit, 1 special char";
                }
                else{
                    input.classList.remove("border-red-500");
                    document.getElementById("passError").innerText = "✅ Valid";
                }
            }
            if(input.id === "confirmPassword"){
                if(value === password.value && value !== ""){
                    input.classList.remove("border-red-500");
                    document.getElementById("confirmError").innerText = "✅ Passwords match";
                }
                else{
                    input.classList.add("border-red-500");
                    document.getElementById("confirmError").innerText = "❌ Passwords do not match";
                }
            }
}

document.getElementById("myForm").addEventListener("submit", function(e){
    let errors = document.querySelectorAll(".text-red-500");
    let hasError = false;

    for(let i = 0; i < errors.length; i++){
        if(errors[i].innerText !== ""){
            hasError = true;
            break;
        }   
    }
    if(hasError){
        e.preventDefault();
        alert("Please fix errors before submitting the form.");
    }
    else{
        alert("Form submitted successfully!");
    }
}
);



               