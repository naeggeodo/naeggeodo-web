export interface PatchBuildingCodeRequestData {
  address: string;
  buildingCode: string;
  zonecode: string;
}

export interface PatchBuildingCodeResponse {
  address: string;
  buildingCode: string;
  id: string;
  zonecode: string;
  apartment: 'Y' | 'N' | string;
}
