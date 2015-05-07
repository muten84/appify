package it.appify.annotations;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

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
/**
 * Annotation enabling Geolocation service for your app
 * 
 * @author Luigi
 *
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Geolocation {

	public final static int HTML5 = 0;

	public final static int WS_PROVIDED = 1;

	public int type() default HTML5;

	public boolean enableHighAccuracy() default true;

	public int maxAge();

	public long timeout();
}
