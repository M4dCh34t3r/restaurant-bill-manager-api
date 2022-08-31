import { EntityRepository, getRepository, Repository } from "typeorm";
import { BillItem } from "../entity/BillItem";

@EntityRepository(BillItem)
class BillItemRepository extends Repository<BillItem> {}

export { BillItemRepository }
