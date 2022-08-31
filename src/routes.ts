import { CreateBillItemController } from "./controller/CreateBillItemController";
import { ListBillItemController } from "./controller/ListBillItemController";
import { Router, Request, Response } from "express";

export const router = Router();

const createBillItemController = new CreateBillItemController();
router.post('/bill-items', createBillItemController.handle);

const listBillItemController = new ListBillItemController();
router.get('/bill-items', listBillItemController.handle);

router.get('/', (request: Request, response: Response) => {
    return response.json({ message: "The API is running..." });
});
