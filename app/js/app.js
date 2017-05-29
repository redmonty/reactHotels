var More = React.createClass({
	render(){
		return <button className={'moreBtn ' + (this.props.state==false?'':'none')}onClick={this.props.click}>See more</button>
	}
});
var Input = React.createClass({
	render(){
		return <label>Search hotel <input type="search" onChange={this.props.change} /></label>
	}
});
var Hotel = React.createClass({
	
	getInitialState() {
		return {
			popup: false/*when popup true - hotel must take class popup*/
		}

	},
	clickMoreBtn(e) {
		this.setState({
			popup: true
		})

	},
	render() {
		return(
			<article className={'hotel '+ (this.state.popup?'popup':'')}>
				<img src={this.props.img} width='100px' height='100px' className='listImg'/>
				<div><h3 className='hotel_title'>{this.props.name}</h3>
				<div className='hotel_description'>{this.props.desc}</div></div>
				<label className={'dataInput '+(this.state.popup==false?'none':'')}>Забронировать<input type='date'/></label>
				<More click={this.clickMoreBtn} state={this.state.popup}/>
				
			</article>
		);
	}
});

var App = React.createClass({
	getInitialState() {
		return {
			displayedHotels: store
		};
	},
	searchHotels(e) {
		var searched = e.target.value.toLowerCase();
		var displayedHotels = store.filter(function(el){
			var searchTitle = el.title.toLowerCase();
			return searchTitle.indexOf(searched) !== -1;
		});
		this.setState({
			displayedHotels: displayedHotels
		});
		console.log(e.target);
		
	},
	render() {
		return(
			<div>
				<Input change={this.searchHotels}/>
				<section className='hotels_wrap'>
					{
					 this.state.displayedHotels.map(function(e){
						return <Hotel name={e.title}
								img={e.img}
								key={e.id}
								desc={e.description}/>
					})
					}
				</section>
			</div>
		)
	}
})

ReactDOM.render(
	<div><App /></div>,
	document.getElementById('container')
);