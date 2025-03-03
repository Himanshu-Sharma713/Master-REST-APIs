const app = require('./src/app.ts');
const startServer = () => {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}/`);
  });
};

startServer(); 
