import express from 'express';
import cors from 'cors';
import userRoutes from './routes/users.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// 라우터 연결
app.use('/api/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});