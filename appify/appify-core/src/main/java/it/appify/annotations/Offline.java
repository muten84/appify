/* Appify - a tiny frontend framework to build complex mobile apps.
 * 
 * Copyright (C) 2015  Luigi Bifulco
 * Appify is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 * */
package it.appify.annotations;

import it.appify.offline.linker.ApplicationCacheLinker;

/**
 * Annotation enabling application cache and checking connection status capabilities WARNING: be sure to enable in your
 * html page the Application Cache manifest If using GWT you can enable a special linker {@link ApplicationCacheLinker}
 * to generate all cachable files.
 * 
 * @author Luigi
 *
 */
public @interface Offline {

}
