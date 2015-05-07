package it.appify.annotations;

import it.appify.app.WebApp;

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
 * This annotation MUST be used on your Controller class of your pages. Once
 * annotated your class the WebApp will be injected in the contructor The only
 * constraint of a controller is to have a parameterized constructor with the
 * {@link WebApp} type. Controller annotation enables your class to bind your
 * methods to a view trough the {@link ViewHandler} annotation
 * 
 * @author Luigi
 *
 */
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Controller {

	/**
	 * The pageId used to scan your html page and bind your annotated
	 * {@link ViewHandler} methods
	 * 
	 * @return
	 */
	public String page() default "mainPage";
}
