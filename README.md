# 🌀 React-Helper4_Forms_APIRequest 🌀

<img src="https://sunscrapers.com/blog/wp-content/uploads/2018/11/1__DOHv30w-0eI-Ysz5U47Yg.png" height=500 width=900>


```jsx
state= {term: ""}

onFormSubmit = (event) => {
 event.preventDefault()         // the default of a form when pressing enter is to send it to the back-end; we don't want this
 console.log(this.state.term)
}

render() {
 return(
  <form onSubmit={this.onFormSubmit}>
   <input 
    type="text"
    onChange={(e) => this.setState({ term: e.target.value })}
   />
  </form>
 )
}
```

