import React, { Component } from "react";
import api from "../../services/api";

import "./styles.css";

export default class Main extends Component {
  state = {
    users: []
  };
  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    const response = await api.get("users");
    this.setState({ users: response.data });
  };

  render() {
    const { users } = this.state;
    return (
      <div className="user-list">
        {users.map(user => (
          <article key={user.id}>
            <strong>{user.name}</strong>
            <p>{user.email}</p>
            <p>{user.job}</p>
          </article>
        ))}
        <div className="actions">
          <button>Anterior</button>
          <button>Próximo</button>
        </div>
      </div>
    );
  }
}
