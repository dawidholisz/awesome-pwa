import React, { useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useLocalStorage } from 'react-use'

const getId = () => Math.random().toString(36).substr(2, 9)

const OfflineNotes = () => {
  const [notes, setNotes] = useLocalStorage('notes', [])
  const [newNoteContent, setNewNoteContent] = useState('')

  const addNotes = () => {
    setNotes([...notes, { id: getId(), content: newNoteContent }])
    setNewNoteContent('')
  }

  const removeNote = id => () => {
    setNotes(notes.filter(note => note.id !== id))
  }

  return (
    <Row>
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Add notes</Card.Title>
            <Card.Text>
              <textarea value={newNoteContent} onChange={(e) => setNewNoteContent(e.target.value)}/>
              <Button variant="success" onClick={addNotes}>Add notes</Button>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col>
        <h2>My notes:</h2>
        <Row>
          {notes.map(({ id, content }) => (
            <Col xs={6} md={4} key={id}>
              <Card>
                <p>{content}</p>
                <Button variant="danger" size="sm" onClick={removeNote(id)}>Remove</Button>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  )
}

export default OfflineNotes
