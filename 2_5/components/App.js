var contacts = [
  {
  	id: 1,
  	firstName: 'Maciej',
  	lastName: 'Nowakowski',
  	email: 'maciejnowakowski@mm.ru',
  },
  {
  	id: 2,
  	firstName: 'Robert',
  	lastName: 'Dados',
  	email: 'robur@gmail.com',
  },
  {
  	id: 3,
  	firstName: 'Zbigniew',
  	lastName: 'Grześków',
  	email: 'zbynek@tsm.com.pl', 
  },
];

var contactForm = {
  	firstName: '',
  	lastName: '',  
  	email: '',
  };


     
var App = React.createClass({
	render: function(){
		return (
			React.createElement('div', {className: 'app'},
				React.createElement(ContactForm, {contact: contactForm}),
				React.createElement(Contacts, {items: contacts})
			)
		);
	}
})
 
 