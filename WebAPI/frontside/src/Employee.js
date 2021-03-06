import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Employee extends Component {
    constructor(props) {
        super(props);
        this.state = { emps: [] }
    }

    refreshList() {
        fetch(process.env.REACT_APP_API + 'Employee')
            .then(response => response.json())
            .then(data => {
                this.setState({ emps: data });
            })
    }

    componentDidMount() {
        this.refreshList();
    }
    componentDidUpdate() {
        this.refreshList();
    }

    render() {
        const { emps } = this.state;
        return (
            <div>
                <Table className="mt-4" striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>EmployeeId</th>
                            <th>EmployeeName</th>
                            <th>Department</th>
                            <th>JoiningDate</th>
                            <th>Options</th>
                        </tr>
                    </thead>
                    <tbody>
                        {emps.map(emp =>
                            <tr key={emp.DepartmentId}>
                                <td>{emp.EmployeeId}</td>
                                <td>{emp.EmployeeName}</td>
                                <td>{emp.Department}</td>
                                <td>{emp.DateOfJoining}</td>
                                <td>Edit / Delete</td>

                            </tr>)}
                    </tbody>
                </Table>
            </div>
        )
    }
}