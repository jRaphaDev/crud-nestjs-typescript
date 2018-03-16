import * as haan from "haan";
import * as haanOracle from "haan-oracle";

import { Component, Inject } from "@nestjs/common"
import { GetProductsQuery } from "./query/get-product.query";
import { DB_TOKEN } from "../constants/token.constant";

@Component()
export class ProductRepository{

  private readonly getProductsQuery: GetProductsQuery;
  // private readonly insertCatalogCommand: InsertCatalogCommand;

  constructor(
    @Inject(DB_TOKEN) poolOrConnection: haanOracle.ISimplePool | haanOracle.ISimpleConnection) {
    this.getProductsQuery = new GetProductsQuery(poolOrConnection);
    // this.insertCatalogCommand = new InsertCatalogCommand(poolOrConnection);
  }

  public findById(catalogId: string): Promise<any> {
    this.getProductsQuery.catalogId = catalogId;
    return this.getProductsQuery.executeFirstOrNull();
  }

  // public insertCatalog(nmAtiv: string, cdAtiv: string): Promise<{ rowsAffected: number }> {
  //   this.insertCatalogCommand.nmAtiv = nmAtiv;
  //   this.insertCatalogCommand.cdAtiv = cdAtiv;
  //   return this.insertCatalogCommand.execute();
  // }
 
}