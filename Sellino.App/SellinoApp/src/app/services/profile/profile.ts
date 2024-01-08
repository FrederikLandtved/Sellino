export interface ProfileModel {
  ProfileId: number,
  Name: string,
  Bio: string,
  CompanyHexColor: string,
  TextOnCompanyHexColor: string,
  DarkCompanyHexColor: string,
  TextOnDarkCompanyHexColor: string,
  SecondaryCompanyHexColor: string,
  TextOnSecondaryCompanyHexColor: string,
  ProfileMediaId: number | null,
  CoverMediaId: number | null
}