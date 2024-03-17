const express = require('express');
const app = express();
app.use(express.json());

const courses = [
    { id: 1, title: 'nodejs' },
    { id: 2, title: 'js' },
    { id: 3, title: 'HTML' },
    { id: 4, title: 'CSS' }
];

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found');
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        title: req.body.title
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('Course not found');

    course.title = req.body.title;
    res.send(course);
});

app.listen(2000, () => {
    console.log('Server is running on port 2000');
});