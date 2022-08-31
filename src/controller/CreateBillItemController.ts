import { CreateBillItemService } from "../service/CreateBillItemService";
import { Request, Response } from "express";

class CreateBillItemController {
  async handle(request: Request, response: Response){
    const { image, name, price } = request.body;
    const createBillItemService = new CreateBillItemService();
    const createdBillItem = await createBillItemService.execute({ image, name, price });
    return response.json(createdBillItem);
  }
}

export { CreateBillItemController }
