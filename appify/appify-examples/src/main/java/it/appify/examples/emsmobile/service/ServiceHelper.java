package it.appify.examples.emsmobile.service;

import java.util.Collection;
import java.util.Map;

import it.appify.examples.emsmobile.util.Registry;

public class ServiceHelper {		
	
	public static void register(String serviceId, GenericService serviceInstance){
		Registry.register(serviceId, serviceInstance);
	}
	
	public static GenericService getService(String serviceId){
		return Registry.get(serviceId);
	}
	
	public static void stopAllService(){
		Map<String, Object> map = Registry.getAll();
		Collection<Object> services = map.values();
		for (Object object : services) {
			if(object!= null && object instanceof GenericService){
				GenericService service = (GenericService) object;
				service.stop();
			}
		}
		
	}
	
	public static void resumeAllServices(){
		Map<String, Object> map = Registry.getAll();
		Collection<Object> services = map.values();
		for (Object object : services) {
			if(object!= null && object instanceof GenericService){
				GenericService service = (GenericService) object;
				service.start();
			}
		}
	}

}
