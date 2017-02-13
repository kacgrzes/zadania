var movies = [
  {
    id: 1,
    title: 'Zaklęte rewiry',
    desc: 'Film o pewnej znanej restauracji, Romek Wilhelmi i Marek Kondrat',
    image: 'images/1.jpg',
  },
  {
    id: 2,
    title: 'Pociąg',
    desc: 'Film o pewnym chirurgu co pani mu nie chciala wysiasc z kuszetki na hel',
    image: 'images/2.jpg'
  },
  {
    id: 3,
    title: 'Barwy ochronne',
    desc:'Starszy stopniem naukowiec nabija się z adiunkta',
    image:'images/3.jpg',
  },
  {
    id: 4,
    title: 'Nóż w wodzie',
    desc:'Nie bierz nieznajomego na jacht, bedziesz miał wyrzuty sumienia a on sie prześpi z twoja żoną',
    image:'images/4.jpg',
  },
  {
    id: 5,
    title: 'Wielki Szu',
    desc:'Kto gra w karty ten ma łeb obdarty',
    image:'images/5.jpg',
  },
  {
    id: 6,
    title: 'Kroll',
    desc:'Nie uciekaj z wojska bo Linda i tak cie zlapie, ale pojdzie siedzieć twoj kumpel',
    image:'images/6.jpg',
  },
];


var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
      )
  }
});


var Movie = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
    },

    render: function() {
    return React.createElement('li', {},
      React.createElement(MovieTitle, {title: this.props.item.title}),
      React.createElement(MovieDesc, {desc: this.props.item.desc}),
      React.createElement(MovieImg, {image: this.props.item.image})
    );
  }
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement('p', {}, this.props.desc)
  }
});

var MovieImg = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired
  },

  render: function() {
    return React.createElement('img', {src: this.props.image})
  }
});

var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
    },

  render: function() {
      var moviesList = this.props.movies.map(function(movie) {
        return React.createElement(Movie, {key: movie.id, item: movie});
      })

    return( 
    React.createElement('div', {},
    React.createElement('h1', {}, 'Moje ulubione filmy'), 
    React.createElement('ul', {}, moviesList)
    )
   )
  }
});

var element = React.createElement(MovieList,  {movies: movies});
ReactDOM.render(element, document.getElementById('app'));
