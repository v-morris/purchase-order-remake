import React from "react";

const CreateUser = props => {
  return (
    <div>
      <h1>Create User</h1>
      <form>
        {/* FORM FIELDS */}
        <input type="text" ref={props.firstName} placeholder="First Name" />
        <input type="text" ref={props.lastName} placeholder="Last Name" />
        <input type="text" ref={props.username} placeholder="Username" />
        <input type="text" ref={props.password} placeholder="Password" />

        {/* RADIO BUTTON ROLES */}
        <br />
        <label htmlFor="role">Select Role</label>
        <br />
        <span>
          <input
            type="radio"
            name="role"
            defaultChecked
            onChange={props.handleRoleChange}
            value="1"
          />
          <label htmlFor="1">Manager</label>
        </span>
        <span>
          <input
            type="radio"
            name="role"
            onChange={props.handleRoleChange}
            // ref={this.props.role}
            value="2"
          />
          <label htmlFor="2">Shift Lead</label>
        </span>
        <button onClick={props.handleSubmit}>Add User</button>

        {/* DISPLAY ANY ERROR MESSAGES */}
        {props.errors.map(error => (
          <p key={error}>{error}</p>
        ))}
      </form>
    </div>
  );
};

export default CreateUser;
