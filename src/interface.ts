export interface NavigationBundle {
	from: any;
  setFrom:any;
	to: any;
  setTo:any;
	currentPage: any;
	setCurrentPage: any;
  changedRoute:any;
  setChangedRoute:any;
  userId:any;
  setUserId:any;
}

export const defaultNavigationBundle = {
	from: undefined,
  setFrom:undefined,
	to: undefined,
  setTo:undefined,
	currentPage: undefined,
	setCurrentPage: undefined,
  changedRoute:undefined,
  setChangedRoute:undefined,
  userId:undefined,
  setUserId:undefined,
};
