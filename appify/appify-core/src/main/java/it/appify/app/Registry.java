package it.appify.app;

import java.util.HashMap;
import java.util.Map;

public final class Registry {

	  protected static Map<String, Object> map = new HashMap<String, Object>();

	  /**
	   * Returns the object with the given id.
	   * 
	   * @param id the identifier
	   * @return the object or <code>null</code> if no match
	   */
	  @SuppressWarnings("unchecked")
	  public static <X> X get(String id) {
	    return (X) map.get(id);
	  }

	  /**
	   * Returns a map of all registered objects.
	   * 
	   * @return the object map
	   */
	  public static Map<String, Object> getAll() {
	    return map;
	  }

	  /**
	   * Registers an object.
	   * 
	   * @param id the identifier
	   * @param obj the object to be registered
	   */
	  public static void register(String id, Object obj) {
	    map.put(id, obj);
	  }

	  /**
	   * Unregisters an object.
	   * 
	   * @param id the identifier
	   */
	  public static void unregister(String id) {
	    map.remove(id);
	  }

	  /**
	   * Unregisters all registered objects.
	   */
	  public static void unregisterAll() {
	    map.clear();
	  }

	  private Registry() {
	  }

	}
