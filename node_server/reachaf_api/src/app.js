import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from 'config';
import routes from './routes';
import initDB from './db';

let app = express();
app.server = http.createServer(app);

app.use(morgan('dev'));
app.set('jwt-secret', config.secret);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
// no stacktraces leaked to user unless in development environment
app.use(function(err, req, res) {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: app.get('env') === 'development' ? err : {}
  });
});

initDB(() => {
  app.server.listen(
    process.env.PORT || config.port,
    process.env.SERVE_IP || config.ip,
    () => {
      console.log(`Started on port ${app.server.address().port}`);
    }
  );
});

export default app;
