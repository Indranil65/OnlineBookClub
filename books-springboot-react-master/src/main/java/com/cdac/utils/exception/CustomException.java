package com.cdac.utils.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CustomException extends Exception {
	private static final long serialVersionUID = 1L;

	/**
	 * The exception message
	 */
	private String message;
}
