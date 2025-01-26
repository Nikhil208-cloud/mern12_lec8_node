export default function Test({name1,roll1 ,add1}){
    var a  = 123;
    var b = "mern";
    // ye a,b state hai
    return(
        <div>
            my text file {a} {b} {name1} {roll1}
            <button onclick={add1}>click</button>
        </div>
    )
    // const{ name1,roll1}=props abb chahiye props likho ya phir name1 or roll1 baat ekk hai bass faraq ye hoga ki props ke saath .name1 or roll1 likhna padega but name1,roll1 ke saath nahi likhna padega
     //return jo hai wo jsx statement return khali ekk hai statement hoti hai
}
// idhar props.name print karega
// const props={ name1="radheshyam ji"} ye name jo hai app.js sai test.js mai ayega
//const props={ name1:'radheshyam ji' roll1:7}
 export function Test2(props){
    var a="mern12";
    return(
        <div>
            my test2 file {a} student name is{props.name1} and roll no is {props.roll1}
        </div>
    )
}
 export function Test3(){
    return(
        <div>
            my test3file
        </div>
    )
}
//export  default Test; this is right
//export Test2; this is giving error
//export Test3; this is giving error