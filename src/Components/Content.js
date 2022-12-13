// import Test from "./Test"
import PropTypes from 'prop-types';
let Content=({name,age,pays,trophe,firstName,handleAlert,handleName,show,children})=>{
// let Content=(props)=>{
    // console.log(props)
    return(
        <div>
            
            {/* <h2>Content component</h2>
            <h3>My name is : {props.name}</h3>
            <h4>My age is : {props.age}</h4>
            <ul>
                {
                    props.pays.map((el,i)=> <li key={i}>{el}</li>)
                }
            </ul>
            <h4>{props.trophe.nbrT}</h4>
            <h5>{props.trophe.obj.cp}</h5> */}

            {/* <Test name={props.name}/> */}
            {
                children
            }
            <h2>Content component</h2>
            <h3>My name is : {name}</h3>
            <h4>My age is : {age}</h4>
            <ul>
                {
                    pays.map((el,i)=> <li key={i}>{el}</li>)
                }
            </ul>
            <h4>{trophe.nbrT}</h4>
            <h5>{trophe.obj.cp}</h5>
            <h6>{firstName}</h6>
            <button onClick={handleAlert}>Hello</button>
            <button onClick={()=>handleName("Montassar")}>Name</button>
            {
                show && <h1>Hani Affichit</h1>
                
            }
            
           


        </div>
    )
}


Content.defaultProps={
    name : "Mahmoud"
}

Content.propTypes = {
    
   age: PropTypes.number
}


export default Content