import * as haanOracle from "haan-oracle";
import { Product, ProductRowMapper } from "../product.entity";

export class GetProductsQuery extends haanOracle.OracleQuery<Product> {
	public catalogId: string;

	protected query = `
		SELECT 
			NM_ATIV, 
			CD_ATIV,
			DT_VENC_ATIV
		FROM 
			TB_ATIV 
		WHERE CD_ATIV = :catalogId`;

	private readonly catalogRowMapper = new ProductRowMapper();

	/**
	 * Returns the list of bind parameters for the query.
	 */
	protected getBindParameters(): haanOracle.BindParameters {
		return {
			catalogId: this.catalogId,
		};
	}

	/**
	 * Transforms from @see haanOracle.IRowType to @see Catalog
	 * @param row A row that the query returned.
	 */
	protected transform(row: haanOracle.IRowType) {
		return this.catalogRowMapper.map(row);
	}
}
