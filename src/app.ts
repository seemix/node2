import express, { Request, Response } from 'express';
import 'reflect-metadata';
import { createConnection, getManager } from 'typeorm';
import { User } from './entity/user';
import { apiRouter } from './router/apiRouter';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(apiRouter);

app.get('/users', async (req: Request, res: Response) => {
    // const users = await getManager().getRepository(User).find();
    // console.log(users);
    // res.json(users);
    const users = await getManager().getRepository(User).find({ relations: ['posts'] });
    res.json(users);
});

// app.post('/users', async (req: Request, res: Response) => {
//     const createdUser = await getManager().getRepository(User).save(req.body);
//     res.json(createdUser);
// });

app.delete('/users/:id', async (req: Request, res: Response) => {
    const deletedUser = await getManager()
        .getRepository(User)
        .softDelete({ id: Number(req.params.id) });
    res.json(deletedUser);
});

app.listen(5500, async () => {
    try {
        const connection = await createConnection();
        if (connection) console.log('Database is connected!');
    } catch (e) {
        console.log(e);
    }
    console.log('Server has started!!!');
});
