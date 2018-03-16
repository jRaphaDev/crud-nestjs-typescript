import { IsString, IsInt } from "class-validator"
import * as haanOracle from "haan-oracle";

export class Product {

  public name: string;

  public id: string;

  public dueDate: string;

}

export class ProductRowMapper {
	public map(row: haanOracle.IRowType): Product {
		let product = new Product();
		product.name = row.NM_ATIV;
		product.id = row.CD_ATIV;
		product.dueDate = row.DT_VENC_ATIV;
		return product;
	}
}