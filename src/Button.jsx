
function printHello (){
 console.log("Hello Dev")
}

function greet (){
 console.log("Bye Bye")
}


export default function Button(){
    return(
        <div>
            <button onClick={printHello} >Click me!</button>
             <p  onClick={greet}> This is Byee </p> 
             
             
        </div>
       
    );
}