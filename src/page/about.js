import React, { Component } from "react";
import Menu from "../component/menu/menu";
import List from "../component/list/list";
import Axios from "axios";
export default class about extends Component {
  state = {
    datas: []
  };

  componentDidMount() {
    Axios.get("https://api-wisata.herokuapp.com/api/").then(res => {
      const datas = res.data.data;
      this.setState({ datas });
    });
  }

  render() {
    console.log(this.state.datas);
    return (
      <div>
        <Menu />
        <h2 style={{ textAlign: "center" }}>ini halaman about</h2>
        <List data={this.state.datas} />
      </div>
    );
  }
}
