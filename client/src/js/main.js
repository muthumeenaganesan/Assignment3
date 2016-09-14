var React= require('react');
var ReactDOM= require('react-dom');
var ChildComponent=require('./component/ChildComponent');
var Child2=require('./component/Child2');
var $=require('./vendor/jquery');

var MainComponent=React.createClass({


  getInitialState:function(){

  return ({ Data:[]});
},


update:function(a){
  var t=a;
  var url="http://www.omdbapi.com/?s="+t;

$.ajax({
     url: url,
     dataType: 'json',
     cache: false,
     success: function(temp) {
       this.setState({Data:temp.Search});
     }.bind(this),
   });


},
  render: function(){
    return (
      <div>
      <h2>Hello Muthu</h2>
      <ChildComponent data={this.update} />
      <Child2 data1={this.state.Data}/>

        </div>

    );
  }

});

ReactDOM.render(<MainComponent />, document.getElementById('app1'));
//ReactDOM.render(<ChildComponent />, document.getElementById('app2'));
