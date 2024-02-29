import React, { Component } from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./common/Menu";
import Footer from "./common/Footer";
// import Header from "./common/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Read from "./pages/Read";
import Create from "./pages/Create";
import Update from "./pages/Update";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Menu></Menu>
          {/* <Header></Header> */}
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/create" element={<Create></Create>}></Route>
            <Route path="/update/:id" element={<Update></Update>}></Route>
            <Route path="/read" element={<Read></Read>}></Route>
            <Route path="/search" element={<Search></Search>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </>
    );
  }
}

/*
import React from "react";
import { Fragment } from "react";
import Menu from "./Menu";
import { useState } from "react";
import New from "./New";
import MenuForNews from "./MenuForNews";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  let [item, setItem] = useState(Menu);
  let filter = (cat) => {
    let fdata = Menu.filter((list) => {
      return list.category === cat;
    });
    setItem(fdata);
  };
  return (
    <Fragment>
      <h2>APP COMPONENT</h2>
      <hr></hr>
      <div className="btn-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            filter("mobile");
          }}
        >
          Mobile
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            filter("shirt");
          }}
        >
          Shirt
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            filter("watch");
          }}
        >
          watch
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => {
            setItem(Menu);
          }}
        >
          All
        </button>
      </div>
      <hr></hr>
      {item ? (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {item.map((pro) => {
            return (
              <div className="col">
                <div className="card">
                  <img src={pro.pimage} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{pro.pname}</h5>
                    <p className="card-text">
                      category={pro.category} Price:{pro.price}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <p>No Data</p>
      )}
      <NewsAPI></NewsAPI>
    </Fragment>
  );
}

export default App;

function NewsAPI() {
  return (
    <Fragment>
      <BrowserRouter>
        <MenuForNews />
        <Routes>
          <Route path="/" element={<New category="All" />} />
          <Route path="/sports" element={<New category="sports" />} />
          <Route path="/business" element={<New category="business" />} />
          <Route path="/technology" element={<New category="technology" />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}
*/
//Get The Form Values With real Time Typing using Function
// import React from "react";
// import { useState } from "react";

// function App() {
//   let [name, setName] = useState(null);
//   let [password, setPassword] = useState(null);
//   let show = () => {
//     console.log(name + password);
//   };
//   return (
//     <>
//       <h2>App Component</h2>
//       <form onSubmit={show}>
//         Name:
//         <input
//           type="text"
//           onChange={(e) => {
//             return setName(e.target.value);
//           }}
//         ></input>
//         <br></br>
//         Password:
//         <input
//           type="password"
//           onChange={(e) => {
//             return setPassword(e.target.value);
//           }}
//         ></input>
//         <input type="submit"></input>
//       </form>
//       <h3>Name: {name}</h3>
//       <h3>Password : {password}</h3>
//     </>
//   );
// }

// export default App;

//Get The Form Values With real Time Typing using Clss

// import React, { Component } from "react";

// export default class App extends Component {
//   state = {
//     name: null,
//     pass: null,
//   };
//   show = (e) => {
//     console.log(this.state.name + this.state.pass);
//   };
//   render() {
//     return (
//       <>
//         <h2>App Component</h2>
//         <form onSubmit={this.show}>
//           Name:
//           <input
//             type="text"
//             name="name"
//             placeholder="Enter The Name"
//             onChange={(e) => {
//               this.setState({ name: e.target.value });
//             }}
//           ></input>
//           <br></br>
//           Password:
//           <input
//             type="password"
//             name="password"
//             placeholder="enter Pass"
//             onChange={(e) => {
//               this.setState({ pass: e.target.value });
//             }}
//           ></input>
//           <br></br>
//           <input type="submit"></input>
//         </form>
//         <h3>Name:{this.state.name} </h3>
//         <h3>Password : {this.state.pass}</h3>
//       </>
//     );
//   }
// }

// //useEffect
// import React, { Fragment, useEffect, useState } from "react";

// function App() {
//   let [inc, setInc] = useState(1);
//   let [dec, setDec] = useState(100);
//   let incr = () => {
//     setInc((inc = inc + 1));
//   };

//   let decr = () => {
//     setDec((dec -= 1));
//   };

//   //   useEffect(() => {
//   //     incr();
//   //   }, []);
//   useEffect(() => {
//     // incr();
//     // decr();
//   }, [inc]);

//   return (
//     <Fragment>
//       <h2>App Component</h2>
//       <h2>Increment : {inc}</h2>
//       <button onClick={incr}>Increase</button>
//       <h2>Decriment : {dec}</h2>
//       <button onClick={decr}>Decrease</button>
//     </Fragment>
//   );
// }

// export default App;
