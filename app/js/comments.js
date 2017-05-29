var Comment = React.createClass({
	
	render() {
		
		return (
			<div className='comment'>
				<p className='comment-text' >{this.props.commentValue}</p>
				<p className='comment-autor'>{this.props.authorValue}<span className='comment-data'></span></p>
			</div>
		)
	}
});
//<Comment authorValue={this.state.authorValue} commentValue={this.state.commentValue}/>
var AddComment = React.createClass({
	
	getInitialState(){
		return {
			disabledV: true,
			authorValue: '',
			commentValue: '',
			newsBlock: ''
		}
	},
	componentDidMount() {
		ReactDOM.findDOMNode(this.refs.author).focus();
	},
	onCheckRuleClick(e) {
		ReactDOM.findDOMNode(this.refs.alert_button).disabled = !e.target.checked;
		this.state.disabledV=(e.target.checked==true)?false:true;
		this.setState({
			disabledV:this.state.disabledV
		})
	},
	autorValueChange(e){
		this.setState({
			authorValue: e.target.value
		})
	},
	commentValueChange(e){
		this.setState({
			commentValue: e.target.value
		})
	},
	onBtnClickHandler(event) {

			event.preventDefault();
			console.log('asdfsg');
			ReactDOM.findDOMNode(this.refs.form).style.display='none';
		
		
	},
	
	render: function() {
		return (
			
		<form className='addNews' ref='form'>
				<input
					type='text'
					className='add__author'
					value={this.state.authorValue}
					placeholder='Ваше имя'
					ref='author' 
					onChange={this.autorValueChange}/> 
				<textarea
					className='add__text'
					value={this.state.commentValue}
					placeholder='Текст новости'
					ref='text'
					onChange={this.commentValueChange}>
				</textarea>
				<label className='add__checkrule'>
					<input type='checkbox' 
						defaultChecked={false} 
						ref='checkrule'
						onChange={this.onCheckRuleClick}
				/>Я согласен с правилами
        		</label>
        		<button
					className='add__btn'
					onClick={this.onBtnClickHandler}
					ref='alert_button'
					disabled={this.state.disabledV}>
					Add comment
					
				</button>
			</form>
		

		);
	}
});
var Comments = React.createClass({

	getInitialState() {
		return {
			comments: 0,
			
		}
	},
	addCommentHandler(e) {
		e.preventDefault();
		var addComments = ReactDOM.findDOMNode(this.refs.addComments);
		addComments.style.display='flex';
		var addCommentsLink = ReactDOM.findDOMNode(this.refs.addCommentsLink).style.display='none';
		},
	render() {
		return(
			<div className='comments-section'>
				
				<span className={(this.state.comments>0)?'none':''}>No comments!</span>
				<p ref='addCommentsLink' onClick={this.addCommentHandler}><a>Add comment</a></p>
				<AddComment ref='addComments'></AddComment>
				
				
			</div>
		)
	}
});
ReactDOM.render(
	<div><Comments /></div>,
	document.getElementById('container')
);

