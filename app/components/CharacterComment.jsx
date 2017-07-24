var React = require('react');
var CharacterComment = React.createClass({
  onCommentSubmit: function(e) {
    e.preventDefault();
    if(this.refs.comment.value.length > 1) {
      var comment = this.refs.comment.value;
      this.refs.comment.value = ''
      this.props.onCommentSubmit(comment, this.props.id);

    }
  },
  render: function() {
    var {id,comments} = this.props;

    var unwrappedComments = comments.map((comment) => {
      return (
        <p>{comment}</p>
      )
    })
    return (
      <div className="character-comment">
        <span className="comment-list">{unwrappedComments}</span>
        <form onSubmit={this.onCommentSubmit}>
          <input type="text" ref="comment" placeholder="Enter a comment"/>
          <button>Comment</button>
        </form>
      </div>
    );
  }
});

module.exports = CharacterComment;
