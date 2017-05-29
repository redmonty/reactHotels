
function objectFromJSON(JSONu){
	var x = new XMLHttpRequest();
	x.open('GET',JSONu,true);
	x.send();
	x.onload = function() {
		if(this.status==200) {
			var objectFromJSON = JSON.parse(url);
		}
	}
	return objectFromJSON;
}

var contacts = '{ "contact" : [' +
'{ "name":"John" , "tel":"0302021234" },' +
'{ "name":"Anna" , "tel":"893368645" },' +
'{ "name":"Peter" , "tel":"0023423084" } ]}';

var Contact = React.createClass({
	getInitialState(){
		return {
			visibleContacts: contacts,
			delButtonVisibility: false
		}
	},
	componentWillMount(){
		this.setState({
			visibleContacts: JSON.parse(this.state.visibleContacts).contact
		})
	},
	clickMoreBtn(e) {
		ReactDOM.findDOMNode(this.refs.contact).removeChild(e.target.parentNode);
	},
	changeContacts(e){
		
		var delButtonVisibility = (this.state.delButtonVisibility==true)?false:true;
		this.setState({
			delButtonVisibility:delButtonVisibility
		})
		
	},
	
	render() {
		return(
			<article className='contact' ref='contact' >
			{
				this.state.visibleContacts.map((e,key)=> {
					return <p className='contact-name'>{e.name} : 
								<span className='contact-tel'>{e.tel}</span>
								<button onClick={this.clickMoreBtn} className={(this.state.delButtonVisibility==true)?'visible-btn':'del-btn'} >∆</button>
							</p>
				})
			}
			<span className='change-contacts' onClick={this.changeContacts}>{(this.state.delButtonVisibility==true)?'Завершить редактирование':'редактировать'}</span>
			</article>
		);
	}
});

var ContactsApp = React.createClass({
	
	render(){
		return(
			<section className='contacts-wrap'>
				<Contact/>
			</section>
		);
	}
})

ReactDOM.render(
	<ContactsApp />,
	document.getElementById('container')
);
