import React from 'react'


  function UserInfo(props) {
    return (
      <div className="UserInfo">
        <div className="UserInfo-name">
          {props.user}
        </div>
      </div>
    );
  }

  function CommentText(props) {
      return (
        <p className="Comment-text">
        {props.text}
        </p>
      )
  }

  function Date(props) {
    return (
        <div className="Comment-date">
        {props.date}
      </div>
    )
}

function Comment(props) {
    return (
      <div className="Comment">
        <UserInfo user={props.user}/>
        <CommentText text={props.text} />
        <Date date={props.date} /> 
      </div>
    );
  }


  export default Comment;