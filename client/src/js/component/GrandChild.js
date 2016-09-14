var React=require("react");




var GrandChild=React.createClass({

  render:function(){
  return(

      <div>
      <div>
      {this.props.title}
      </div>
      <div>
      {this.props.year}
      </div>
      <div>
      {this.props.imdbID}
      </div>
      <div>
      {this.props.type}
      </div>
      <div>
      <img src={this.props.poster} />
      </div>
      </div>
);
}
});
module.exports=GrandChild;
