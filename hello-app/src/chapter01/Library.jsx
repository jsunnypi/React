import React from "react";
import Book from "./Book";

function Library(props){
    return(
        <div>
            <Book name="처음 만난 리액트" numOfPage={300} />
            <Book name="처음 만난 node.js" numOfPage={250} />
            <Book name="처음 만난 java" numOfPage={480} />
        </div>
    )
}

export default Library;