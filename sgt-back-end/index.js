const express = require('express');
const app = express();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});
const json = express.json();
app.use(json);

app.get('/api/grades', (req, res, next) => {
  const sql = `
      select *
        from "grades"
        `;
  db.query(sql)
    .then(result => {
      res.status(200).json(result.rows);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.post('/api/grades', (req, res, next) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  if (name === undefined || course === undefined || score === undefined || !Number.isInteger(score) || score <= 0) {
    res.status(400).json({ error: 'invalid inputs' });
    return;
  }

  const text = `insert into "grades"
               ("name", "course", "score")
               values($1, $2, $3)
               returning *`;
  const values = [name, course, score];

  db.query(text, values)
    .then(result => {
      res.status(201).json(result.rows);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });

});

app.put('/api/grades/:id', (req, res, next) => {
  const id = Number(req.params.id);
  const name = req.body.name;
  const course = req.body.course;
  const score = req.body.score;
  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  }
  if (name === undefined || course === undefined || score === undefined || !Number.isInteger(score) || score <= 0) {
    res.status(400).json({ error: 'invalid inputs' });
    return;
  }
  const text = `update "grades"
                set    "name" = $1,
                       "course" = $2,
                       "score" = $3
                where  "gradeId" = $4
                               returning *`;

  const values = [name, course, score, id];
  db.query(text, values)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${id}`
        });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.delete('/api/grades/:id', (req, res, next) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  }

  const sql = `delete from "grades"
               where "gradeId" = $1
               returning *`;
  const values = [id];

  db.query(sql, values)

    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${id}`
        });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'An unexpected error occurred' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
