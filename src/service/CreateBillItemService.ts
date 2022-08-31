import { BillItemRepository } from "../repository/BillItemRepository";
import { getCustomRepository } from "typeorm";

interface BillItemProps {
    image: string;
    name: string;
    price: number;
}

class CreateBillItemService {
  async execute({ image, name, price }: BillItemProps) {
    const shopItemRepository = getCustomRepository(BillItemRepository);

    if (!name) {
        console.log("Please, insert the item name...");
    }

    if (!price) {
        console.log("Please, insert the item price...");
    }

    const createdBillItem = shopItemRepository.create({ image, name, price });
    await shopItemRepository.save(createdBillItem);
    return createdBillItem;
  }
}

export { CreateBillItemService }
