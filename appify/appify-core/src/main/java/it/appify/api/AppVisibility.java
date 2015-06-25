package it.appify.api;

public interface AppVisibility {
    
    public static interface VisibilityCallback{
	public void onVisible();
	
	public void onHidden();
    }
    
    public boolean isAppVisible();
        
    public void addVisibilityHandler(VisibilityCallback callback);
     

}
