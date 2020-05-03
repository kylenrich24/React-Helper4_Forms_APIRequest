# 🌀 React-Helper4_Forms_APIRequest 🌀

<img src="https://sunscrapers.com/blog/wp-content/uploads/2018/11/1__DOHv30w-0eI-Ysz5U47Yg.png" height=500 width=900>


```jsx
state= {term: ""}                         // we can get the value of input and put it in our state so we can use it 

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

