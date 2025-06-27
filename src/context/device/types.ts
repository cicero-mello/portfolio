export type DeviceType = "mobile" | "desktop"

export interface Device {
    type: DeviceType
    isPortrait: boolean
    isMobileWidth: boolean
    isLoadingData: boolean
    isSmallHeight: boolean
    isGSAPSectionMinWidth: boolean
    isReposSectionMinWidth: boolean
    isReposSectionMobileMinWidth: boolean
    isContactSectionMinWidth: boolean
}
