import React from 'react'
import { useQuery, gql } from '@apollo/client';

const GET_STUDENTS = gql`
  query GetAllStudents {
    students {
        id
        name
        email
        age
    }
  }
`;

export default function Students() {

    const { loading, error, data } = useQuery(GET_STUDENTS);

    if (loading) return <h2 style={{ textAlign: 'center', color: 'darkgoldenrod' }}>Loading...</h2>;
    if (error) return <h2 style={{ textAlign: 'center', color: 'red' }}>{error.message}</h2>;
    // console.log(data.students);

    return (
        <div>
            <table>
                <caption className="table_caption">Students List</caption>
                <thead>
                    <tr>
                        <th>SR#</th>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.students.map((val, ind) => (
                            <tr key={ind + 1}>
                                <th>{ind + 1}</th>
                                <td>{val.id}</td>
                                <td>{val.name}</td>
                                <td>{val.email}</td>
                                <td>{val.age}<div className="App-logo">🚀</div></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}
