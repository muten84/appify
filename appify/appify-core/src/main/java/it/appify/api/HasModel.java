package it.appify.api;

public interface HasModel<M> {

	public String getModelId();

	public M getCurrentModel();

	public void updateModel(M model);

}
