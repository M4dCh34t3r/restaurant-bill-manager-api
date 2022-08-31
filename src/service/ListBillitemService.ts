import { BillItemRepository } from "../repository/BillItemRepository";
import { getCustomRepository } from "typeorm";

class ListBillItemService{
  async execute() {
    const shopItemRepository = getCustomRepository(BillItemRepository);
    const allBillItems = await shopItemRepository.find();
    return allBillItems;
  }
}

export { ListBillItemService }
