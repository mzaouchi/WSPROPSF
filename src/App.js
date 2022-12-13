import './App.css'
import Content from './Components/Content'

function App() {
  const name = "Riadh"
  const age = 20
  const pays = ['Angola','France','Maroc','Tunisie']
  const trophe = {pays : 'France',nbrT : 3,participation : 17,obj : {cp : 2034}}
  const firstName = 'Bousbi3'
  const handleAlert=()=> alert('I am bousbi3')
  const handleName=(a)=> alert(`I am ${a}`)
  const show = true
  return (
    <div>
      <h1>Workshop Props</h1>
      <Content name={name} age={age} pays={pays} trophe={trophe} firstName={firstName} handleAlert={handleAlert} handleName={handleName} show={show}>
        <h2>Children Props</h2>
        <img src='/1.jpg' alt='Not Found'/>
        <p>lorem lorem</p>
      </Content>

    </div>
  )
}

export default App;
