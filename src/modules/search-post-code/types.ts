import { saveAddresWithBuildingCode } from './actions';

export interface PostCodeResponse {
  address: string;
  buildingName: string;
  buildingCode: string;
  apartment: string;
}

// action types
export type SaveAddresWithBuildingCode = ReturnType<
  typeof saveAddresWithBuildingCode
>;
