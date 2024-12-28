
export default function App(){
return(
  <div className="app">
<Logo/>
<Form/>
<PackingList/>
<Stats/>
  </div>
)
}

function Logo(){
  return (
    <div>
      <h1>Far Away</h1>
    </div>
  )
}

function Form(){
  return(
    <div className="add-form">
      what do you need for your trip
    </div>
  )
}

function PackingList(){
  return(
    <div className="list">List</div>
  )
}

function Stats(){
  return(
    <footer className="stats">
      <em>you have x items on your list,you alredy packed x(x%)</em>
    </footer>
  )
}