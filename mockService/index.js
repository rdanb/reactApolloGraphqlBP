const express = require('express'),
      app = express(),
      port = 5000
const formatters = require('./util/formatters'),
      messages = require('./util/messages')

app.get('/person/:id', (request, response) => {
  const { id } = request.params
  response.statusCode = 400

  if (id.length > 10) {
    return response.send(messages.maxLengthReached)
  }

  if (isNaN(id)) {
    return response.send(messages.invalidNumber('person'))
  } else {
    response.statusCode = 200
    return response.send(formatters.person(parseFloat(id)))
  }
})

app.get('/facility/:id', (request, response) => {
  const { id } = request.params
  response.statusCode = 400

  if (isNaN(id)) {
    return response.send(messages.invalidNumber('facility'))
  } else {
    response.statusCode = 200
    return response.send(formatters.facility(parseFloat(id)))
  }
})

app.get('/exposure/:id', (request, response) => {
  const { id } = request.params
  response.statusCode = 400

  if (isNaN(id)) {
    return response.send(messages.invalidNumber('exposure'))
  } else {
    response.statusCode = 200
    return response.send(formatters.exposure(parseFloat(id)))
  }
})

app.listen(port, () => console.log(`Listening on port ${port}`))
