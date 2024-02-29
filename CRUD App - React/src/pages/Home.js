import React, { Component } from "react";
import SimpleImageSlider from "react-simple-image-slider";
export default class Home extends Component {
  render() {
    const images = [
      { url: "images/1.jpg" },
      { url: "images/2.jpg" },
      { url: "images/3.jpg" },
      { url: "images/4.jpg" },
      { url: "images/5.jpg" },
    ];
    return (
      <>
        <SimpleImageSlider
          width="100%"
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
        />
        <div className="row">
          <div className="left p-3  col-sm-12 col-mg-4 col-lg-3 col-xl-2">
            <ul className="list-group text-center mt-2">
              <li className="list-group-item active">An active item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
            <ul className="list-group text-center mt-2">
              <li className="list-group-item active">An active item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
            <ul className="list-group text-center mt-2">
              <li className="list-group-item active">An active item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
              <li className="list-group-item">A fourth item</li>
              <li className="list-group-item">And a fifth one</li>
            </ul>
          </div>
          <div className="right p-3 bg-warning col-sm-12 col-mg-8 col-lg-9 col-xl-10"></div>
        </div>
      </>
    );
  }
}
