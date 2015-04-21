package it.appify.offline.linker;

import java.util.HashSet;
import java.util.SortedSet;

import com.google.gwt.core.ext.LinkerContext;
import com.google.gwt.core.ext.TreeLogger;
import com.google.gwt.core.ext.UnableToCompleteException;
import com.google.gwt.core.ext.linker.AbstractLinker;
import com.google.gwt.core.ext.linker.Artifact;
import com.google.gwt.core.ext.linker.ArtifactSet;
import com.google.gwt.core.ext.linker.EmittedArtifact;
import com.google.gwt.core.ext.linker.LinkerOrder;
import com.google.gwt.core.ext.linker.Shardable;
import com.google.gwt.core.ext.linker.LinkerOrder.Order;
import com.google.gwt.core.ext.linker.impl.SelectionInformation;

@Shardable
@LinkerOrder(Order.POST)
public class ApplicationCacheLinker extends AbstractLinker {
	private static String MANIFEST;

	@Override
	public String getDescription() {
		return "ApplicationCacheLinker";
	}

	@Override
	public ArtifactSet link(TreeLogger logger, LinkerContext context, ArtifactSet artifacts, boolean onePermutation) throws UnableToCompleteException {
		MANIFEST = context.getModuleName() + "-artifacts.lst";

		ArtifactSet toReturn = new ArtifactSet(artifacts);

		logger.log(TreeLogger.INFO, "SelectionInformation:");
		SortedSet<SelectionInformation> selectionInformationSet = toReturn.find(SelectionInformation.class);
		SelectionInformation selectionInformation = selectionInformationSet.isEmpty() ? null : selectionInformationSet.first();

		HashSet<String> classes = new HashSet<String>();
		for (Artifact<?> a : artifacts) {
			classes.add(a.getClass().getName());
		}
		logger.log(TreeLogger.INFO, classes.toString());

		if (onePermutation) {
			return toReturn;
		}

		if (toReturn.find(SelectionInformation.class).isEmpty()) {
			logger.log(TreeLogger.INFO, "DevMode warning: Clobbering " + MANIFEST + " to allow debugging. Recompile before deploying your app!" + artifacts);
			// artifacts = null;
			return toReturn;
		}

		// Create the general cache-manifest resource for the landing page:
		if (selectionInformation != null)
			toReturn.add(emitLandingPageCacheManifest("../" + context.getModuleName() + "-artifacts.lst", context, logger, artifacts));
		return toReturn;
	}

	/**
	 * Creates the cache-manifest resource specific for the landing page.
	 *
	 * @param context
	 *            the linker environment
	 * @param logger
	 *            the tree logger to record to
	 * @param artifacts
	 *            {@code null} to generate an empty cache manifest
	 */
	@SuppressWarnings("rawtypes")
	private Artifact<?> emitLandingPageCacheManifest(String fileName, LinkerContext context, TreeLogger logger, ArtifactSet artifacts) throws UnableToCompleteException {
		StringBuilder publicSourcesSb = new StringBuilder();

		if (artifacts != null) {
			// Iterate over all emitted artifacts, and collect all cacheable
			// artifacts
			for (Artifact artifact : artifacts) {
				if (artifact instanceof EmittedArtifact) {
					EmittedArtifact ea = (EmittedArtifact) artifact;
					String pathName = ea.getPartialPath();
					if (pathName.endsWith("symbolMap") || pathName.endsWith(".xml.gz") || pathName.endsWith("rpc.log") || pathName.endsWith("gwt.rpc") || pathName.endsWith("manifest.txt") || pathName.startsWith("rpcPolicyManifest") || pathName.startsWith("soycReport") || pathName.endsWith(".cssmap")) {
						continue;// skip these resources
					} else {
						publicSourcesSb.append(context.getModuleName()).append("/").append(pathName.replace("\\", "/")).append("\n");
					}
				}
			}
		}

		// build cache list
		StringBuilder sb = new StringBuilder();
		sb.append(publicSourcesSb);
		logger.log(TreeLogger.DEBUG, "Be sure your landing page's <html> tag declares a manifest: <html manifest=" + MANIFEST + "\">");

		// Create the manifest as a new artifact and return it:
		return emitString(logger, sb.toString(), fileName);
	}

}
