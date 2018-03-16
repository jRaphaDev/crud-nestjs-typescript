import * as haan from "haan";
import * as haanOracle from "haan-oracle";
import { DB_TOKEN } from "../constants/token.constant";

export const configProvider = new haan.ConfigurationProvider();

export const logger = new haan.Logger(configProvider);
export const pool: haanOracle.ISimplePool = new haanOracle.SimplePool(logger, configProvider);

export const connectionProvider =   {
  provide: DB_TOKEN,
  useFactory: () => pool,
}
