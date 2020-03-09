import React from 'react';

const UserComment = ({data, onDelete}) => {
  return (
    <div className="support-comment">
      <div className="support-comment-header">
        <div className="support-comment-user">
          <div className="support-comment-image">
            <img src={data.user.avatar} alt=""/>
          </div>
          <div className="support-comment-fields">
            <p className="support-comment-fields-name text-blue">{data.user.name}</p>
            <p className="support-comment-fields-default">Дата: {data.date}</p>
            <p className="support-comment-fields-default">ID: {data.user.id}</p>
          </div>
        </div>
        <i className="fa fa-remove" onClick={() => {onDelete(data.user.id)}}/>
      </div>
      <p className="support-comment-text">{data.text}</p>
    </div>
  );
};

export default UserComment;