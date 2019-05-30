import React, { Component } from "react";
import Menu from "../component/menu/menu";
import Streper from "../component/steper/steper";
export default class home extends Component {
  render() {
    return (
      <div>
        <Menu />
        <h2 style={{ textAlign: "center" }}>ini halaman home</h2>
        <Streper />
      </div>
    );
  }
}
