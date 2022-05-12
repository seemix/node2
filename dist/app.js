"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const user_1 = require("./entity/user");
const apiRouter_1 = require("./router/apiRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded());
app.use(apiRouter_1.apiRouter);
app.get('/users', async (req, res) => {
    // const users = await getManager().getRepository(User).find();
    // console.log(users);
    // res.json(users);
    const users = await (0, typeorm_1.getManager)().getRepository(user_1.User).find({ relations: ['posts'] });
    res.json(users);
});
// app.post('/users', async (req: Request, res: Response) => {
//     const createdUser = await getManager().getRepository(User).save(req.body);
//     res.json(createdUser);
// });
app.delete('/users/:id', async (req, res) => {
    const deletedUser = await (0, typeorm_1.getManager)()
        .getRepository(user_1.User)
        .softDelete({ id: Number(req.params.id) });
    res.json(deletedUser);
});
app.listen(5500, async () => {
    try {
        const connection = await (0, typeorm_1.createConnection)();
        if (connection)
            console.log('Database is connected!');
    }
    catch (e) {
        console.log(e);
    }
    console.log('Server has started!!!');
});
//# sourceMappingURL=app.js.map