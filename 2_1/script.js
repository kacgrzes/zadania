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

var moviesElements = movies.map(function(movie) {
    return React.createElement('li', {key: movie.id},
        React.createElement('h2', {}, movie.title),
        React.createElement('p', {}, movie.desc),
        React.createElement('img', {src: movie.image})
    );
});


var element =
    React.createElement('div', {}, 
        React.createElement('h1', {}, 'Lista filmów'),
        React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));