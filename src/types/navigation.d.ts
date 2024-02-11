export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      Welcome: NavigationScreen;
      Login: NavigationScreen;
      AuthScreens: NavigationScreen;
      AuthenticatedScreens: NavigationScreen;
      Company: NavigationScreen;
      Post: NavigationScreen;
      Maps: NavigationScreen;
      Event: NavigationScreen;
      Alerts: NavigationScreen;
    }
  }
}

export type NavigationScreen = undefined | ParamsNavigation;

export type TabScreensNavigation = {
  UserProfile: NavigationScreen;
  UserEdit: NavigationScreen;
};

export type ParamsNavigation = { [key: string]: any };
