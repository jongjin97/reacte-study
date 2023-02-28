import React from "react";
import Comment from "./Comment";

const comments = [
    {name: "윤종진", comment: "안녕하세요!"},
    {name: "jongjin", comment: "안녕하세요!"},
    {name: "kim jj", comment: "반갑습니다!"},
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment, index) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} key={index} />
                );
            })}
        </div>
    )
}

export default CommentList;