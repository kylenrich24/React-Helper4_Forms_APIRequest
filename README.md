# 🌀 React-Helper4_Forms_APIRequest 🌀

<img src="https://sunscrapers.com/blog/wp-content/uploads/2018/11/1__DOHv30w-0eI-Ysz5U47Yg.png" height=500 width=900>
<br>
<br>

<h2>🌀 Controlled Elements</h2>
<br>
We handle user input by controlling elements

```jsx
state = { term: "" }                         // we can get the value of input and put it in our state so we can use it 

onFormSubmit = (event) => {
 event.preventDefault()                   // the default of a form when pressing enter is to send it to the back-end; we don't want this
 console.log(this.state.term)
}

render() {
 return(
  <form onSubmit={this.onFormSubmit}>                            // calls onFormSubmit; we're passing a reference to the callback so no () 
   <input 
    type="text"
    onChange={(e) => this.setState({ term: e.target.value })}    // when the input changes we put the value to our state
    value={this.state.term}                                      // we do this so we always have control of the value input; for UI 
   />
  </form>
 )
}
```
<br>
<br>

<h2>🌀 Communicating Child to Parent</h2>
<br>
<br>

&nbsp;🌀&nbsp; We can use functions from our parent components- ie passing the function as a prop to a child component<br>
&nbsp;🌀&nbsp; The child calls the function with its parameters - it's kinda like we're giving these params to the parent because the function is in the parent<br>
<br>
<img src="https://miro.medium.com/max/790/0*Xzkw0-T4Uea3d5Yh.png" height=250 width=400>
<br>
<br>
parent

```jsx
class App extends Component {
 onSearchSubmit(term) {                            // we're using this with params from child
  console.log(term)
 }
 
 render(){
  return (
   <SeachBar onTermSubmit={this.onSearchSubmit}/>   // passing a function to child
  )
 }
}
```

<br>
child
<br>
<br>

```jsx
class SearchBar extends Component {
 onFormSubmit = (event) => {
  this.props.onSubmit(this.state.term)              // using the function from <App/> 
 }
}
```
