import connect from 'connect';
import cowsay from 'cowsay';
import path from 'path';
import portscanner from 'portscanner';
import serveStatic from 'serve-static';

// Configuration for the server.
const PORT = 80;
const MAX_PORT = PORT + 100;
const HOST = '127.0.0.1';

const app = connect();

const verbs = [
  'Chewing the cud',
  'Grazing',
  'Mooing',
  'Lowing',
  'Churning the cream'
];

app.use(serveStatic(path.join(__dirname, '..')));
app.use('/api/auth/assert/lgXRkZ6XRN098CvJGnmGizB5NMT2',function fooMiddleware(req, res, next){
  res.end('4TlRjME9XRXpOamhoTm1Nd1ltTm1OR0U0TkdVPTIzOTY=');
  //console.log(req)
  // res.end('4TWpVNE1tRXpOamhoTm1Nd1ltTm1OR0U0TkdVPTI5NzM=');
  //next();
})

portscanner.findAPortNotInUse(PORT, MAX_PORT, HOST, (error, port) => {
  if (error) {
    throw error;
  }

  process.stdout.write(cowsay.say({
    text: `${verbs[Math.floor(Math.random() * 5)]} on ${HOST}:${port}`
  }) + '\n\n');

  app.listen(port);
});
