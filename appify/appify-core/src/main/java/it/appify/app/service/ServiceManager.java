package it.appify.app.service;

import java.util.Collection;
import java.util.Map;

import it.appify.api.Service;
import it.appify.app.Registry;

public class ServiceManager {

	public static void register(String serviceId, Service serviceInstance) {
		Registry.register(serviceId, serviceInstance);
	}

	public static Service getService(String serviceId) {
		return Registry.get(serviceId);
	}

	public static void stopAllService() {
		Map<String, Object> map = Registry.getAll();
		Collection<Object> services = map.values();
		for (Object object : services) {
			if (object != null && object instanceof Service) {
				Service service = (Service) object;
				service.stop();
			}
		}

	}

	public static void resumeAllServices() {
		Map<String, Object> map = Registry.getAll();
		Collection<Object> services = map.values();
		for (Object object : services) {
			if (object != null && object instanceof Service) {
				Service service = (Service) object;
				service.start();
			}
		}
	}

}
