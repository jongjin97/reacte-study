import React from "react";

const students = [
    {
        id: 1,
        name: "김철수",
    },
    {
        id: 2,
        name: "이영희",
    },
    {
        id: 3,
        name: "박희수",
    },
    {
        id: 4,
        name: "최영수",
    }
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id}>{student.name}</li>;
            })}
        </ul>
    )
}

export default AttendanceBook;