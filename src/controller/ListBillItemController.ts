import { ListBillItemService } from "../service/ListBillItemService";
import { Request, Response } from "express";

class ListBillItemController {
  async handle(request: Request, response: Response){
    const listBillItemService = new ListBillItemService();
    const listedBillItems = await listBillItemService.execute();
    return response.json(listedBillItems);
  }
}

export { ListBillItemController }
