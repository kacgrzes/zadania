var Counter = React.createClass({
	
	getInitialState: function(){
		console.log('getInitialState');
		return{
			counter : 0
			};

		
	},

	increment: function(){
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function(){
		this.setState({
			counter: this.state.counter - 1
		});
	},

	render: function(){
		return React.createElement('div', {},
			React.createElement('button', {onClick: this.decrement}, '-'),
			React.createElement('span', {}, ' Licznik ' + this.state.counter + ' '),
			React.createElement('button', {onClick: this.increment}, '+')
			
			);
	},

	getDefaultProps: function() {
		console.log('Pobiera propsy')
    },

	 
	componentWillMount(){
		console.log('componentWillMount  - zaraz nastapi załadowanie komponentu')
   },
   
   componentDidMount(){
   		console.log('componentDidMount, załadowano komponent, tu można coś wgrac z servera, manipulowac DOMem')
   },

   componentWillReceiveProps(newProps){
   		console.log('componentWillReceiveProps - sprawdza nowe propsy')
   },

   shouldComponentUpdate(newProps, newState){
   		console.log('shouldComponentUpdate - sprawdza czy re-renderować');
   		return true;
   },

   componentWillUpdate(nextProps, nextState){
   		console.log('componentWillUpdate - bo zmiana w stanie lub propsach, więc można re-renderować' );
   },

   componentDidUpdate(prevProps, prevState){
   		console.log('componentDidUpdate - komponent zaktualizowany')
   },

   componentWillUnmount(){
   		console.log('componentWillUnmount komponent zostal zdemontowany z DOM-u')
   },

})

var Unmount = React.createClass({
	demontuj : function (){
		console.log('demontuje');
		ReactDOM.unmountComponentAtNode(document.getElementById('app'));
	},

	render: function(){

		return  React.createElement('button',{onClick: this.demontuj}, 'unmount')

	}

})



var element = React.createElement('div', {}, React.createElement(Counter, {}),React.createElement(Counter,{}), React.createElement(Unmount, {}));
ReactDOM.render(element, document.getElementById('app'));