import React, { useState } from 'react';
import ExerciseRow from './ExerciseRow'
import Alert from 'react-bootstrap/Alert'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import SortArrow from './SortArrow'

function ExerciseTable({ exercises, onEdit, onDelete }) {
    const [sortCriteria, setSortCriteria] = useState({ field: 'date', direction: 'descending' })

    let sortedExercises = [...exercises]

    // sorts exercises based on sort criteria's field and direction.
    // if fields is equal, sorts by date
    sortedExercises.sort((a, b) => {
    
        if (a[sortCriteria.field] < b[sortCriteria.field]) {
            return sortCriteria.direction === 'ascending' ? -1 : 1
        } else if (a[sortCriteria.field] > b[sortCriteria.field]) {
            return sortCriteria.direction === 'ascending' ? 1 : -1
        } else {
            if (a.date > b.date){
                return -1
            } else {
                return 1
            }
        }
    })

    // changes sort critera. allows toggling of sort direction
    const changeCritera = (field) => {
        let direction = 'descending'
        if (sortCriteria.field === field && sortCriteria.direction === 'descending') {
            direction = 'ascending'
        }
        setSortCriteria({ field, direction })
    }


    if (exercises.length > 0) {
        return (
            <>
                <Container>
                    <Row>
                        <Col className="mt-3">
                            <h3 className='text-center'>Exercise List</h3>
                            <Table responsive striped hover className="mt-3">
                                <thead>
                                    <tr>
                                        <th className="clickable" id="name" onClick={() => changeCritera('name')}>Name  <SortArrow id="name" sortCriteria={sortCriteria} /></th>
                                        <th className="clickable" id="reps" onClick={() => changeCritera('reps')}>Reps  <SortArrow id="reps" sortCriteria={sortCriteria} /></th>
                                        <th className="clickable" id="sets" onClick={() => changeCritera('sets')}>Sets  <SortArrow id="sets" sortCriteria={sortCriteria} /></th>
                                        <th className="clickable" id="weight" onClick={() => changeCritera('weight')}>Weight  <SortArrow id="weight" sortCriteria={sortCriteria} /></th>
                                        <th className="clickable" id="date" onClick={() => changeCritera('date')}>Date  <SortArrow id="date" sortCriteria={sortCriteria} /></th>
                                        <th className="text-center">Edit</th>
                                        <th className="text-center">Delete</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedExercises.map((exercise, i) => <ExerciseRow exercise={exercise} onEdit={onEdit} onDelete={onDelete} key={i} />)}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>

            </>
        )

    } else {
        return (
            <Container>
                <Row>
                    <Col className="mt-3">
                        <h3 className='text-center'>Exercise List</h3>
                        <Alert variant='info' className="text-center">No exercises to display</Alert>

                    </Col>
                </Row>
            </Container>


        )

    }

}

export default ExerciseTable;