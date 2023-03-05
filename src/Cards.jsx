import React from "react";

function Cards(props){
    return(
        <div className="cards">
            <div className="small">
                <img src={props.imgsrc} alt="myPic" className="img" />
                <div className="info">
                    <span className="cate">{props.title}</span>
                    <h2 className="title">{props.sname}</h2>
                    <a href={props.link} target='_blank' >
                        <button>watch </button>
                    </a>
                </div>
            </div>
        </div>
    )

}
export default Cards;