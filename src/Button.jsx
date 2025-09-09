
function handleClick (){
 console.log("Hello Dev")
}

function handleMouseOver (){
 console.log("Bye Bye")
}

function dbClick(){
    console.log("Doubly Clicked");
}


export default function Button(){
    return(
        <div>
            <button onClick={handleClick} >Click me!</button>
             <p  onMouseOver={handleMouseOver}> Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                 Vel veritatis commodi nemo nobis fuga sint ullam excepturi? Voluptates,
                 repellat repudiandae dolor, nisi provident doloribus porro perferendis, 
                 earum eum ducimus omnis! </p> 
                 <button onDoubleClick={dbClick}> Double Click me !!!</button>
             
             
        </div>
       
    );
}