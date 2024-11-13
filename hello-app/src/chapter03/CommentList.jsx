import React from "react";
import Comment from "./Comment";


function CommentList(props){
    return(
        <div>
            <Comment name={"이진선"} comment="수강생입니다."></Comment>
            <Comment name={"하늘"} comment="돌멩이다."></Comment>
        </div>
    )
}

export default CommentList;